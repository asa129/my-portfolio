import About from "../components/about";
import Article from "../components/article";
import { Separator } from "../components/ui/separator";
import Project from "@/components/project";
import Experience from "@/components/experience";
import { SiQiita } from "react-icons/si";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { GoMoveToTop } from "react-icons/go";
import NavItems from "@/components/molecules/navItems";
import { ModeToggle } from "@/components/molecules/toggle";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-background via-blue-50/30 to-white/30 dark:via-blue-50/10 dark:to-white/10">
      {/* bg-gradient-to-br from-blue-50 via-white to-indigo-50 */}
      {/* <header className=":hidden flex items-center fixed top-0 w-screen p-4 bg-slate-900">
        <Button variant="ghost">
          <CiMenuBurger className="text-neutral-50/80 font-bold mr-2" />
        </Button>
        <Link href="/" scroll={true}>
          <h1 className="text-2xl font-bold text-neutral-50/80">
            I'm <span className="text-cyan-600">TAKESHITA ASAKA</span>
          </h1>
        </Link>
      </header> */}
      <main className="lg:grid lg:grid-cols-10">
        <div className="lg:col-span-4 lg:h-screen lg:sticky lg:top-0 mb-10 mx-10">
          <div className="fixed bottom-4 left-4">
            <ModeToggle />
          </div>
          <aside className="flex flex-col lg:justify-center lg:items-center lg:h-full md:justify-start md:items-start text-foreground opacity-80">
            <Link href="/" scroll={true}>
              <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold my-10 lg:ml-10 ml-0">
                I&lsquo;m <span className="text-cyan-600">TAKESHITA ASAKA</span>
              </h1>
            </Link>
            <NavItems />

            <div className="flex gap-10 text-2xl mt-10">
              <Link
                href="https://qiita.com/asa129"
                target="_blank"
                className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90"
              >
                <SiQiita />
              </Link>
              <Link
                href="https://x.com/jad1290"
                target="_blank"
                className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://github.com/asa129"
                target="_blank"
                className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90"
              >
                <FaGithub />
              </Link>
            </div>
          </aside>
        </div>
        <div className="lg:col-span-6 col-span-8 lg:bg-scroll lg:p-20 p-10 space-y-12 ">
          <About />
          <Separator className="my-4 bg-sidebar-foreground/80" />
          <Project />
          <Separator className="my-4 bg-sidebar-foreground/80" />
          <Article />
          <Separator className="my-4 bg-sidebar-foreground/80" />
          <Experience />
        </div>
        <Link href="/" scroll={true}>
          <GoMoveToTop className="lg:hidden text-4xl text-foreground dark:text-foreground/60 hover:text-neutral-50/90 fixed bottom-4 right-4" />
        </Link>
      </main>
      <footer></footer>
    </div>
  );
}
