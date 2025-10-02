import { ArticleType } from "@/types/articleType";
import { load } from "cheerio";
import fs from "fs";

async function fetchPickUpArticles() {
  const idParas: string[] = [
    "a79231425296e507c8bf",
    "ccb7510cb84d98e8b1f5",
    "6f1e71db852fd90ab912",
  ];
  // idパラメータを元に記事を取得
  const url: string = process.env.QIITA_API_URL!;
  const token: string = process.env.QIITA_API_TOKEN!;
  const articles: ArticleType[] = [];
  for (const id of idParas) {
    const res = await fetch(url + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    articles.push(data);
  }
  // ogp画像を取得
  const ogpImageList = await Promise.all(
    articles.map(async (qiita_data: ArticleType) => {
      const url = qiita_data.url;
      const res = await fetch(url, {
        headers: {
          "X-Linkpreview-Api-Key": process.env.LINKPREVIEW_API_KEY!,
        },
      });

      if (res.status != 200) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.text();
      const $ = load(data);
      const ogpImage = $("meta[property='og:image']").attr("content");

      return { id: qiita_data.id, ogpImage: ogpImage };
    })
  );
  const processedData = articles.map((article: ArticleType) => {
    return {
      id: article.id,
      title: article.title,
      body: article.body.substring(0, 150).concat("．．．"),
      likes_count: article.likes_count,
      stocks_count: article.stocks_count,
      url: article.url,
      ogpImage: ogpImageList.filter((ogp) => ogp.id === article.id)[0].ogpImage,
    };
  });

  // JSONファイルに保存
  fs.writeFileSync(
    "./src/data/pick-up-articles.json",
    JSON.stringify(processedData)
  );

  console.log("✅ PickUp記事データを保存しました！");
}

fetchPickUpArticles();
