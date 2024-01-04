import { useRouter } from 'next/router';

const ClientDetailPage = () => {
  const router = useRouter();
  console.log('query', router.query); // {id: '2'}
  return <div>ClientDetailPage</div>;
};

export default ClientDetailPage;
