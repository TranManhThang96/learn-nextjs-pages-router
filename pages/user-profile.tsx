import React from 'react';

const UserProfilePage = ({ userName }: { userName: string }) => {
  return <div>{userName}</div>;
};

export default UserProfilePage;

export async function getServerSideProps() {
  return {
    props: {
      userName: 'thang',
    },
  };
}
