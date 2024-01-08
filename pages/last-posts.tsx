import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastPostsPage = ({ initPosts }: { initPosts: any }) => {
  const [posts, setPosts] = useState<any[]>(initPosts);
  const { data, error, isLoading } = useSWR(
    'https://my-json-server.typicode.com/typicode/demo/posts',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  if (error) return <div>failed to load</div>;

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default LastPostsPage;

export async function getStaticProps() {
  const response: any = await fetch(
    'https://my-json-server.typicode.com/typicode/demo/posts'
  );
  const data = await response.json();
  return {
    props: {
      initPosts: data,
    },
    revalidate: 10,
  };
}
