import React from 'react';
import classes from './styles/post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';
const PostItem = ({ post }: { post: IPost }) => {
  const { id, title, image, excerpt, date, slug } = post;
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
          <h3>TITLE</h3>
          <time>July 13th 2022</time>
          <p>The excerpt</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
