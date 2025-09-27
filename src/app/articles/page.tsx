import SliceArticles from "@/components/molecules/sliceArticles";
import React from "react";

export default async function allArticle() {
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

  return <SliceArticles ogpData={ogpData} data={data} />;
}
