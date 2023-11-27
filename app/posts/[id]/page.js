import PostMoreInfo from "@/app/components/PostMoreInfo";

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);
  return { title: "post " + post.id };
}

async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = res.json();
  return result;
}

export default async function PagePost({ params: { id } }) {
  const postInfo = await fetchData(id);

  return (
    <div className="content">
      <PostMoreInfo postData={postInfo} />
    </div>
  );
}
