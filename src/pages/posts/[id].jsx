import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/api";
import Link from "next/link";

export default function Post({ post }) {
  if (!post) return <div>Post not found</div>;

  return (
    <Layout>
      <article className="blog-post">
        <h1 className="mb-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
        <Link href="/" className="btn btn-secondary mt-4">
          Back to Home
        </Link>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
    revalidate: 60, // Optional: revalidate every 60 seconds
  };
}
