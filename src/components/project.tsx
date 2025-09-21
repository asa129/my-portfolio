import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Project() {
  return (
    <section id="project">
      <h1 className="text-2xl font-bold text-neutral-50/80 mb-4">My Project</h1>
      <div className="text-neutral-50/60">
        <p className="text-md ">
          0⇒1で開発することに挑戦、アイデアだしからMVP作成、その後継続的に改善していくことを目指しています。
        </p>
        <Link href="https://addiless-alcohol-app.web.app/" target="_blank">
          <div className="grid grid-cols-2  m-4 p-2 rounded hover:bg-accent/10 hover:text-neutral">
            <Image
              src="/images/addiless-alcohol-app.png"
              width={300}
              height={300}
              alt=""
              className="rounded-lg col-span-1"
            />
            <div className="col-span-1">
              <h2 className="text-xl font-bold text-neutral-50/80 mb-2">
                お酒添加物チェッカー
              </h2>
              <p className="text-sm">
                2025-05~2025-06
                <br />
                <br />
                お酒に添加物が入っているか簡単にわかるアプリが欲しいと思い作成しました。
                <br />
                ニッチな領域で痒い所に手が届くならぬ痒い所に価値を提供できるものを目指しました。
              </p>
              {/* ここに使用した技術をアイコンで追加する */}
            </div>
          </div>
        </Link>
        <Button
          variant="ghost"
          className="text-neutral-50/60 hover:bg-accent/10 hover:text-neutral"
        >
          <Link href="https://qiita.com/asa129/items/056a601746b49029c768">
            ⇒ 開発経緯や思い
          </Link>
        </Button>

        <div className="grid grid-cols-2  m-4 p-2 rounded hover:bg-accent/10 hover:text-neutral">
          <Image
            src="/addiless-alcohol-app.png"
            width={100}
            height={100}
            alt=""
            className="rounded-lg col-span-1"
          />
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-neutral-50/80 mb-2">
              アウトップサポートサービス（開発中）
            </h3>
            <p className="text-neutral-50/60 text-sm">開発経緯や思い</p>
            {/* ここに使用した技術をアイコンで追加する */}
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-neutral-50/60 hover:bg-accent/10 hover:text-neutral"
        >
          <Link href="">⇒ プロトタイプ</Link>
        </Button>
      </div>
    </section>
  );
}
