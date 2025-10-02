import React from "react";
import TechStack from "./molecules/techStack";

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 xl:text-2xl text-xl font-bold text-foreground/80 mb-4">
        My Experience
      </h1>
      <div className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 p-2 my-2 rounded items-start hover:bg-cyan-200/20 hover:dark:bg-cyan-50/5 hover:text-accent-foreground my-4 p-2">
        <div className="text-sm text-foreground/50 xl:col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold text-foreground/80">銀行業界</h2>
          <h3 className="text-xl font-semibold text-foreground/80 mr-2">
            インターネットバンキング、コールセンターオペレーター向けシステム保守
          </h3>
          <span className="text-sm text-foreground/50">
            2020年8月 - 2021年3月
          </span>
        </div>
        <div className="xl:col-span-1 lg:col-span-3 mx-2">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-md text-foreground dark:text-foreground/60">
                業務経験
              </p>
              <p className="text-sm text-foreground dark:text-foreground/60 mt-1">
                エンドユーザー、行員様向けインターネットバンキングシステムを担当
                <br />
                コールセンターオペレーター向けシステムを担当
                <br />
                外部システムからのレスポンスを加工し、
                別システムへ返却する機能の作成を担当しました。
                <br />
                ・設計書作成、PG、テストケース作成、テスト実施
                <br />
                ・テスト結果レビュー
                <br />
                ・後輩フォロー
                <br />
              </p>
            </div>
          </div>
          {/* 使用技術 */}
          <div className="flex flex-wrap gap-2 mt-4">
            <TechStack id="java" />
            <TechStack id="c" />
            <TechStack id="spring" />
            <TechStack id="db2" />
            <TechStack id="oracle" />
            <TechStack id="linux" />
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 p-2 my-2 rounded hover:bg-cyan-200/20 hover:dark:bg-cyan-50/5 hover:text-accent-foreground my-4 p-2">
        <div className="text-sm text-foreground/50 xl:col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold text-foreground/80">保険業界</h2>
          <h3 className="text-xl font-semibold text-foreground/80">
            新規申込サイト、顧客管理システム保守
          </h3>
          <span className="text-sm text-foreground/50">
            2020年8月 - 2021年3月
          </span>
        </div>
        <div className="xl:col-span-1 lg:col-span-3 mx-2">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-md text-foreground dark:text-foreground/60">
                業務経験
              </p>
              <p className="text-sm text-foreground dark:text-foreground/60 mt-1">
                ネット保険の新規申込サイト、マイページサイト、顧客管理システムを担当
                <br />
                ・お客さまの要望に基づき改修個所の調査、工数見積り
                <br />
                ・バッチ作成
                <br />
                ・設計書作成、修正、PG、テストケース作成、テスト実施
              </p>
            </div>
          </div>
          {/* 使用技術 */}
          <div className="flex flex-wrap gap-2 mt-4">
            <TechStack id="java" />
            <TechStack id="springboot" />
            <TechStack id="postgresql" />
            <TechStack id="oracle" />
            <TechStack id="jquery" />
            <TechStack id="bootstrap" />
            <TechStack id="linux" />
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-5 xl:m-4 p-2 my-2 rounded hover:bg-cyan-200/20 hover:dark:bg-cyan-50/5 hover:text-accent-foreground my-4 p-2">
        <div className="text-sm text-foreground dark:text-foreground/50 xl:col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold text-foreground/80">研修期間</h2>
          2020年8月 - 2021年3月
        </div>
        <div className="xl:col-span-1 lg:col-span-3 mx-2">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-md text-foreground dark:text-foreground/60">
                業務経験
              </p>
              <p className="text-sm text-foreground dark:text-foreground/60 mt-1">
                Javaを中心に受講
              </p>
            </div>
          </div>
          {/* 使用技術 */}
          <div className="flex flex-wrap gap-2 mt-4">
            <TechStack id="java" />
          </div>
        </div>
      </div>
    </section>
  );
}
