import { useRouter } from 'next/router';

const SelectedClientDetailPage = () => {
  const router = useRouter();
  console.log('query', router.query); // {id: '2', clientprojectid: 'max'}
  return <div>SelectedClientDetailPage</div>;
};

export default SelectedClientDetailPage;
