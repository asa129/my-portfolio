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
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="flex-1">
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
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/my-profile2.jpg"
                width={400}
                height={400}
                alt="profile"
                className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover shadow-lg"
              />
            </div>
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

          <div className="pl-6 md:pl-8 space-y-8">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-1 h-6 bg-cyan-600/70 rounded-full" />
                同期からもらった評価
              </h3>
              <div className="pl-6 space-y-3 text-base text-foreground/90 leading-relaxed">
                <p className="italic text-foreground/80">
                  「控えめだけど意外と頑固さもある骨太女子」「繊細だけども意外とタフ」
                </p>
                <p>
                  意見と批判を区別して理解することを意識しています。もっと良くできると思ったことには、粘り強く取り組みます。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-1 h-6 bg-cyan-600/70 rounded-full" />
                上司からいただいた評価
              </h3>
              <div className="pl-6 space-y-3 text-base  text-foreground/90 leading-relaxed">
                <p className="italic text-foreground/80">
                  「丁寧で真面目」「思ったより頑固で負けず嫌い」
                </p>
                <p className="italic text-foreground/80 font-semibold">
                  「女性は受け身で前に出ない人が多いと思ってたけど、あなたはちゃんと言ってくれるから助かる」
                </p>
                <p>
                  と言っていただいたことがあります。疑問に思ったことや改善提案は、遠慮せずに発言するようにしています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            組織の中で大切にしていること、実践していること
          </h2>
          <div className="pl-6 md:pl-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-cyan-600/70 rounded-full" />
                実践していること
              </h3>
              <div className="pl-6 space-y-4 text-base text-foreground/90 leading-relaxed">
                <p>
                  <b>「次に担当する人が困らない」</b>
                  を意識して業務に携わっています。
                </p>
                <p>
                  誰もわからない状態だったシステムに携わったことがありました。リーダーやチームメンバーに相談し、不明点を解消、誰が担当しても再現できるように必ずドキュメントを残すようにしました。
                  <br />
                  機能追加や改修の実装では、どの人が担当しても困らないように共通化したり、容易にわかるように実装することを心がけています。
                </p>
                <p>
                  チーム内の後輩には、自分が経験させてもらったように、まずは行動してもらうことを意識しています。
                  <br />
                  一年目の時に、まずは挑戦させるリーダーの元、レビューやフィードバック、失敗を通して多くのことを学びました。
                  <br />
                  その経験から、安心して相談でき、否定から始まらない環境を作りたいと考えています。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-3">
                <span className="w-1 h-6 bg-cyan-600/70 rounded-full" />
                目指していること
              </h3>
              <div className="pl-6 space-y-3 text-base text-foreground/90 leading-relaxed">
                <p>
                  思いやりがあり、環境や制約の中でも最善の解決策を見出すチーム。
                  <br />
                  誰かのせいにせず、失敗を許容し、何事にも挑戦できる文化を大切にしたいです。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground">
            <span className="inline-block w-1 h-8 bg-cyan-600 rounded-full mr-3 align-middle" />
            今後どうしていきたいか
          </h2>
          <div className="pl-6 md:pl-8 space-y-8">
            <p className="text-base font-medium text-foreground/90 leading-relaxed">
              私の目標は、2つあります。
            </p>

            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-1 h-6 bg-cyan-600/70 rounded-full" />
                1. 運用しやすいシステムを作れる人材になること
              </h3>
              <div className="pl-6 space-y-3 text-base text-foreground/90 leading-relaxed">
                <p>
                  「作って終わり」ではなく、使い続けてもらえるものを作れる人になりたいと思っています。
                </p>
                <p>
                  運用が容易にできてかつ、そこからよりよいものをつくってもらえるにはどうしたらいいか、保守しやすいシステムとはどのように作れることができるのかを学び、「使う人」「提供したい人」「メンテナンスする人」全ての人がより良いものを作れる仕組みづくりを習得したいです。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-1 h-6 bg-cyan-600/70 rounded-full" />
                2.
                体調や環境の制約がある人も活躍できるようなWebサービスや仕組みづくりを生み出すこと
              </h3>
              <div className="pl-6 space-y-3 text-base text-foreground/90 leading-relaxed">
                <p>
                  私自身、大学を2度中退し、働くことに絶望していた時期がありました。
                </p>
                <p>
                  しかし、リモートワークとITに出会い、「体調や環境に制約があっても働ける」という選択肢があることを知りました。同じように悩んでいる人に、選択肢があることを伝えたい。絶望しないで欲しい。
                  <br />
                  そして、活躍できる環境を増やすために開発者としてサービスや仕組みを作りたいと考えています。
                </p>
              </div>
            </div>

            <div className="mt-6 pl-6">
              <Link
                href="https://qiita.com/asa129/items/fad180b79a9bc68e978a"
                target="_blank"
                className="inline-block text-cyan-600 underline underline-offset-2 hover:text-cyan-700 transition-colors"
              >
                お腹の症状で大学を2度中退した私が、ITとリモートワークに救われた話
              </Link>
            </div>
          </div>
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

        <section className="mb-12">
          <h2 className="mb-6 text-2xl tracking-tight text-foreground flex items-center gap-3">
            <span className="w-1 h-8 bg-cyan-600 rounded-full" />
            自己紹介動画
          </h2>
          <video src="/movies/selfmovie.mp4" controls />
        </section>

        <Link href="/about" scroll={true}>
          <GoMoveToTop className="text-4xl text-foreground dark:text-foreground/60 fixed bottom-4 right-4 hover:text-cyan-600 transition-colors" />
        </Link>
      </div>
    </div>
  );
}
