import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET");
  const res = await fetch(process.env.QIITA_API_URL_ALL!, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`,
    },
  });

  if (res.status != 200) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: res.status }
    );
  }
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}
