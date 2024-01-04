import Link from 'next/link';
import { useRouter } from 'next/router';

const ClientPage = () => {
  const router = useRouter();

  const loadClientDetail = () => {
    // C1
    // router.push('/clients/client-a');

    // C2
    router.push({
      pathname: '/clients/[id]',
      query: { id: 'client-a' },
    });
  };

  return (
    <div>
      <button onClick={loadClientDetail}>LoadClientDetail</button>
    </div>
  );
};

export default ClientPage;
