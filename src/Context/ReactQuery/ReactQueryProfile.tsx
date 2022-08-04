import * as React from 'react';
import { useQuery } from 'react-query';
import Profile from '../../Context/ReactQuery/Profile';

const ReactQueryProfile = () => {
  const { isLoading, error, data, isFetching } = useQuery(['/posts']);

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>loading...</div>;

  return <Profile library="React Query" data={data} />;
};

export default ReactQueryProfile;
