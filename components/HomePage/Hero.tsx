import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/blog.jpg" alt="hero" width={300} height={300} />
      </div>
      <h1>{`Hi, I'm Thang`}</h1>
      <p>
        I blog about web development - frontend frameworks like Vue or React
      </p>
    </section>
  );
};

export default Hero;
