import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardReturn } from "react-icons/md";
import TechStack from "@/components/molecules/techStack";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";
import { GoMoveToTop } from "react-icons/go";

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12  text-muted-foreground">
        <div className="bg-gradient-to-br from-background to-white/30 dark:to-white/10 p-2 rounded-lg">
          <Link href="/" prefetch={false} className="flex items-center gap-2">
            <MdKeyboardReturn />
            Back to Home
          </Link>
        </div>
        <section className="mb-12">
          <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 lg:text-4xl text-lg text-cyan-600 mb-4">
            お酒添加物チェッカー
          </h1>
          <h2 className="mb-4">2025-05 ~ 2025-06</h2>
          <p className="flex items-center gap-2 lg:text-sm text-xs text-foreground dark:text-foreground/60 mb-2">
            <CiLink />
            <Link href="https://addiless-alcohol-app.web.app/" target="_blank">
              addiless-alcohol-app.web.app/
            </Link>
          </p>
          <p className="flex items-center gap-2 lg:text-sm text-xs text-foreground dark:text-foreground/60 mb-2">
            <FaGithub />
            <Link
              href="https://github.com/asa129/addiless-alcohol-app"
              target="_blank"
            >
              GitHub
            </Link>
          </p>

          <Image
            src="/images/addiless-alcohol-app.png"
            width={600}
            height={600}
            alt=""
            className="w-full h-auto object-cover rounded-lg mt-4"
          />
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            概要
          </h2>
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="mb-2 text-sm font-medium text-foreground">
                なぜ作ったのか/解決する課題
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground ml-2">
                このアプリケーションで解決したかったことは下記です。
                <br />
                <b>「簡単に添加物有無がわかる」</b>
                <br />
                <b>「添加物がない・少ないお酒を簡単に調べられる」</b>
                <br />
                <b>「自分の希望にあう新しいお酒に出会える」</b>
                <br />
                <br />
                <b>商品を手に取らないと添加物がわからない</b>
                <br />
                私は、お酒が大好きです。
                <br />
                その一方で、食品や飲み物を買うときに添加物が入りすぎていないか気になってしまいます。
                <br />
                スーパーで缶チューハイを手にとっては成分表を眺めていました。
                <br />
                <br />
                <b>添加物が入っていないものを調べるのに手間がかかる</b>
                <br />
                趣味で加入しているトレーニングサロンの集まりで、意外と添加物を気にしている人は多い印象がありました。食品を手に取った際は成分表を見てしまう、ないものを探すのが大変との意見もありました。公式サイトなどで調べることもできますが、調べるにも検索→商品情報や成分表のページを探す→入っているか確認する手間がかかります。
                <br />
                健康に気を使っている人や、特定の原材料を避けたい人も一定数いることはわかっていましたが、現状簡単に調べられるものが少ないと感じていました。
                <br />
                <br />
                <b>毎回同じものを選んでしまう</b>
                <br />
                シンプルなもので作られているドリンク（ウォッカと果汁のみなど）を買いたいなと思いつつもあまりなく、見つけることが難しいです。そのため同じドリンクを選びがちでした。
                <br />
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-foreground">
                ターゲットユーザー
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground ml-2">
                アレルギーを持つ方や、健康志向の人
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            技術スタック
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <TechStack id="react" />
            <TechStack id="typescript" />
            <TechStack id="tailwindcss" />
            <TechStack id="vite" />
            <TechStack id="supabase" />
            <TechStack id="firebase" />
            <TechStack id="githubactions" />
            <TechStack id="jest" />
            <TechStack id="reacttestinglibrary" />
            <TechStack id="claude" />
            <TechStack id="puppeteer" />
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            こだわったポイント
          </h2>
          <div className="space-y-4 mt-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 text-base font-medium text-foreground">
                添加物チェック
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                添加物があるかないかを一目でわかるように、各カードに添加物有無のアイコンをつけました。
                カード内では気になるものが入っていないかわかるようにしました。
                <br />
                また、モーダル内には添加物情報を設け、アルコール度数、糖質量、カロリー、おすすめレシピやペアリングなど付加価値をつけるようにしました。
              </p>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 text-base font-medium text-foreground">
                検索機能
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                気軽に検索できるように、メインの検索項目はお酒の商品名、添加物有無のみにしました。
                <br />
                詳細フィルターでは
                特定の添加物や添加物名称、主要な飲料メーカーで絞りこみができるようにしました。
              </p>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 text-base font-medium text-foreground">
                データ登録の自動化
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                開発当初は、10データほど手動で投入して行っていましたが、データ数を増やすにあたり、同じように投入するのは現実的でない、面倒だと思いました。
                <br />
                今後、定期的に新しい情報や商品情報を収集、登録できればと思い、バッチコマンド実行で、メーカーサイトから情報を収集、登録できるようにしました。
                <br />
                Puppeteerでスクレイピング、取得した情報を元に、ClaudeAPIを使って詳細情報（おすすめレシピ、ペアリングや飲み方）を考えてもらい、データを登録する仕組みを作成しました。
                <br />
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            スクリーンショット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/images/card.png"
              width={300}
              height={300}
              alt=""
              className="rounded-lg"
            />
            <Image
              src="/images/modal.png"
              width={300}
              height={400}
              alt=""
              className="rounded-lg"
            />
            <Image
              src="/images/search.png"
              width={600}
              height={600}
              alt=""
              className="rounded-lg w-full"
            />
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            アーキテクチャ
          </h2>
          <Image
            src="/images/alcohol-archi.png"
            width={600}
            height={600}
            alt=""
            className="rounded-lg "
          />
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            テーブル構成
          </h2>
          <Image
            src="/images/db.avif"
            width={600}
            height={600}
            alt=""
            className="rounded-lg "
          />
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            データ登録の自動化フロー
          </h2>
          <Image
            src="/images/flo.png"
            width={200}
            height={200}
            alt=""
            className="rounded-lg ml-40"
          />
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl  tracking-tight text-foreground">
            課題
          </h2>
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="mb-2 text-sm font-medium mt-2">
                使ってもらえるものを作ることの難しさ
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground ml-2">
                開発中は、MVP単位でコミュニティメンバーに使用感や気になる箇所を見てもらいつつ、改善しながら進めていました。
                <br />
                しかし、実際に使ってもらえているかというと使ってもらえないものを作ってしまったと考えています。
                <br />
                対象がニッチであり、私自身が作りたかったものだったこと。
                <b>
                  ユーザーや世の中の人が何を課題に感じて、解決するためにはどうしたらいいのかの観点がなかったです。
                </b>
                <br />
                自分の課題を解決するためではなく、ターゲット対象をより具象化することを意識して、新しいサービスを開発することに決めました。
              </p>
              <h3 className="mb-2 text-sm font-medium mt-2">
                スクレイピングの課題
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                当初はあらゆるアルコール情報サイトから収集し、データを登録したいと考えていました。
                <br />
                しかし、多くのサイトスクレピングは禁止されており、各サイトの情報からDBにあうデータを登録すること困難でした。
                <br />
                （大手飲料企業のサイトに限定してスクレイピングをすることにしました。）
                <br />
                APIで公開されているものはあるか、あれば、それを活用するなども検討しましたが、お酒情報を公開しているものを見つけることができませんでした。
                <br />
                効率的にデータを集め、登録できる方法がもっとあったのではないか、APIがなければ自分で作れないかとも考えています。
              </p>
              <h3 className="mb-2 text-sm font-medium mt-2">
                データの取集、画像などの著作権問題
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                商用利用する気はなかったものの、画像やデータには著作権がかかる可能性があることを考慮できていませんでした。
                <br />
                今回のカード表示の画像は使用してよかったのか、今後プロダクトを作る際にデータやAPIを使用する際は、著作権を考慮する必要があると感じています。
              </p>
            </div>
          </div>
        </section>
        <Link href="/projects/osake" scroll={true}>
          <GoMoveToTop className="text-4xl text-foreground dark:text-foreground/60 fixed bottom-4 right-4" />
        </Link>
      </div>
    </div>
  );
}
