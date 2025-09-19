import { NextResponse } from "next/server";

export async function GET() {
  const idParas: string[] = [
    "a79231425296e507c8bf",
    "ccb7510cb84d98e8b1f5",
    "6f1e71db852fd90ab912",
  ];
  const url: string = process.env.QIITA_API_URL!;
  const token: string = process.env.QIITA_API_TOKEN!;
  const articles: any[] = [];
  for (const id of idParas) {
    const res = await fetch(url + id, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status !== 200) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: res.status }
      );
    }
    const data = await res.json();
    articles.push(data);
  }
  return NextResponse.json(articles, { status: 200 });
}
