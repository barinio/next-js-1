import Link from "next/link";

export const metadata = {
  title: "Posts",
};

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = res.json();
  return result;
}

export default async function Posts() {
  const posts = await fetchData();
  return (
    <div>
      <h1>Welcome to the Posts page</h1>
      <ul className="list-post">
        {posts.map(({ id, title, body }) => (
          <li key={id} className="post content">
            <h2>{title}</h2>
            <p>{body}</p>
            <Link href={`/posts/${id}`}>More info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
