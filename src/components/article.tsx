import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/button";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import { ArticleType } from "@/types/articleType";
import pickUpArticles from "@/data/pick-up-articles.json";

export default function Article() {
  const articles = pickUpArticles as unknown as ArticleType[];
  return (
    <section id="article" className="m-2">
      <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 xl:text-2xl lg:text-xl text-lg font-bold text-foreground/80 mb-4">
        My Article
      </h1>
      <p className="xl:text-xl text-sm text-foreground/80">
        日々の活動でつまづいたことや、活動を通して得た気づきなどを投稿しています。
      </p>
      <div>
        {articles != null &&
          articles.map((article: ArticleType) => {
            return (
              <div
                key={article.id}
                className="rounded hover:bg-cyan-200/20 hover:dark:bg-cyan-50/5 hover:text-accent-foreground"
              >
                <Link href={article.url} target="_blank">
                  <section className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 p-2 my-2">
                    <Image
                      src={article.ogpImage}
                      width={300}
                      height={300}
                      alt={article.title}
                      className="rounded-lg xl:col-span-1 lg:col-span-2"
                    />

                    <div className="xl:col-span-1 lg:col-span-3 mx-2">
                      <h2 className="text-xl font-bold text-foreground/80 lg:my-0 my-2">
                        {article.title}
                      </h2>
                      <p className="text-foreground dark:text-foreground/60 text-sm">
                        {article.body}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="text-foreground dark:text-foreground/60 flex items-center gap-2">
                          <FaRegHeart />
                          {article.likes_count}
                        </div>
                        <div className="text-foreground dark:text-foreground/60 flex items-center gap-2">
                          <MdOutlineSaveAlt />
                          {article.stocks_count}
                        </div>
                      </div>
                    </div>
                  </section>
                </Link>
              </div>
            );
          })}
        <Button
          variant="ghost"
          className="text-foreground/60 hover:bg-cyan-200/20 hover:dark:bg-cyan-50/5 hover:text-neutral"
        >
          <Link href="/articles" target="_blank">
            {/* <Link href="https://qiita.com/asa129" target="_blank"> */}
            ⇒MORE
          </Link>
          <RxOpenInNewWindow />
        </Button>
      </div>
    </section>
  );
}
