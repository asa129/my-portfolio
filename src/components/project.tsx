import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="">
      <section>
        <h1 className="text-2xl font-bold text-neutral-50/80 mb-4">
          My Activity
        </h1>
        <h2>個人開発</h2>
        <div>
          <h3>お酒添加物チェッカー</h3>
          <Link href="https://addiless-alcohol-app.web.app/">
            <Image
              src="/images/addiless-alcohol-app.png"
              width={100}
              height={100}
              alt=""
            />
          </Link>
          <p>
            お酒に添加物が入っているか簡単にわかるアプリが欲しいと思い作成しました。
          </p>
          <p>
            <Link href="https://qiita.com/asa129/items/056a601746b49029c768">
              開発経緯や思い
            </Link>
          </p>
          {/* ここに使用した技術をアイコンで追加する */}
        </div>
        <div>
          <h3>アウトップサポートサービス（開発中）</h3>
          <Image
            src="/addiless-alcohol-app.png"
            width={100}
            height={100}
            alt=""
          />
          <Link href="">プロトタイプ</Link>
          <p></p>
          <p>開発経緯や思い</p>
          {/* ここに使用した技術をアイコンで追加する */}
        </div>
      </section>
    </div>
  );
}
