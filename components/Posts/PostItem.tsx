import React from 'react';
import classes from './styles/post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { IPost } from '@/types';
const PostItem = ({ post }: { post: IPost }) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={`/images/posts/${slug}/${image}`}
            alt={post.title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
