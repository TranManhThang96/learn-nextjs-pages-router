import React from 'react';
import PostHeader from './PostHeader';
import classes from './styles/post-content.module.css';

const DUMMY_POST: IPost = {
  id: 1,
  slug: 'post1',
  title: 'Post 1',
  image: 'getting-started-nextjs.png',
  excerpt: 'The excerpt',
  date: '2022-07-13',
  content: '# This is a first post',
};
const PostContent = () => {
  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
      />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
