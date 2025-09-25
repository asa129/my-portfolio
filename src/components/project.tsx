import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";
import TechStack from "./molecules/techStack";
import { learningProject } from "@/data/project_data";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Project() {
  return (
    <section id="project" className="">
      <h1 className="lg:static sticky top-0 bg-slate-900/80 xl:text-2xl lg:text-xl text-lg font-bold text-neutral-50/80 mb-4">
        My Project
      </h1>
      <div className="text-neutral-50/60">
        <p className="xl:text-md text-sm text-neutral-50/80">
          0⇒1で開発することに挑戦、アイデアの発案からMVP作成、その後継続的に改善していくことを目指しています。
        </p>
        {/* メインプロジェクト */}
        <Link href="https://addiless-alcohol-app.web.app/" target="_blank">
          {/* お酒添加物チェッカー */}
          <div className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 p-2 my-2 rounded hover:bg-accent/10 hover:text-neutral">
            <Image
              src="/images/addiless-alcohol-app.png"
              width={300}
              height={300}
              alt=""
              className="rounded-lg xl:col-span-1 lg:col-span-2"
            />
            <div className="xl:col-span-1 lg:col-span-3 mx-2">
              <h2 className="text-xl font-bold text-neutral-50/80 my-2">
                お酒添加物チェッカー
              </h2>
              <p className="xl:text-md lg:text-sm text-xs">
                2025-05 ~ 2025-06
                <br />
                <br />
                お酒に添加物が入っているか簡単にわかるアプリが欲しいと思い作成しました。
                <br />
                ニッチな領域で痒い所に手が届くならぬ痒い所に価値を提供できるものを目指しました。
              </p>
              {/* 使用技術 */}
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
            </div>
          </div>
        </Link>
        <Button
          variant="ghost"
          className="text-neutral-50/60 hover:bg-accent/10 hover:text-neutral"
        >
          <Link
            href="https://qiita.com/asa129/items/056a601746b49029c768"
            target="_blank"
          >
            ⇒ 開発経緯や思い
          </Link>
          <RxOpenInNewWindow />
        </Button>
        <div className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 p-2 my-2 rounded hover:bg-accent/10 hover:text-neutral">
          {/* アウトップサポートサービス */}
          <Image
            src="/images/character_program_fast.png"
            width={300}
            height={300}
            alt=""
            className="rounded-lg xl:col-span-1 lg:col-span-2"
          />
          <div className="xl:col-span-1 lg:col-span-3 mx-2">
            <h3 className="text-xl font-bold text-neutral-50/80 my-2">
              アウトップサポートサービス（開発中）
            </h3>
            <p className="text-neutral-50/60 text-sm">
              2025-09 ~
              <br />
              <br />
              小さなハードルからアウトップを容易に促し、定着を促すサービスを開発中です。
              <br />
              勉強してるのに身にならないと悩む人に、このサービスを届けたいと考えています。
              <br />
              私自身、勉強をしていましたが、（＝した気になっていましたが）学習したことが身についていない、自力で一つもアプリを作れないことに悩んでいました。
              <br />
              勉強するためのコンテンツは豊富にあるのにそれをどう活かすか、どうすれば定着するのかを教えてくれるものは少ないと考えています。
              <br />
              そこで、ハードルを設けずにアウトプット（アクティブリコール）を行える、インプット時に少しでも定着を促すサービスを開発することを決意しました。
            </p>
            {/* 使用技術 */}
            <div className="flex flex-wrap gap-2 mt-4">
              <TechStack id="react" />
              <TechStack id="typescript" />
              <TechStack id="nextjs" />
              <TechStack id="tailwindcss" />
              <TechStack id="supabase" />
              <TechStack id="cloudflare" />
              <TechStack id="vitest" />
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-neutral-50/60 hover:bg-accent/10 hover:text-neutral flex justify-end"
        >
          <Link
            href="https://www.notion.so/OutputFirst-25b56d8768b980ae9feceb3c87d8e275?source=copy_link"
            target="_blank"
          >
            ⇒ サービス考案資料
          </Link>
          <RxOpenInNewWindow />
        </Button>
        {/* 学習で作ったプロジェクト */}
        <div className="mt-10">
          <p className="text-md text-neutral-50/80">
            ReactやNext.js、CI/CDの構築、DB設計、導入など、開発するために必要なことをプロダクトづくりを通して習得しました。
          </p>
          {learningProject.map((project) => {
            return (
              <div key={project.id}>
                <Link href={project.url} target="_blank">
                  <div className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 lg:m-2 my-2 p-2 rounded hover:bg-accent/10 hover:text-neutral">
                    <div className="xl:col-span-1 lg:col-span-2">
                      <Image
                        src={project.image}
                        width={300}
                        height={300}
                        alt={project.title}
                        className="rounded-lg xl:w-[300px] xl:h-[300px] w-[300px] h-[200px]  object-cover"
                      />
                    </div>

                    <div className="xl:col-span-1 lg:col-span-3 mx-2">
                      <h2 className="text-xl font-bold text-neutral-50/80 my-2">
                        {project.title}
                      </h2>
                      <p className="text-sm">
                        {project.startDate} ~ {project.endDate}
                        <br />
                        <br />
                        {project.description}
                      </p>
                      {/* 使用技術 */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((techStack) => {
                          return (
                            <div key={techStack}>
                              <TechStack id={techStack} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Link>

                <Button
                  variant="ghost"
                  className="text-neutral-50/60 hover:bg-accent/10 hover:text-neutral flex justify-end"
                >
                  <Link href={project.qiitaUrl} target="_blank">
                    ⇒ 学習時の記事
                  </Link>
                  <RxOpenInNewWindow />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
