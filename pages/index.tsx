import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/HomePage/Hero';
import FeaturedPosts from '@/components/HomePage/FeaturedPosts';

const inter = Inter({ subsets: ['latin'] });
const DUMMY_POSTS: IPost[] = [
  {
    id: 1,
    slug: 'post1',
    title: 'Post 1',
    image: 'getting-started-nextjs.png',
    excerpt: 'The excerpt',
    date: '2022-07-13',
  },
  {
    id: 2,
    slug: 'post2',
    title: 'Post 2',
    image: 'nextjs-file-based-routing.png',
    excerpt: 'The excerpt',
    date: '2022-07-13',
  },
  {
    id: 3,
    slug: 'post3',
    title: 'Post 3',
    image: 'getting-started-nextjs.png',
    excerpt: 'The excerpt',
    date: '2022-07-13',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
