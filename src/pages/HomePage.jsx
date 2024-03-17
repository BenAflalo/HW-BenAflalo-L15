import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const HomePage = () => {
  const { loggedInUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
