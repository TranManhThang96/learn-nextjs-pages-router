import React from 'react';
import classes from './styles/featured-posts.module.css';
import PostsGrid from '../Posts/PostsGrid';
import { IPost } from '@/types';

const FeaturedPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
