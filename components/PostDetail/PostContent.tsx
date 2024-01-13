import React from 'react';
import PostHeader from './PostHeader';
import classes from './styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';
import { IPost } from '@/types';

const PostContent = ({ post }: { post: IPost }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
