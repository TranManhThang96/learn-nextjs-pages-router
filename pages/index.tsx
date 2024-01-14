import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/HomePage/Hero';
import FeaturedPosts from '@/components/HomePage/FeaturedPosts';
import { IPost } from '@/types';
import { getFeaturedPosts } from '@/libs/util';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ featuredPosts }: { featuredPosts: IPost[] }) {
  return (
    <>
      <Head>
        <title>ThangTm Blog</title>
        <meta name="description" content="ThangTm Blog" />
      </Head>
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
