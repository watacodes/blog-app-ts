import dayjs from "dayjs";
import { PostType } from "../../../../types/types";
import { Link } from "react-router-dom";
import CategoryButton from "../../../../components/CategoryButton";

type PostProps = {
  post: PostType;
};

const Post: React.FC<PostProps> = ({ post }) => {
  const date: string = dayjs(post.createdAt).format("MM/DD/YYYY");

  return (
    <Link to={`/posts/${post.id}`}>
      <li
        key={post.id}
        className="border border-solid border-gray-300 rounded-md p-4 my-8"
      >
        <div className="flex justify-between">
          <div className="text-sm text-gray-400">{date}</div>
          <div className="flex">
            {post.categories.map((category, idx) => {
              return <CategoryButton key={idx} category={category} />;
            })}
          </div>
        </div>
        <h1 className="text-2xl py-4">{post.title}</h1>
        <div
          className="line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </li>
    </Link>
  );
};
export default Post;
