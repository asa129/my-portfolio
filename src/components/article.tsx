import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/button";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import { ArticleType } from "@/types/articleType";
import { headers } from "next/headers";

export default async function Article() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");
  // 記事取得
  const res = await fetch(`${protocol}://${host}/api/qiita`);
  const data = await res.json();

  // ogp取得
  const ogpRes = await fetch(`${protocol}://${host}/api/ogp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  const ogpData = await ogpRes.json();
  return (
    <section id="article" className="m-2">
      <h1 className="lg:static sticky top-0 bg-slate-900/80 xl:text-2xl lg:text-xl text-lg font-bold text-neutral-50/80 mb-4">
        My Article
      </h1>
      <p className="xl:text-xl text-sm text-neutral-50/80">
        日々の活動でつまづいたことや、活動を通して得た気づきなどを投稿しています。
      </p>
      <div>
        {data != null &&
          data.map((article: ArticleType) => {
            return (
              <div
                key={article.id}
                className="rounded hover:bg-accent/10 hover:text-accent-foreground"
              >
                <Link href={article.url} target="_blank">
                  <section className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 p-2 my-2">
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
                      className="rounded-lg xl:col-span-1 lg:col-span-2"
                    />

                    <div className="xl:col-span-1 lg:col-span-3 mx-2">
                      <h2 className="text-xl font-bold text-neutral-50/80 lg:my-0 my-2">
                        {article.title}
                      </h2>
                      <p className="text-neutral-50/60 text-sm">
                        {article.body.substring(0, 150).concat("．．．")}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="text-neutral-50/60 flex items-center gap-2">
                          <FaRegHeart />
                          {article.likes_count}
                        </div>
                        <div className="text-neutral-50/60 flex items-center gap-2">
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
          className="text-neutral-50/60 hover:bg-accent/10 hover:text-neutral"
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
