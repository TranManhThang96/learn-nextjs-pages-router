import React from 'react';

const UserDetailPage = ({ id }: { id: string }) => {
  return <div>{id}</div>;
};

export default UserDetailPage;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      id: `userid-${userId}`,
    },
  };
}
