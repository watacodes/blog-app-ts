export type PostData = {
  id: number;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
  title: string;
};

export type CustomError = {
  message: string;
  code?: number;
};
