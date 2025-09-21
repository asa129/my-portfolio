import React from "react";
import { Badge } from "../ui/badge";
import {
  SiClaude,
  SiFirebase,
  SiGithubactions,
  SiJest,
  SiPuppeteer,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";

const techStackItems = [
  { id: "react", icon: <FaReact />, name: "React" },
  { id: "typescript", icon: <SiTypescript />, name: "TypeScript" },
  { id: "tailwindcss", icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { id: "vite", icon: <SiVite />, name: "Vite" },
  { id: "supabase", icon: <SiSupabase />, name: "Supabase" },
  { id: "firebase", icon: <SiFirebase />, name: "Firebase" },
  { id: "githubactions", icon: <SiGithubactions />, name: "GitHub Actions" },
  { id: "jest", icon: <SiJest />, name: "Jest" },
  {
    id: "reacttestinglibrary",
    icon: "",
    name: "React Testing Library",
  },
  { id: "claude", icon: <SiClaude />, name: "Claude API" },
  { id: "puppeteer", icon: <SiPuppeteer />, name: "puppeteer" },
];

export default function techStack(props: { id: string }) {
  return (
    <Badge variant="outline">
      {techStackItems.map((item) => {
        if (item.id === props.id) {
          return (
            <div key={item.id} className="flex items-center gap-2">
              {item.icon}
              {item.name}
            </div>
          );
        }
      })}
    </Badge>
  );
}
