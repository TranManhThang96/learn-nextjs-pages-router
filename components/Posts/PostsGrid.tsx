import React from 'react';
import classes from './styles/posts-grid.module.css';
import PostItem from './PostItem';

const PostsGrid = ({ posts }: { posts: IPost[] }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
