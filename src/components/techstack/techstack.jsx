"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import "./techstack.css";

const STACK_ITEMS = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Postman", Icon: SiPostman },
  { name: "Figma", Icon: SiFigma },
  { name: "Framer", Icon: SiFramer },
  { name: "Vercel", Icon: SiVercel },
];

const Bracket = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 27 78"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
    />
  </svg>
);

const StackCard = ({ item, index, total, progress }) => {
  const centerIndex = (total - 1) / 2;
  const distance = index - centerIndex;

  const x = useTransform(progress, [0, 0.5], [distance * 120, 0]);

  const y = useTransform(
    progress,
    [0, 0.5],
    [-Math.abs(distance) * 60 + 80, 0]
  );

  const rotate = useTransform(
    progress,
    [0, 0.5],
    [distance * 35, 0]
  );

  const scale = useTransform(progress, [0, 1], [1, 1]);

  const opacity = useTransform(progress, [0, 1, 1], [1, 1, 1]);

  return (
    <motion.div
      className="techstack_card"
      style={{
        x,
        y,
        
        scale,
        opacity,
        transformOrigin: "center",
      }}
    >
      <item.Icon className="techstack_icon" />
      <span className="techstack_label">{item.name}</span>
    </motion.div>
  );
};

const TechStack = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 40%"],
  });

  return (
    <section className="techstack section" id="techstack" ref={sectionRef}>
        
      <div className="flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black">
  <Bracket className="h-12 text-black" />

  <span className="font-geist">
   Tech Stack 
  </span>   

  <Bracket className="h-12 scale-x-[-1] text-black" />
</div>
      <div className="techstack_container container">
        <p className="techstack_intro">
          I work across product, frontend, backend, and deployment workflows.
          These are the tools I reach for most often when shipping projects.
        </p>

        <div className="techstack_grid">
          {STACK_ITEMS.map((item, index) => (
            <StackCard
              key={item.name}
              item={item}
              index={index}
              total={STACK_ITEMS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
