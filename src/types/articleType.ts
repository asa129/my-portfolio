export type ArticleType = {
  id: string;
  title: string;
  url: string;
  body: string;
  likes_count: number;
  stocks_count: number;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    name: string;
    profile_image_url: string;
  };
};
