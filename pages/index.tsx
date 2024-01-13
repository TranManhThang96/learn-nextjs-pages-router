import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/HomePage/Hero';
import FeaturedPosts from '@/components/HomePage/FeaturedPosts';
import { IPost } from '@/types';
import { getFeaturedPosts } from '@/libs/util';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ featuredPosts }: { featuredPosts: IPost[] }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
    revalidate: 60,
  };
}
