import PostContent from '@/components/PostDetail/PostContent';
import { getPostDataBySlug, getPostFiles } from '@/libs/util';
import { IPost } from '@/types';
import React from 'react';

const PostDetailPage = ({ post }: { post: IPost }) => {
  return <PostContent post={post} />;
};

export default PostDetailPage;

export function getStaticProps(context: any) {
  const { params } = context;
  const postData = getPostDataBySlug(params.slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostFiles();
  const slugs = postFiles.map((file) => file.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}
