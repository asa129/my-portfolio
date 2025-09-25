import React, { JSX } from "react";
import { Badge } from "../ui/badge";
import {
  SiBootstrap,
  SiChakraui,
  SiCheerio,
  SiClaude,
  SiCloudflare,
  SiDaisyui,
  SiFirebase,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLinux,
  SiNextdotjs,
  SiOracle,
  SiPostgresql,
  SiPuppeteer,
  SiReacthookform,
  SiSpring,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

const techStackItems: { id: string; icon: JSX.Element | null; name: string }[] =
  [
    { id: "react", icon: <FaReact />, name: "React" },
    { id: "typescript", icon: <SiTypescript />, name: "TypeScript" },
    { id: "javascript", icon: <SiJavascript />, name: "JavaScript" },
    { id: "tailwindcss", icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { id: "vite", icon: <SiVite />, name: "Vite" },
    { id: "supabase", icon: <SiSupabase />, name: "Supabase" },
    { id: "firebase", icon: <SiFirebase />, name: "Firebase" },
    { id: "githubactions", icon: <SiGithubactions />, name: "GitHub Actions" },
    { id: "jest", icon: <SiJest />, name: "Jest" },
    { id: "reacttestinglibrary", icon: null, name: "React Testing Library" },
    { id: "claude", icon: <SiClaude />, name: "Claude API" },
    { id: "puppeteer", icon: <SiPuppeteer />, name: "puppeteer" },
    { id: "nextjs", icon: <SiNextdotjs />, name: "Next.js" },
    { id: "cloudflare", icon: <SiCloudflare />, name: "Cloudflare" },
    { id: "vitest", icon: <SiVitest />, name: "Vitest" },
    { id: "reacthookform", icon: <SiReacthookform />, name: "React Hook Form" },
    { id: "chakraui", icon: <SiChakraui />, name: "Chakra UI" },
    { id: "cheerio", icon: <SiCheerio />, name: "Cheerio" },
    { id: "daisyui", icon: <SiDaisyui />, name: "Daisy UI" },
    { id: "mycrocmsapi", icon: null, name: "MyCroCMS API" },
    { id: "qiitaapi", icon: null, name: "Qiita API" },
    { id: "oracle", icon: <SiOracle />, name: "Oracle" },
    { id: "postgresql", icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: "db2", icon: null, name: "DB2" },
    { id: "java", icon: <FaJava />, name: "Java" },
    { id: "c", icon: null, name: "C" },
    { id: "springboot", icon: <BiLogoSpringBoot />, name: "Spring Boot" },
    { id: "spring", icon: <SiSpring />, name: "Spring" },
    { id: "linux", icon: <SiLinux />, name: "Linux" },
    { id: "bootstrap", icon: <SiBootstrap />, name: "Bootstrap" },
    { id: "jquery", icon: <SiJquery />, name: "jQuery" },
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
