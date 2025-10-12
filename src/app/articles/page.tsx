import SliceArticles from "@/components/molecules/sliceArticles";
import { ArticleType } from "@/types/articleType";
import { OgpData } from "@/types/ogpDataType";
import ogpData from "@/data/ogp-data.json";
import allArticles from "@/data/all-articles.json";

export default function allArticle() {
  const articles = allArticles as unknown as ArticleType[]; // 記事データの加工
  const processedData = articles.map((article: ArticleType) => {
    return {
      id: article.id,
      title: article.title,
      body: article.body.substring(0, 150).concat("..."),
      likes_count: article.likes_count,
      stocks_count: article.stocks_count,
      url: article.url,
      ogpImage: ogpData.filter((ogp: OgpData) => ogp.id === article.id)[0]
        .ogpImage,
      comment: article.comment,
    };
  });

  return <SliceArticles data={processedData} />;
}
