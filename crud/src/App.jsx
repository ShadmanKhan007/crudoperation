import React from 'react';
import UserCRUD from './UserCrud';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      <UserCRUD />
    </UserProvider>
  );
};

export default App;

