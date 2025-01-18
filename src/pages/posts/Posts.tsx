import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Post from "./[id]/components/Post";
import { PostType } from "../../types/types";
import { CustomErrorType } from "../../types/types";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<CustomErrorType | null>(null);

  useEffect(() => {
    const fetcher = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        const data = await res.json();
        setPosts(data.posts);
      } catch (error: any) {
        if (error.message && error.code) {
          setError(error);
        } else {
          const fallbackError: CustomErrorType = {
            message: error.message || "Unexpected Error occured.",
            code: error.code || 500,
          };
          setError(fallbackError);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetcher();
  }, []);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <div className="w-screen h-svh flex flex-col items-center pt-10">
      <ul className="justify-center items-center w-[800px]">
        {posts.map((post: PostType) => {
          return <Post post={post} key={post.id} />;
        })}
      </ul>
    </div>
  );
};

export default Posts;
