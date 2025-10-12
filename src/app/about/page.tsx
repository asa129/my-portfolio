import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { GoMoveToTop } from "react-icons/go";
import { MdKeyboardReturn } from "react-icons/md";
import { SiQiita } from "react-icons/si";

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 bg-gradient-to-br from-background via-blue-50/30 to-white/30 dark:via-blue-50/10 dark:to-white/10">
          <Link href="/" prefetch={false} className="flex items-center gap-2">
            <MdKeyboardReturn />
            Back to Home
          </Link>
        </div>
        <header className="mb-12 border-b border-border pb-6">
          <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 lg:text-4xl text-2xl text-cyan-600 mb-3">
            竹下 朝香
          </h1>
          <h2 className="mb-4 text-xl">Takeshita Asaka</h2>
          <div className="flex gap-6 text-2xl">
            <Link
              href="https://qiita.com/asa129"
              target="_blank"
              className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90 transition-colors"
            >
              <SiQiita />
            </Link>
            <Link
              href="https://x.com/jad1290"
              target="_blank"
              className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90 transition-colors"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://github.com/asa129"
              target="_blank"
              className="text-foreground dark:text-foreground/60 hover:text-cyan-600/90 transition-colors"
            >
              <FaGithub />
            </Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            現在の仕事
          </h2>
          <p className="text-foreground leading-relaxed">
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

        <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <Image
              src="/images/my-chart.png"
              width={400}
              height={300}
              alt="my-chart"
              className="mx-auto mb-3"
            />
            <p className="text-sm text-center text-foreground/80">
              現状と1年後の目標を可視化しました
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-2xl tracking-tight text-foreground">
              <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
              感じている課題
            </h2>
            <p className="leading-relaxed">
              業務を通して生じる課題や問題に対して、
              <b>「環境や技術スタックのせい」「仕方がない」</b>
              で終わらせず、どうすれば運用しやすいシステムやサービスを作ることができるのかということです。
              <br />
              <br />
              開発の段階で運用しやすいシステムを作ることはできないのか?と考えるようになり、開発に興味を持つようになりました。
            </p>
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="mb-6 text-2xl tracking-tight text-foreground">
              <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
              取り組んでいること
            </h2>
            <p className="leading-relaxed">
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
          <div className="hidden md:block space-y-4">
            <Image
              src="/images/hackathon1.png"
              width={400}
              height={300}
              alt="my-chart"
              className="mx-auto rounded-lg mr-24"
            />
            <Image
              src="/images/hackathon2.png"
              width={400}
              height={300}
              alt="my-chart"
              className="mx-auto rounded-lg ml-24"
            />
            <p className="text-sm text-center text-foreground/80">
              3時間ハッカソンイベントに参加した時の様子
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            周りから言われること
          </h2>
          <p className="leading-relaxed">
            <b>同期からもらった評価</b>
            <br />
            <span className="inline-block w-0.5 h-8 bg-cyan-600 rounded-full mr-3 ml-3 my-2 align-middle" />
            「控えめだけど意外と頑固さもある骨太女子」「繊細だけども意外とタフ」
            <br />
            意見と批判を区別して理解することを意識しています。
            <br />
            もっと良くできると思ったことには、粘り強く取り組みます。
            <br />
            <br />
            <b>上司からいただいた評価</b>
            <br />
            「丁寧で真面目」「思ったより頑固で負けず嫌い」
            <br />
            <span className="inline-block w-0.5 h-8 bg-cyan-600 rounded-full mr-3 ml-3 my-2 align-middle" />
            「女性は受け身で前に出ない人が多いと思ってたけど、あなたはちゃんと言ってくれるから助かる」
            <br />
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
          <h3 className="mb-4 text-lg tracking-tight text-foreground font-semibold">
            実践していること
          </h3>
          <p className="mb-6 leading-relaxed">
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
          <h3 className="mb-4 text-lg tracking-tight text-foreground font-semibold">
            目指していること
          </h3>
          <p className="leading-relaxed">
            思いやりがあり、環境や制約の中でも最善の解決策を見出すチーム。
            <br />
            誰かのせいにせず、失敗を許容し、何事にも挑戦できる文化を大切にしたいです。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            今後どうしていきたいか
          </h2>
          <p className="mb-4 leading-relaxed text-lg">
            私の目標は、2つあります。
          </p>
          <h3 className="mb-2 text-lg tracking-tight text-foreground font-semibold">
            1.運用しやすいシステムを作れる人材になること
          </h3>
          <p className="mb-4 leading-relaxed">
            「作って終わり」ではなく、使い続けてもらえるものを作れる人になりたいと思っています。
            <br />
            運用が容易にできてかつ、そこからよりよいものをつくってもらえるにはどうしたらいいか、
            保守しやすいシステムとはどのように作れることができるのかを学び、「使う人」「提供したい人」「メンテナンスする人」全ての人がより良いものを作れる仕組みづくりを習得したいです。
          </p>
          <h3 className="mb-2 text-lg tracking-tight text-foreground font-semibold">
            2.体調や環境の制約がある人も活躍できるようなWebサービスや仕組みづくりを生み出すこと
          </h3>
          <p className="mb-4 leading-relaxed">
            私自身、大学を2度中退し、働くことに絶望していた時期がありました。
            <br />
            しかし、リモートワークとITに出会い、「体調や環境に制約があっても働ける」という選択肢があることを知りました。
            同じように悩んでいる人に、選択肢があることを伝えたい。絶望しないで欲しい。
            <br />
            そして、
            活躍できる環境を増やすために開発者としてサービスや仕組みを作りたいと考えています。
          </p>
          <Link
            href="https://qiita.com/asa129/items/fad180b79a9bc68e978a"
            target="_blank"
            className="inline-block text-cyan-600 underline underline-offset-2 hover:text-cyan-700 transition-colors"
          >
            お腹の症状で大学を2度中退した私が、ITとリモートワークに救われた話
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground flex items-center gap-3">
            <span className="w-1 h-8 bg-cyan-600 rounded-full" />
            好きなこと・趣味
          </h2>
          <p className="mb-6 leading-relaxed">
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
          <div className="grid grid-cols-4 gap-3">
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
          <GoMoveToTop className="text-4xl text-foreground dark:text-foreground/60 fixed bottom-4 right-4 hover:text-cyan-600 transition-colors" />
        </Link>
      </div>
    </div>
  );
}
