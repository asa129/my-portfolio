import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { GoMoveToTop } from "react-icons/go";
import { MdKeyboardReturn } from "react-icons/md";
import { SiQiita } from "react-icons/si";

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="bg-gradient-to-br from-background via-blue-50/30 to-white/30 dark:via-blue-50/10 dark:to-white/10">
          <Link href="/" prefetch={false} className="flex items-center gap-2">
            <MdKeyboardReturn />
            Back to Home
          </Link>
        </div>
        <header className="mb-16 border-b border-border">
          <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 lg:text-4xl text-lg text-cyan-600 my-2">
            竹下 朝香
          </h1>
          <h2 className="mb-2 text-lg">Takeshita Asaka</h2>
          <div className="flex gap-10 text-2xl mb-4">
            <p className="flex justify-center gap-2 text-foreground dark:text-foreground/60 mb-2">
              <Link
                href="https://qiita.com/asa129"
                target="_blank"
                className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90"
              >
                <SiQiita />
              </Link>
            </p>
            <p className="flex items-center gap-2 text-lg text-foreground dark:text-foreground/60 mb-2">
              <Link
                href="https://x.com/jad1290"
                target="_blank"
                className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90"
              >
                <FaXTwitter />
              </Link>
            </p>
            <p className="flex items-center gap-2 text-lg text-foreground dark:text-foreground/60 mb-2">
              <Link
                href="https://github.com/asa129"
                target="_blank"
                className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90"
              >
                <FaGithub />
              </Link>
            </p>
          </div>
        </header>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            現在の仕事
          </h2>
          <p className="text-foreground">
            システムエンジニアとして金融業界システムの運用保守業務に従事しています。
            <br />
            <br />
            要件理解・工数見積り、改修個所の調査～修正、リリースまでの一連の流れに携わりました。
            <br />
            エラーやバグなどの問題個所の特定⇒解決までのプロセスを考える⇒課題解消ができたときや、
            <br />
            お客さまの要望を満たし、無事にリリースできたときに喜びを感じています。
          </p>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <Image
              src="/images/my-chart.png"
              width={400}
              height={300}
              alt="my-chart"
              className="mx-auto"
            />
            <p>現在のスキルと1年後の目標を可視化しました</p>
          </div>
          <div>
            <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
              <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
              感じている課題
            </h2>
            <p>
              業務を通して生じる課題や問題に対して、
              <b>「環境や技術スタックのせい」「仕方がない」</b>
              で終わらせず、どうすれば運用しやすいシステムやサービスを作ることができるのかということです。
              <br />
              <br />
              開発の段階で運用しやすいシステムを作ることはできないのか？と考えるようになり、開発に興味を持つようになりました。
              <br />
              {/* <br />
            複雑なアーキテクトや、ロジックに出会ったときに、これは障害につながるのでは？と思うことも多くありました。
            <br />
            誰が見ても理解のしやすいロジックや仕組みをつくり、そのうえでユーザーのニーズに合わせてよりよいものを作れるようになりたい。
            <br />
            その反面、自分の知識や経験がないから解決できない、悔しい気持ちがありました。 */}
              {/* 運用中もお客様ユーザーのニーズに合わせてシステムを改善するにあたり、複雑なアーキテクトや逆に障害につながるのではと思うロジックに出会った際に
            もっとよりよくするにはどうしたらいいのだろう、自分の技術力を上げれば解決するのか、もっと知見が欲しい、反映した後のユーザーのフィードバックをちょく
            より直接的にもらいたいという思いも強くなりました。 */}
            </p>
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
              <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
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
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/hackathon1.png"
              width={400}
              height={300}
              alt="my-chart"
              className="mx-auto ml-24 mb-4 rounded-lg"
            />
            <Image
              src="/images/hackathon2.png"
              width={400}
              height={300}
              alt="my-chart"
              className="mx-auto mr-24 rounded-lg"
            />
            <p>3時間ハッカソンイベントに参加した時の様子</p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-2 text-2xl tracking-tight text-foreground">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            周りから言われること
          </h2>
          <p>
            「丁寧で真面目」「優しい」と言われます。その一方で、「意外と頑固で負けず嫌い」とも言われます。
            <br />
            もっと良くできると思ったことには、粘り強く取り組む性格だからかもしれません。
            <br />
            <br />
            「女性は受け身で前に出ない人が多いと思ってたけど、あなたはちゃんと言ってくれるから助かる」
            と言っていただいたことがあります。
            <br />
            疑問に思ったことや改善提案は、遠慮せずに発言するようにしています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            組織の中で大切にしていること、実践していること
          </h2>
          <h3 className="mb-2 text-xl tracking-tight text-foreground">
            実践していること
          </h3>
          <p className="mb-2 space-y-2">
            <b>「次に担当する人が困らない」</b>
            を意識して業務に携わっています。
            <br />
            誰もわからない状態だったシステムの仕様や調べないとわからなかったことに対して、リーダーやチームメンバーに相談しつつ、
            不明点を解消し、誰が担当しても再現できるように必ずドキュメントを残すようにしました。
            <br />
            機能追加や改修の実装では、どの人が担当しても困らないように共通化したり、容易にわかるように実装することを心がけています。
            <br />
            チーム内の後輩には、自分がしてもらったようにまずは行動してもらうことを意識しています。
            <br />
            一年目のときに、まずは挑戦させるリーダーの元、レビューやフィードバック、失敗を通して多くのことを学びました。
            <br />
            その経験から、安心して相談でき、否定から始まらない環境を作りたいと考えています。
          </p>
          <h3 className="my-2 text-xl  tracking-tight text-foreground">
            目指していること
          </h3>
          <p>
            思いやりがあり、環境や制約の中でも最善の解決策を見出すチーム。
            <br />
            誰かのせいにせず、失敗を許容し、何事にも挑戦できる文化を大切にしたいです。
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            今後どうしていきたいか
          </h2>
          <p>
            私の目標は、２つあります。
            <br />
            <b>1.運用しやすいシステムを作れる人材になること</b>
            <br />
            作って終わり、ではなく使い続けてもらえるものを作れる人になりたいと思っています。
            運用が容易にできてかつ、そこからよりよいものをつくってもらえるにはどうしたらいいか、
            保守しやすいシステムとはどのように作れることができるのか、を学び、使う人、提供したい人、メンテナンスする人全ての人が容易により良いものを作れる仕組みづくりを習得したいです。
            <br />
            <b>
              2.体調や環境の制約がある人も活躍できるようなWebサービスや仕組みづくりを生み出すこと
            </b>
            <br />
            私自身、大学を2度中退し、働くことに絶望していた時期がありました。
            しかし、リモートワークとITに出会い、「体調や環境に制約があっても働ける」という選択肢があることを知りました。
            同じように悩んでいる人に、選択肢があることを伝えたい絶望しないでほしい。
            そして、同じように悩む人たちが活躍できる環境を増やすために、開発者としてサービスや仕組みを作りたいと考えています。
          </p>
          <p className="underline underline-offset2 text-cyan-600 ">
            <Link
              href="https://qiita.com/asa129/items/fad180b79a9bc68e978a"
              target="_blank"
            >
              お腹の症状で大学を2度中退した私が、ITとリモートワークに救われた話
            </Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground flex items-center gap-3">
            <span className="w-1 h-8 bg-cyan-600 rounded-full" />
            好きなこと・趣味
          </h2>
          <p className="mb-6">
            🚶毎朝のウォーキング
            <br />
            🚲クロスバイク爆走すること
            <br />
            🍃サウナでリフレッシュすること
            <br />
            🐱猫を眺めること
            <br />
            🍶ひと頑張りした時は、お刺身と日本酒で晩酌を楽しみます。
            <br />
            ⌨️最近、自作キーボード作りの沼に足を踏み入れました。
          </p>
          <div className="grid grid-cols-4 gap-2">
            <Image
              src="/images/my-profile3.jpg"
              width={400}
              height={300}
              alt="profile"
              className="rounded-lg col-span-2"
            />
            <Image
              src="/images/sake2.png"
              width={300}
              height={300}
              alt="sake2"
              className="rounded-lg"
            />
            <Image
              src="/images/keybord2.png"
              width={300}
              height={300}
              alt="keybord"
              className="rounded-lg"
            />
          </div>
        </section>
        <Link href="/about" scroll={true}>
          <GoMoveToTop className="text-4xl text-foreground dark:text-foreground/60 fixed bottom-4 right-4" />
        </Link>
      </div>
    </div>
  );
}
