import students from "../data/students";
import { storageService } from "./storageService";
import ShortUniqueId from "short-unique-id";

// import axios from "axios"

async function getStudentAsync() {
  return new Promise((resolve, reject) => {
    resolve(students);
    reject(Error("Promise rejected"));
  });
}
function generateId(length = 10) {
  const { randomUUID } = new ShortUniqueId();
  return randomUUID(length);
}
function createUser(username, email, password, avatar = "") {
  const newUser = {
    id: generateId(),
    username,
    password,
    email,
    avatar: `https://robohash.org/${username}`,
    isAdmin: false,
    createdAt: new Date(),
  };
  const totalUsers = storageService.getUsers();
  storageService.saveUsers([...totalUsers, newUser]);
}
function login(username, password) {
  const users = storageService.getUsers();
  const foundedUser = users.find(
    (user) => user.password === password && user.username === username
  );
  const foundedUser2 = users.find((user) => user.username === username);
  if (!foundedUser2) {
    return null;
  } else if (!foundedUser) {
    return false;
  }
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
}
function logout() {
  storageService.clearAll();
}

export const userService = {
  getStudentAsync,
  createUser,
  login,
  logout,
  // fetchAvatar,
};
