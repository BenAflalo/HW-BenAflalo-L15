import React, { useState } from "react";
import Button from "./button";
import { storageService } from "../services/storageService";

const UserPreview = ({ user, deleteUser, users, setUsers }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [isInputEnabled, setIsInputEnabled] = useState(true); //have to put in here and not in Admin so only the spesipic tr would be active.(if this state is in the admin all the table will change to enabled )

  const activeUserEdit = (id) => {
    setIsInputEnabled(false);
    const user = storageService.getUser(id);
    setEditedUser(user);
  };
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  const handleChecked = (e) => {
    setEditedUser({ ...editedUser, isAdmin: !editedUser.isAdmin });
  };
  const editUser = (id) => {
    setEditedUser({
      ...editedUser,
      avatar: `https://robohash.org/${editedUser.username}`,
    });
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return editedUser;
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
    storageService.saveUsers(updatedUsers);
    setIsInputEnabled(true);
  };
  return (
    <tr>
      <td>{editedUser.id}</td>
      <td>
        <input
          type="text"
          name="email"
          disabled={isInputEnabled}
          value={editedUser.email}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="username"
          disabled={isInputEnabled}
          value={editedUser.username}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="password"
          disabled={isInputEnabled}
          value={editedUser.password}
          onChange={handleChange}
        />
      </td>
      <td>{user.createdAt}</td>
      <td>
        <input
          type="checkbox"
          disabled={isInputEnabled}
          onChange={handleChecked}
          checked={editedUser.isAdmin}
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
          <Button onClick={() => activeUserEdit(user.id)} className="btn-edit">
            Edit
          </Button>
        ) : (
          <Button onClick={() => editUser(user.id)} className="btn-edit">
            Save changes
          </Button>
        )}
      </td>
    </tr>
  );
};

export default UserPreview;
