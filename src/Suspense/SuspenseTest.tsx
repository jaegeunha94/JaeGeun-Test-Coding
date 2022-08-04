import * as React from 'react';

export default function SuspenseTest() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://61b88c9d64e4a10017d19053.mockapi.io/user`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setPosts(data);
        }, 3000);
      });
  });

  return <div>{posts}</div>;
}
