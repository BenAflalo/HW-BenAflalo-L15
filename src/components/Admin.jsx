import React, { useState } from "react";
import Button from "./button";
import { storageService } from "../services/storageService";

const Admin = ({ user, deleteUser, users, setUsers }) => {
  const [isInputEnabled, setIsInputEnabled] = useState(true);
  const [newUser, setNewUser] = useState({
    avatar: "",
    createdAt: "",
    email: "",
    id: "",
    isAdmin: Boolean,
    password: "",
    username: "",
  });

  const activeUserEdit = (id) => {
    setIsInputEnabled(false);
    const user = storageService.getUser(id);
    setNewUser(user);
    // console.log(newUser);
    // console.log(user);
  };
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.className]: e.target.Value });
    console.log(typeof e.currentTarget.Value);
    console.log(newUser);
  };

  const editUser = (id) => {
    // const newUsers =
    // setUsers()
    users.map((user) => {
      if (user.id === id) {
        return newUser;
        // setStudentData({
        //   ...studentData,
        //   [event.target.id]: event.target.value,
        // })
      } else {
        return user;
      }
    });
    // console.log(newUsers);
    console.log(newUser);
  };
  return (
    <>
      <tr>
        <td>{user.id}</td>
        <td>
          <input
            type="text"
            className="email"
            disabled={isInputEnabled}
            value={newUser.email}
            placeholder={user.email}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            className="username"
            disabled={isInputEnabled}
            placeholder={user.username}
            value={newUser.username}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            className="password"
            disabled={isInputEnabled}
            value={newUser.password}
            placeholder={user.password}
            onChange={handleChange}
          />
        </td>
        <td>{user.createdAt}</td>
        <td>
          <input
            type="text"
            className="admin"
            disabled={isInputEnabled}
            value={user.isAdmin ? "Yes" : "No"}
            onChange={handleChange}
          />
        </td>
        <td>{user.avatar}</td>
        <td className="action">
          <Button onClick={() => deleteUser(user.id)} className="btn-delete">
            Delete
          </Button>
        </td>
        <td className="action">
          {isInputEnabled ? (
            <Button
              onClick={() => activeUserEdit(user.id)}
              className="btn-edit"
            >
              Edit
            </Button>
          ) : (
            <Button onClick={() => editUser(user.id)} className="btn-edit">
              Save changes
            </Button>
          )}
        </td>
      </tr>
    </>
  );
};

export default Admin;
