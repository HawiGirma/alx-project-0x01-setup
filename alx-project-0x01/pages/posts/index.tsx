import { GetStaticProps } from "next";
import Head from "next/head";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces/PostProps";

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}
