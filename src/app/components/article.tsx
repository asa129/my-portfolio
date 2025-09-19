import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div>
      {data != null &&
        data.map((article: any) => {
          console.log(article);
          return (
            <section key={article.id} className="bg-teal-100">
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
              <p>stocks_count:{article.stocks_count}</p>
              <p>{article.body.substring(0, 100).concat("．．．")}</p>
            </section>
          );
        })}
    </div>
  );
}
