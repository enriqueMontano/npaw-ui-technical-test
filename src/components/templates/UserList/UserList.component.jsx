import React from 'react';
import { UserListWrapper } from './UserList.styled';
import { BarChart } from '../../atoms';
import { Card } from '../../organisms';

export const UserList = ({ data, action, chartData }) => {
  return (
    <UserListWrapper>
      <BarChart indexBy='login' keys={['followers']} data={chartData} />
      <div className='card-container'>
        {data &&
          data.items.map((user) => (
            <Card
              key={user.id}
              username={user.login}
              action={action}
              followers={user.followers_url}
            />
          ))}
      </div>
    </UserListWrapper>
  );
};
