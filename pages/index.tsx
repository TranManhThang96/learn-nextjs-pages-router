import Image from 'next/image';
import { Inter } from 'next/font/google';
import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (!data?.products || data?.products?.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data?.products,
    },
    revalidate: 20,
  };
}

export default function Home({ products }: { products: any[] }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}
