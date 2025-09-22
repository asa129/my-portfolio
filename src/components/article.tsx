import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/button";

export default async function Article() {
  // 記事取得
  const res = await fetch("http://localhost:3000/api/qiita/");
  const data = await res.json();

  // ogp取得
  const ogpRes = await fetch("http://localhost:3000/api/ogp/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  const ogpData = await ogpRes.json();
  return (
    <section id="article" className="m-2">
      <h1 className="xl:text-2xl lg:text-xl text-lg  font-bold text-neutral-50/80 mb-4">
        My Article
      </h1>
      <p className="xl:text-xl text-sm text-neutral-50/80">
        日々の活動でつまづいたことや、活動を通して得た気づきなどを投稿しています。
      </p>
      <div>
        {data != null &&
          data.map((article: any) => {
            return (
              <div
                key={article.id}
                className="rounded hover:bg-accent/10 hover:text-accent-foreground"
              >
                <Link href={article.url} target="_blank">
                  <section className="grid grid-cols-2 m-4 p-2">
                    <Image
                      src={
                        ogpData.filter(
                          (ogp: { id: string; ogpImage: string }) =>
                            ogp.id === article.id
                        )[0].ogpImage
                      }
                      width={300}
                      height={300}
                      alt={article.title}
                      className="rounded-lg col-span-1"
                    />

                    <div className="col-span-1">
                      <h2 className="text-xl text-neutral-50/80 mb-2">
                        {article.title}
                      </h2>
                      <p className="text-neutral-50/60 text-sm">
                        {article.body.substring(0, 150).concat("．．．")}
                      </p>
                      <p className="text-neutral-50/60 text-sm">
                        {`likes:${article.likes_count} stocks:${article.stocks_count}`}
                      </p>
                      <p className="text-neutral-50/60 text-sm"></p>
                    </div>
                  </section>
                </Link>
              </div>
            );
          })}
        <Button
          variant="ghost"
          className="text-neutral-50/60 hover:bg-accent/10 hover:text-neutral"
        >
          {/* <Link href="/articles">⇒MORE</Link> */}
          <Link href="https://qiita.com/asa129" target="_blank">
            ⇒ MORE
          </Link>
        </Button>
      </div>
    </section>
  );
}
