import Link from "next/link";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";

export default function Home({ posts }) {
  return (
    <Layout>
      <h1 className="mb-4">Latest Blog Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body.substring(0, 100)}...</p>
                <Link href={`/posts/${post.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60, // Optional: revalidate every 60 seconds
  };
}
