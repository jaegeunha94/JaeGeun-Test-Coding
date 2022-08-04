import * as React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import Profile from '../../Context/ReactQuery/Profile';

const ReactQueryProfile = () => {
  let [userId, setUserId] = React.useState(0);
  const queryClient = useQueryClient();
  const handleEditProfile = () => {
    // unique key를 통해서 data가 invalid 상태임을 전달합니다.
    // react query에서는 해당 데이터를 즉시 refetch 하게 됩니다.
    queryClient.invalidateQueries(['/posts']);
    // queryClient.setQueryData(['/posts'], { name: 'test', age: 29 });
  };

  // function updateProfile() {
  //   return useQuery(
  //     ['/posts'],
  //     () =>
  //       fetch('https://61b88c9d64e4a10017d19053.mockapi.io/user').then((res) =>
  //         res.json()
  //       ),
  //     {
  //       // 쿼리는 userId 값이 존재할 때까지 실행되지 않습니다
  //       // enabled: !!userId,
  //       //refetch interval
  //       // refetchInterval: 1000000000,
  //     }
  //   );
  // }

  // 쿼리는 userId 값이 존재할 때까지 실행되지 않습니다
  // setTimeout(() => {
  //   setUserId(1);
  // }, 1000);

  const { isLoading, error, data, isFetching } = updateProfile();
  if (error) return <div>{error}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Profile
      handleEditProfile={handleEditProfile}
      library="React Query"
      data={data}
    />
  );
};

export default ReactQueryProfile;
