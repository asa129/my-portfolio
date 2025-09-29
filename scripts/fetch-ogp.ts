import { ArticleType } from "@/types/articleType";
import { load } from "cheerio";
import fs from "fs";

async function fetchOgp() {
  const res = await fetch(process.env.QIITA_API_URL_ALL!, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`,
    },
  });
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const ogpImageList = await Promise.all(
    data.map(async (qiita_data: ArticleType) => {
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

  // JSONファイルに保存
  fs.writeFileSync(
    "./src/data/ogp-data.json",
    JSON.stringify(ogpImageList, null, 2)
  );

  console.log("✅ OGPデータを保存しました！");
}

fetchOgp();
