export const learningProject: {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  image: string;
  url: string;
  qiitaUrl: string;
}[] = [
  {
    id: "study-record",
    title: "学習記録アプリ",
    description: `学習内容を記録して、学習内容を振り返ることができます。\r
    Reactとjavascriptを用いTODOアプリを作成しました。
    \r supabaseを用いてデータの保存、jestとreacttestinglibraryを用いてテストを行いました。
    \r firebaseでデプロイ、githubactionsでCI/CDの構築を行いました。`,
    startDate: "2025-02",
    endDate: "2025-03",
    techStack: [
      "react",
      "javascript",
      "vite",
      "supabase",
      "jest",
      "reacttestinglibrary",
      "firebase",
    ],
    image: "/images/study-record.png",
    url: "https://github.com/asa129/study-record",
    qiitaUrl: "https://qiita.com/asa129/items/189a526901c06f756178",
  },
  {
    id: "new-study-record",
    title: "新・学習記録アプリ",
    description: `学習内容を記録して、学習内容を振り返ることができます。
    \rTypeScriptとReactを用いTODOアプリを作成しました。
    \rChakraUIを用い、ドキュメント見ながら必要なコンポネーントを組み合わせてUIを作成しました。`,
    startDate: "2025-04",
    endDate: "2025-04",
    techStack: [
      "react",
      "typescript",
      "supabase",
      "jest",
      "vite",
      "reacttestinglibrary",
      "chakraui",
      "reacthookform",
      "githubactions",
    ],
    image: "/images/new-study-record.png",
    url: "https://github.com/asa129/new-study-record",
    qiitaUrl: "https://qiita.com/asa129/items/73cbf320dfcf52cc2690",
  },
  {
    id: "business-card-app",
    title: "名刺管理アプリ",
    description: `スマートフォンでの使用を想定したデジタル名刺アプリを作成しました。ReactHookFormを用いてバリデーションの作り方を学びました。`,
    startDate: "2025-04",
    endDate: "2025-05",
    techStack: [
      "react",
      "typescript",
      "vite",
      "supabase",
      "jest",
      "reacttestinglibrary",
      "chakraui",
      "reacthookform",
    ],
    image: "/images/business-card-app.png",
    url: "https://github.com/asa129/business-card-app",
    qiitaUrl: "https://qiita.com/asa129/items/73cbf320dfcf52cc2690",
  },
  {
    id: "ai-failure-check",
    title: "CI/CD失敗チェックツール",
    description: `CI/CDの失敗をチェックするツールを作成しました。\rワークフロー内で失敗を検知、失敗したエラーコードをAIに提示、解決策を提案してもらうツールを構築しました。`,
    startDate: "2025-05",
    endDate: "2025-05",
    techStack: ["githubactions"],
    image: "/images/ai-failure-check.avif",
    url: "https://github.com/asa129/addiless-alcohol-app/actions/workflows/ai-failure-check.yml",
    qiitaUrl: "https://qiita.com/asa129/items/cc271dd791667844f1a5",
  },
  {
    id: "tech-blog",
    title: "技術ブログ",
    description: `Qiita APIとMyCroCMS APIを用いて、技術ブログを作成しました。\r
    Next.jsを使用し、ルーティングや各種レンダリングの違いを学びました。\r
    firebaseAppHostingを用いてドキュメントを読み込みつつCI/CDの構築やODPの取得を調べながら実現することができました。`,
    startDate: "2025-07",
    endDate: "2025-07",
    techStack: [
      "react",
      "typescript",
      "nextjs",
      "supabase",
      "tailwindcss",
      "daisyui",
      "firebase",
      "qiitaapi",
      "mycrocmsapi",
      "cheerio",
    ],
    image: "/images/tech-blog.avif",
    url: "https://github.com/asa129/tech-blog",
    qiitaUrl: "https://qiita.com/asa129/items/d01a70c1d3b4ab15f887",
  },
];
