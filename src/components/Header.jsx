import { useUser } from "../context/AuthProvider";
import Button from "./button";

const Header = () => {
  const { loggedInUser, handleLogout } = useUser();
  return (
    <>
      <header>
        <h1>Students</h1>
        <div className="welcome-user">
          {loggedInUser ? (
            <>
              <h4>Welcome aboard, {loggedInUser.username}</h4>
              <img src={loggedInUser.avatar} alt="Avatar image" />
              <Button onClick={() => handleLogout()} className="logout-btn">
                Logout
              </Button>
            </>
          ) : null}
        </div>
      </header>
    </>
  );
};
export default Header;
