import SliceArticles from "@/components/molecules/sliceArticles";
import { headers } from "next/headers";
import React from "react";

export default async function allArticle() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");
  // 記事取得
  const res = await fetch(`${protocol}://${host}/api/qiita/allAraticles`, {
    cache: "force-cache",
  });
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }
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

  return <SliceArticles ogpData={ogpData} data={data} />;
}
