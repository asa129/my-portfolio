import fs from "fs";

async function fetchAllArticles() {
  // 記事取得
  const res = await fetch(process.env.QIITA_API_URL_ALL!, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`,
    },
  });
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  // JSONファイルに保存
  fs.writeFileSync("./src/data/all-articles.json", JSON.stringify(data));

  console.log("✅ Qiita記事データを保存しました！");
}

fetchAllArticles();
