import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import visualForge from '@/public/visualForge.png'
import gericht from "@/public/gericht.png";
import journeyJunction from "@/public/journeyJunction.png"
import marvel from "@/public/marvel.png"
import todo_list from "@/public/todo_list.png"
import urbanRoaster from "@/public/urbanRoaster.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Visual Forge",
    description:
      "Visual Forge, an AI DALL-E clone, sparks creativity with simple prompts, allowing effortless crafting of captivating images and pushing visual exploration boundaries.",
    tags: ["React", "Express", "MongoDB", "HTML", "CSS", "OpenAI", "Cloudinnary"],
    imageUrl: visualForge,
  },
  {
    title: "Gericht",
    description:
      "Experience Gericht's culinary finesse on this elegant landing page. Navigate effortlessly to discover visually stunning showcases of exquisite dishes, exclusive events, and enchanting stories behind each flavor.",
    tags: ["HTML", "React", "CSS", "Bootstrap"],
    imageUrl: gericht,
  },
  {
    title: "Urban Roaster",
    description:
      "Whether You're A Coffee Connoisseur Or Just Dipping Your Toe Into The Coffee World, It Can Be Hard To Sort Through All The Options Available. We Know Everyone Has Different Tastes—So Let Us Take The Mystery Out Of Choosing Your Next Bag!",
    tags: ["HTML", "Astro", "CSS", "Typescript"],
    imageUrl: urbanRoaster,
  },
  {
    title: "JourneyJunction",
    description:
      "JunctionJourney connects global adventurers, allowing you to share and explore vibrant experiences through captivating images, titles, and captions. Join now to embark on a worldwide expedition of wanderlust.",
    tags: ["HTML", "CSS", "MongoDB", "Node", "Passport"],
    imageUrl: journeyJunction,
  },
  {
    title: "Find My Hero",
    description:
      "This web app effortlessly retrieves comprehensive information about Marvel comic book characters. Enter a character's name, and instantly access details, fostering an immersive exploration of the Marvel Universe.",
    tags: ["HTML", "CSS", "Node"],
    imageUrl: marvel,
  },
  {
    title: "Todo",
    description:
      "Efficiently manage tasks with our user-friendly todo web app. Seamlessly organize, prioritize, and track your to-dos for enhanced productivity.",
    tags: ["HTML", "CSS", "Node", "MongoDB"],
    imageUrl: todo_list,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Astro",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
  "TypeScript",
  "Bootstrap"
] as const;