import React from "react";
import UserPreview from "./UserPreview";

const Admin = ({ deleteUser, users, setUsers }) => {
  return (
    <>
      <div className="container">
        <h2>Users list</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Created At</th>
              <th>Is Admin</th>
              <th>Avatar</th>
              <th>Delete user</th>
              <th>Edit user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserPreview
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                users={users}
                setUsers={setUsers}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
