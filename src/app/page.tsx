import Activity from "@/components/activity";
import About from "../components/about";
import Article from "../components/article";
import { Separator } from "../components/ui/separator";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="bg-blue-950">
      <main className="grid grid-cols-10">
        <div className="col-span-4 h-screen sticky top-0">
          <aside className="flex flex-col justify-center items-center h-full text-neutral-50/80">
            <h1>I'm XXXXXXXX XXXXXXXX</h1>
            <p>ABOUT</p>
            <p>MyArticle</p>
            <p>MyActivity</p>
            <p>MyProjects</p>
            <p>MyExperience</p>
          </aside>
        </div>
        <div className="col-span-6 bg-scroll p-20 space-y-24 ">
          <About />
          <Separator />
          <Article />
          <Separator />
          <Project />
          <Separator />
          <Activity />
          <section>
            <h1>MyExperience</h1>
          </section>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
