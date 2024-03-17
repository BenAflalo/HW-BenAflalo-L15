import React, { createContext, useContext, useEffect, useState } from "react";
import { userService } from "../services/userService";
import { storageService } from "../services/storageService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  //   const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existUser = storageService.getLoggedInUser();

    if (existUser) {
      setLoggedInUser(existUser);
    }
  }, []);

  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };
  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      userService.createUser(username, email, password);
      navigate("/login");
    } else {
      const user = userService.login(username, password);
      if (user === false) {
        alert("Invalid credentials");
        return;
      } else if (user === null) {
        alert("User doesn't exist");
        navigate("/signup");
      }
      setLoggedInUser(user);
      //   navigate("/")
    }
  };
  const value = {
    handleAuth,
    handleLogout,
    loggedInUser,
    // setLoggedInUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUser = () => useContext(AuthContext);
