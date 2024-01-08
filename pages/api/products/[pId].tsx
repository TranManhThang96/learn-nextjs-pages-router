import React from 'react';
import fs from 'fs/promises';
import path from 'path';

const ProductDetail = ({ loadedProduct }: { loadedProduct: any }) => {
  if (!loadedProduct) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const productId = params.pId;
  const data = await getData();

  const product = data.products.find((prod: any) => prod.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const productIds: any[] = data.products.map((product: any) => product.id);

  const pathsWithParams = productIds.map((id) => ({ params: { pId: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetail;
