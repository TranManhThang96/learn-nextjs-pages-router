import Link from 'next/link';
import React from 'react';
import classes from './button.module.css';

const Button = (props: {
  href?: string;
  children: React.ReactNode;
  onclick?: () => void;
}) => {
  const { href, children, onclick } = props;
  if (href) {
    return (
      <Link href={href} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
