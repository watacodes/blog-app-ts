export type PostType = {
  id: number;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
  title: string;
};

export type CustomErrorType = {
  message: string;
  code?: number;
};
