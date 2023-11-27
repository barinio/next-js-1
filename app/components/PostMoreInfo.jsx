import Link from "next/link";

const PostMoreInfo = ({ postData }) => {
  const { title, body, userId } = postData;

  return (
    <div>
      <Link href={"/posts"}> ←Go back</Link>
      <h2>Title: {title}</h2>
      <p>Post content: {body}</p>
      <p>Author: {userId}</p>
    </div>
  );
};

export default PostMoreInfo;
