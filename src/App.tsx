import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ProfilePage from "./Components/ProfilePage";
import "./App.css";
import LandinPage from "./Components/LandinPage";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";



export type User = {
  id: string;
  username: string;
  password: string;
};

const App = () => {
  
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (data: { username: string; password: string }) => {
    const foundUser = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      localStorage.setItem("signedIn", "true");
     
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleSignUp = (data: { username: string; password: string }) => {
    const newUser = { id: uuidv4(), ...data };
    const usersArray = JSON.parse(localStorage.getItem("users") || "[]");
    const userIdsArray = JSON.parse(localStorage.getItem("userIds") || "[]");
    localStorage.setItem("users", JSON.stringify([...usersArray, newUser]));
    userIdsArray.push(newUser.id);
    localStorage.setItem("userIds", JSON.stringify(userIdsArray));
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
    }
  }, []);

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route
          path="/profile"
          element={<ProfilePage/>}
        />
        <Route
          path="/login"
          element={<LoginPage onSubmit={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage onSubmit={handleSignUp} />}
        />
      </Routes>
        <Footer/>
    </Router>
  );
};

export default App;