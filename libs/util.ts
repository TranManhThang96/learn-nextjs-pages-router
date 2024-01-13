import { IPost } from '@/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDir = path.join(process.cwd(), 'data', 'posts');
export function getPostFiles() {
  return fs.readdirSync(postsDir);
}

function getPostData(fileName: string): any {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, '');

  return {
    slug: postSlug,
    content,
    ...data,
  };
}

export function getPostDataBySlug(slug: string): any {
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: slug,
    content,
    ...data,
  };
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts: IPost[] = postFiles.map((file) => {
    return getPostData(file);
  });

  return allPosts.sort((postA, postB) => {
    return postB.date > postA.date ? 1 : -1;
  });
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
