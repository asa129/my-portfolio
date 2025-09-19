import Image from "next/image";
import About from "./components/about";
import Article from "./components/article";

export default function Home() {
  return (
    <div>
      <main className="flex">
        <aside className="flex flex-col justify-center items-center w-1/2 bg-sky-500 h-screen">
          <h1>I'm XXXXXXXX XXXXXXXX</h1>
          <p>ABOUT</p>
          <p>MyArticle</p>
          <p>MyActivity</p>
          <p>MyProjects</p>
          <p>MyExperience</p>
        </aside>
        <div className="w-1/2 bg-blue-500">
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
