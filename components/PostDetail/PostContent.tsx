import React from 'react';
import PostHeader from './PostHeader';
import classes from './styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';
import { IPost } from '@/types';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as syntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = ({ post }: { post: IPost }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          img(props) {
            const { node, ...rest } = props;
            if (rest.src && rest.alt) {
              return (
                <Image
                  src={rest.src}
                  alt={rest.alt}
                  width={600}
                  height={300}
                  layout="responsive"
                />
              );
            }
          },
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                {...rest}
                language={match[1]}
                style={syntaxStyle}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
