import Link from "next/link";
import React from "react";
import { GoMoveToTop } from "react-icons/go";
import { MdKeyboardReturn } from "react-icons/md";

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="bg-gradient-to-br from-background to-white/30 dark:to-white/10 p-2 rounded-lg">
          <Link href="/" prefetch={false} className="flex items-center gap-2">
            <MdKeyboardReturn />
            Back to Home
          </Link>
        </div>
        <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 lg:text-4xl text-lg text-cyan-600 mb-4">
          ABOUT
        </h1>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            現在の仕事
          </h2>
          <p>
            システムエンジニアとして金融業界のシステム運用保守の業務に従事しています。
            <br />
            <br />
            要件理解・工数見積り、改修個所の調査～修正、リリースまでの一連の流れに携わりました。
            <br />
            エラーやバグなどの問題個所の特定⇒解決までのプロセスを考える⇒課題解消ができたときや、
            <br />
            お客さまの要望を満たし、無事にリリースできたときに喜びを感じています。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            感じている課題
          </h2>
          <p>
            生じる課題や問題に対して、
            <b>「環境や技術スタックのせい」「仕方がない」</b>
            で終わらせず、どうすれば運用しやすいシステムやサービスを作ることができるのかということです。
            <br />
            開発の過程で運用しやすいシステムを作ることはできないのかという思いが生まれました。
            <br />
            運用中もお客様ユーザーのニーズに合わせてシステムを改善するにあたり、複雑なアーキテクトや逆に障害につながるのではと思うロジックに出会った際に、
            もっとよりよくするにはどうしたらいいのだろう、自分の技術力を上げれば解決するのか、もっと知見が欲しい、反映した後のユーザーのフィードバックをちょく
            より直接的にもらいたいという思いも強くなりました。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            取り組んでいること
          </h2>
          <p>
            開発とはどのようにするのか、0→1で生み出すにはどうすればいいのかわからなかったため、
            <br />
            コミュニティに入会し、個人開発やアウトプット活動を日々行っています。
            <br />
            <br />
            コミュニティ活動を通じて、<b>React</b>や<b>Next.js</b>
            の習得、<b>公式ドキュメントを読むこと</b>の習得、
            <b>GithubActionsやCloudflareでのCI/CDパイプライン の構築</b>
            の習得を行いました。
            <br />
            日々の個人開発やアウトプット活動を通じて、0から価値を生み出す力や、新しい技術のキャッチアップと使いこなす力を磨いています。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            目標
          </h2>
          <p>
            私の目標は、２つあります。
            <br />
            <b>1.運用しやすいシステムを作れる人材になること</b>
            <br />
            <b>
              2.体調や環境の制約がある人も活躍できるようなWebサービスや仕組みづくりを生み出すこと
            </b>
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            大切にしていること
          </h2>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            周りから何と言われているか
          </h2>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            好きなこと・趣味
          </h2>
          <p>
            毎朝ウォーキング移動はクロスバイク🚲、サウナ🍃でリフレッシュしています。
            <br />
            好きなことは猫🐱を眺めることです。
            <br />
            好きな飲み物は日本酒です。
            ひと頑張りしたときに晩酌でお刺身と一緒に飲むことが好きです。
            最近、自作キーボード作りの沼に足を踏み入れました。⌨
          </p>
        </section>
        <Link href="/about" scroll={true}>
          <GoMoveToTop className="text-4xl text-foreground dark:text-foreground/60 fixed bottom-4 right-4" />
        </Link>
      </div>
    </div>
  );
}
