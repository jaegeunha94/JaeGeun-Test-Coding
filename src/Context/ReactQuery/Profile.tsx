import * as React from 'react';

const Profile = ({ library, data }) => (
  <div>
    <h1>Users from {library}</h1>
    {data.map((user) => (
      <p>
        {user.level} developer <strong>{user.name}</strong>
      </p>
    ))}
  </div>
);

export default Profile;
