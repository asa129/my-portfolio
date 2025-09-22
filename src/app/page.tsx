import Activity from "@/components/activity";
import About from "../components/about";
import Article from "../components/article";
import { Separator } from "../components/ui/separator";
import Project from "@/components/project";
import Experience from "@/components/experience";
import { SiQiita } from "react-icons/si";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  const navItems: { id: string; label: string }[] = [
    { id: "about", label: "ABOUT" },
    { id: "project", label: "Projects" },
    { id: "article", label: "Article" },
    { id: "experience", label: "Experience" },
  ];
  return (
    <div className="bg-slate-900">
      <main className="grid grid-cols-10">
        <div className="xl:col-span-4 lg:col-span-3 h-screen sticky top-0">
          <aside className="flex flex-col justify-center items-center h-full text-neutral-50/80">
            <Link href="/" scroll={true}>
              <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold mb-10 ml-10">
                I'm <span className="text-cyan-600">TAKESHITA ASAKA</span>
              </h1>
            </Link>
            <div className="flex flex-col space-y-2 ml-0">
              {navItems.map((navItem) => {
                return (
                  <Link
                    key={navItem.id}
                    href={`#${navItem.id}`}
                    scroll={true}
                    className="group grid grid-cols-2 gap-2 items-center"
                  >
                    <div className="h-px w-24 bg-neutral-50/60 transition-all duration-300 group-hover:w-34 group-hover:bg-neutral-50/90 mr-2 col-span-1 text-neutral-50/60 group-hover:text-neutral-50/90" />
                    <p className="xl:text-2xl lg:text-xl text-neutral-50/60 group-hover:text-neutral-50/90 group-hover:font-bold col-span-1">
                      {navItem.label}
                    </p>
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-10 text-2xl mt-10">
              <Link
                href="https://qiita.com/asa129"
                target="_blank"
                className="text-neutral-50/60 hover:text-neutral-50/90"
              >
                <SiQiita />
              </Link>
              <Link
                href="https://x.com/jad1290"
                target="_blank"
                className="text-neutral-50/60 hover:text-neutral-50/90"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://github.com/asa129"
                target="_blank"
                className="text-neutral-50/60 hover:text-neutral-50/90"
              >
                <FaGithub />
              </Link>
            </div>
          </aside>
        </div>
        <div className="xl:col-span-6 lg:col-span-7 col-span-8 bg-scroll p-20 space-y-24 ">
          <About />
          <Separator className="my-4 bg-neutral-50/80" />
          <Project />
          <Separator className="my-4 bg-neutral-50/80" />
          <Article />
          <Separator className="my-4 bg-neutral-50/80" />
          <Experience />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
