import About from "./components/about";
import Article from "./components/article";

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
        <div className="col-span-6 bg-scroll p-8 space-y-24">
          <About />
          <Article />
          <section>
            <h1>MyActivity</h1>
          </section>
          <section>
            <h1>MyProjects</h1>
          </section>
          <section>
            <h1>MyExperience</h1>
          </section>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
