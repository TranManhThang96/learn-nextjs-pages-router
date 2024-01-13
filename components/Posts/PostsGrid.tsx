import React from 'react';
import classes from './styles/posts-grid.module.css';
import PostItem from './PostItem';
import { IPost } from '@/types';

const PostsGrid = ({ posts }: { posts: IPost[] }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
