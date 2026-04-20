/* eslint-disable react/no-unknown-property */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, useGLTF } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import * as THREE from "three";
import "./Lanyard.css";

const CARD_GLB_URL = "/card.glb";

function Lanyard({
  position = [0, 0, 22],
  gravity = [0, -9.81, 0],
  fov = 25,
  transparent = true,
}) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={1.2} />

        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          {/* Invisible floor so the card cannot fall forever */}
          <RigidBody type="fixed" colliders={false} position={[0, -6, 0]}>
            <CuboidCollider args={[50, 0.5, 50]} />
          </RigidBody>

          <Band isMobile={isMobile} />
        </Physics>

        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
  const fixed = useRef(null);
  const j1 = useRef(null);
  const j2 = useRef(null);
  const j3 = useRef(null);
  const card = useRef(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);

  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 6,
    linearDamping: 6,
  };

  const { nodes, materials } = useGLTF(CARD_GLB_URL);

  // Curve + dynamic strap geometry
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  curve.curveType = "chordal";

  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  const strapPointCount = isMobile ? 20 : 40;
  const strapPositions = useMemo(
    () => new Float32Array(strapPointCount * 3),
    [strapPointCount]
  );

  const strapGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(strapPositions, 3));
    return g;
  }, [strapPositions]);

  // Joints (lengths match spacing)
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.35]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.35]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.35]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.2, 0]]);

  useEffect(() => {
    if (!hovered) return;
    document.body.style.cursor = dragged ? "grabbing" : "grab";
    return () => void (document.body.style.cursor = "auto");
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current) return;

    // Dragging
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((r) => r.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    // Smooth intermediate joints
    [j1, j2].forEach((ref) => {
      if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
      const clampedDistance = Math.max(
        0.1,
        Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
      );
      ref.current.lerped.lerp(
        ref.current.translation(),
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
      );
    });

    // Update curve control points
    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.lerped);
    curve.points[2].copy(j1.current.lerped);
    curve.points[3].copy(fixed.current.translation());

    // Update strap line positions
    const pts = curve.getPoints(strapPointCount - 1);
    for (let i = 0; i < pts.length; i++) {
      strapPositions[i * 3 + 0] = pts[i].x;
      strapPositions[i * 3 + 1] = pts[i].y;
      strapPositions[i * 3 + 2] = pts[i].z;
    }
    strapGeometry.attributes.position.needsUpdate = true;
    strapGeometry.computeBoundingSphere();

    // Stabilize spin
    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.2, z: ang.z });
  });

  // Stable initial positions (this stops “falling from top” feeling)
  const anchorY = 3;

  const cardGeo = nodes?.card?.geometry;
  const clipGeo = nodes?.clip?.geometry;
  const clampGeo = nodes?.clamp?.geometry;

  const baseMap = materials?.base?.map;
  const metalMat = materials?.metal;

  return (
    <>
      <RigidBody ref={fixed} {...segmentProps} type="fixed" position={[0, anchorY, 0]} />

      <RigidBody ref={j1} {...segmentProps} position={[0.2, anchorY - 0.2, 0]}>
        <BallCollider args={[0.09]} />
      </RigidBody>

      <RigidBody ref={j2} {...segmentProps} position={[0.4, anchorY - 0.4, 0]}>
        <BallCollider args={[0.09]} />
      </RigidBody>

      <RigidBody ref={j3} {...segmentProps} position={[0.6, anchorY - 0.6, 0]}>
        <BallCollider args={[0.09]} />
      </RigidBody>

      <RigidBody
        ref={card}
        {...segmentProps}
        position={[0.8, anchorY - 1.0, 0]}
        type={dragged ? "kinematicPosition" : "dynamic"}
      >
        <CuboidCollider args={[0.8, 1.125, 0.02]} />

        <group
          scale={2.25}
          position={[0, -1.2, -0.05]}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          onPointerUp={(e) => {
            e.target.releasePointerCapture(e.pointerId);
            drag(false);
          }}
          onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId);
            drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
          }}
        >
          {cardGeo ? (
            <mesh geometry={cardGeo}>
              <meshPhysicalMaterial
                map={baseMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
          ) : null}

          {clipGeo && metalMat ? <mesh geometry={clipGeo} material={metalMat} /> : null}
          {clampGeo && metalMat ? <mesh geometry={clampGeo} material={metalMat} /> : null}
        </group>
      </RigidBody>

      {/* Strap */}
      <line geometry={strapGeometry} frustumCulled={false} renderOrder={999}>
        <lineBasicMaterial color="white" transparent opacity={1} />
      </line>
    </>
  );
}

useGLTF.preload(CARD_GLB_URL);

export { Lanyard };
export default Lanyard;
