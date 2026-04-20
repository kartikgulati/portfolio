import aiResumeBuilder from "../../assets/projects/airesumebuilder.png";
import buttonStudio from "../../assets/projects/buttonstudio.png";
import expenseTracker from "../../assets/projects/expensetracker.png";
import paramount from "../../assets/projects/paramount.png";
import portfolio from "../../assets/projects/portfolio.png";
import gradiantGen from "../../assets/projects/gradiangen.png";
import techOutputs from "../../assets/projects/techoutputs.png";
import quizzzyfy from "../../assets/projects/quizzzyfy.png";
import QuizCode from "../../assets/projects/codequiz.png";

export const allProjects = [
  {
    id: "build-ai-resume",
    image: aiResumeBuilder,
    name: "Advanced AI resume builder with GPT-powered content generation.",
    title: "Build AI Resume",
    description:
      "An AI-first resume workflow focused on faster drafting, stronger wording, and cleaner presentation for job seekers.",
    link: "https://buildairesume.vercel.app/",
    tech: ["React", "OpenAI", "Tailwind CSS", "Vercel"],
    featured: true,
  },
  {
    id: "button-studio",
    image: buttonStudio,
    name: "Component library for React with Tailwind CSS buttons.",
    title: "Button Studio",
    description:
      "A component playground for polished button systems, with reusable variants aimed at product teams building consistent UI.",
    link: "https://buttonstudio.netlify.app/",
    tech: ["React", "Tailwind CSS", "UI Library"],
    featured: true,
  },
  {
    id: "quizzzyfy",
    image: quizzzyfy,
    name: "Live quiz app with WebSockets and a competitive leaderboard.",
    title: "Quizzzyfy",
    description:
      "A multiplayer quiz experience with real-time scoring, fast feedback loops, and a leaderboard that keeps sessions competitive.",
    link: "https://quizzzyfy.vercel.app/",
    tech: ["React", "WebSockets", "Node.js", "Vercel"],
    featured: false,
  },
  {
    id: "expense-tracker",
    image: expenseTracker,
    name: "Advanced expense tracker with authentication and dashboards.",
    title: "Expense Tracker",
    description:
      "A personal finance dashboard for tracking spending, organizing categories, and keeping account access gated behind auth.",
    link: "https://expense-tracker-kg.vercel.app/",
    tech: ["React", "Auth", "JavaScript", "Vercel"],
    featured: false,
  },
  {
    id: "paramount",
    image: paramount,
    name: "Business website built for Paramount Instruments.",
    title: "Paramount",
    description:
      "A production business site designed to present services clearly, build trust, and support a more professional client-facing presence.",
    link: "https://paramountinstruments.com/",
    tech: ["React", "Business Website", "Frontend"],
    featured: false,
  },
  {
    id: "quiz-code",
    image: QuizCode,
    name: "Quiz application built to test coding skills.",
    title: "QuizCode",
    description:
      "A coding-focused assessment experience that turns technical questions into a cleaner, more approachable product flow.",
    link: "https://paramountinstruments.com/",
    tech: ["React", "JavaScript", "Quiz App"],
    featured: false,
  },
  {
    id: "old-portfolio",
    image: portfolio,
    name: "Portfolio built with the Go-based HUGO framework.",
    title: "Old Portfolio",
    description:
      "An earlier portfolio iteration built with Hugo, focused on speed, simplicity, and a clean presentation of work.",
    link: "https://kartikgulati.github.io/itskg/",
    tech: ["Hugo", "Go", "Portfolio"],
    featured: false,
  },
  {
    id: "gradient-generator",
    image: gradiantGen,
    name: "Gradient generator with copy-to-clipboard functionality.",
    title: "Gradient Generator",
    description:
      "A lightweight front-end utility for quickly composing gradients and copying production-ready CSS values.",
    link: "https://gen-gradient.vercel.app/",
    tech: ["React", "CSS", "Tooling"],
    featured: false,
  },
  {
    id: "tech-outputs",
    image: techOutputs,
    name: "Technology blog with 100+ articles and trend coverage.",
    title: "TechOutputs",
    description:
      "A content-driven publishing project centered on technology trends, educational posts, and long-tail organic reach.",
    link: "https://techoutputs.blogspot.com/",
    tech: ["Blog", "Content", "SEO"],
    featured: false,
  },
];

export const Data_1 = allProjects.filter((project) => project.featured).map((project) => ({
  id_1: project.id,
  image_1: project.image,
  name_1: project.name,
  title_1: project.title,
  description_1: project.description,
  link_1: project.link,
  tech_1: project.tech,
}));

export const Data = allProjects.filter((project) => !project.featured).map((project) => ({
  id: project.id,
  image: project.image,
  name: project.name,
  title: project.title,
  description: project.description,
  link: project.link,
  tech: project.tech,
}));
