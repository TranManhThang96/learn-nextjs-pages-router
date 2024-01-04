import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  console.log('pathname', router.pathname); // /products/[id]
  console.log('query', router.query); // {id: '2'}
  

  return <>ProductDetail</>
}