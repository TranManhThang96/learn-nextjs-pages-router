import React from 'react';
import classes from './styles/all-posts.module.css';
import PostsGrid from './PostsGrid';
import { IPost } from '@/types';

const AllPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
