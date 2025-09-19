import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function allArticle() {
  console.log("allArticle");
  // 記事取得
  const res = await fetch("http://localhost:3000/api/qiita/allAraticles", {
    cache: "force-cache",
  });
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }
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
    <div>
      {data.map((article: any) => {
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <Link href={article.url} target="_blank">
              <Image
                src={
                  ogpData.filter(
                    (ogp: { id: string; ogpImage: string }) =>
                      ogp.id === article.id
                  )[0].ogpImage
                }
                width={100}
                height={100}
                alt={article.title}
              />
            </Link>
            <p>likes_count:{article.likes_count}</p>
            <p>stocks_count:{article.stocks_count}</p>
            <p>{article.body.substring(0, 100).concat("．．．")}</p>
          </div>
        );
      })}
    </div>
  );
}
