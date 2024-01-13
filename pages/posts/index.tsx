import AllPosts from '@/components/Posts/AllPosts';
import { IPost } from '@/types';
import React from 'react';

const DUMMY_POSTS: IPost[] = [
  {
    slug: 'post1',
    title: 'Post 1',
    image: 'getting-started-nextjs.png',
    excerpt: 'The excerpt',
    date: '2022-07-13',
    isFeatured: true,
  },
  {
    slug: 'post2',
    title: 'Post 2',
    image: 'nextjs-file-based-routing.png',
    excerpt: 'The excerpt',
    date: '2022-07-13',
    isFeatured: true,
  },
  {
    slug: 'post3',
    title: 'Post 3',
    image: 'getting-started-nextjs.png',
    excerpt: 'The excerpt',
    date: '2022-07-13',
    isFeatured: true,
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
