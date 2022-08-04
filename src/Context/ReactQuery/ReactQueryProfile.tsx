import * as React from 'react';
import { useQuery } from 'react-query';
import Profile from '../../Context/ReactQuery/Profile';

const ReactQueryProfile = () => {
  let userId;

  setTimeout(() => {
    userId = 1;
  }, 0);

  const { isLoading, error, data, isFetching } = useQuery(
    ['/posts'],
    () =>
      fetch('https://61b88c9d64e4a10017d19053.mockapi.io/user').then((res) =>
        res.json()
      ),
    { enabled: !!userId }
  );

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>loading...</div>;

  return <Profile library="React Query" data={data} />;
};

export default ReactQueryProfile;
