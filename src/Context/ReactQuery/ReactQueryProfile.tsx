import * as React from 'react';
import { useQuery } from 'react-query';
import Profile from '../../Context/ReactQuery/Profile';

const ReactQueryProfile = () => {
  const { isLoading, error, data, isFetching } = useQuery('users', () =>
    fetch('https://61b88c9d64e4a10017d19053.mockapi.io/user').then((res) =>
      res.json()
    )
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Profile library="React Query" data={data} />;
};

export default ReactQueryProfile;
