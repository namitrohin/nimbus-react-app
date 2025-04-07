import React from 'react';
import { UserAdd } from './UserAdd';
import { UserBrowse } from './UserBrowse';

export const UserIndex = () => {
  return (
    <div>
      <UserBrowse />
      <UserAdd />
    </div>
  );
};
