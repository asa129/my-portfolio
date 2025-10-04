import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function About() {
  return (
    <section id="about" className="font-sans">
      <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 xl:text-2xl lg:text-xl text-lg font-bold text-cyan-600 mb-4">
        ABOUT
      </h1>

      <div className="flex items-between justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 text-4xl text-foreground/80 mb-4">
            竹下 朝香
          </h2>
          <p className="text-xl text-foreground/60 ">Takeshita Asaka</p>
          <p className="text-md text-foreground/60 ">福岡県出身</p>
        </div>
        <Image
          src="/images/my-profile.jpg"
          width={100}
          height={100}
          alt="sake"
          className="rounded-full mx-16 w-32 h-32 flex-shrink-0 overflow-hidden  "
        />
      </div>
      <article>
        <p className="lg:text-sm text-xs text-foreground dark:text-foreground/60">
          現在、金融業界のシステム運用保守に携わっています。
          <br />
          <br />
          業務を通して感じたことは
          <b>「環境や技術スタックのせい」「仕方ない」</b>
          で終わらせず、開発の時点で運用しやすいシステムを作れないの？という思いでした。
          <br />
          <br />
          開発とはどのようにするのか、0→1で生み出すにはどうすればいいのかわからなかったため、
          コミュニティに入会し、個人開発やアウトプット活動を日々行っています。
        </p>
      </article>

      {/* <div className="flex items-center gap-3 my-4">
        <Image
          src="/images/sake.png"
          width={100}
          height={100}
          alt="sake"
          className="rounded-lg xl:col-span-1 lg:col-span-2"
        />
        <Image
          src="/images/cat.png"
          width={200}
          height={200}
          alt="cat"
          className="rounded-lg xl:col-span-1 lg:col-span-2"
        />
        <Image
          src="/images/keybord.png"
          width={100}
          height={100}
          alt="dog"
          className="rounded-lg xl:col-span-1 lg:col-span-2"
        />
        <Image
          src="/images/sauna.jpg"
          width={100}
          height={100}
          alt="sauna"
          className="rounded-lg xl:col-span-1 lg:col-span-2"
        />
      </div> */}
      <br />
      <Button
        variant="ghost"
        className="text-foreground/60 hover:bg-cyan-200/20 hover:dark:bg-cyan-50/5 hover:text-neutral"
      >
        <Link href="/about">
          {/* <Link href="https://qiita.com/asa129" target="_blank"> */}
          ⇒MORE
        </Link>
      </Button>
    </section>
  );
}
