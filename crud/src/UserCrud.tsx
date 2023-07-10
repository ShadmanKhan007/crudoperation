import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserCRUD = () => {
  const { state, dispatch } = useContext(UserContext);

  // Function to add a new user
  const addUser = (user) => {
    dispatch({ type: 'ADD_USER', payload: user });
  };

  // Function to update an existing user
  const updateUser = (user) => {
    dispatch({ type: 'UPDATE_USER', payload: user });
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    dispatch({ type: 'DELETE_USER', payload: userId });
  };

  return (
    <div>
      <h2>User CRUD Operations</h2>
<div className="Crud">
      <h3>Add User</h3>
      <button onClick={() => addUser({ id: 1, name: 'Rahul' })}>
        Add User
      </button>

      <h3>Update User</h3>
      <button onClick={() => updateUser({ id: 1, name: 'Updated User' })}>
        Update User
      </button>

      <h3>Delete User</h3>
      <button onClick={() => deleteUser(1)}>Delete User</button>

      <h3>Users</h3>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default UserCRUD;
