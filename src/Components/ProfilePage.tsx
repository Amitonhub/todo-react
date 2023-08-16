import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Todo } from "./TodoList";
import "./ProfilePage.css";
import MessageSection from "./MessageSection";
import { Sidebar } from "./Sidebar";
import {TodoCards} from "./TodoCards";

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const signedIn = localStorage.getItem("signedIn") === "true";
    if (!signedIn) {
      alert("Can't access profile page without Log In");
      navigate("/login");
    } else {
      const storedUserId = localStorage.getItem("usersId");
      if (storedUserId) {
        const usersArray = JSON.parse(localStorage.getItem("users") || "[]");
        const foundUser = usersArray.find((u: any) => u.id === storedUserId);
        if (foundUser) {
          setUser({ username: foundUser.username });
        }
      }
    }
  }, [navigate]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const setSignedIn = () => {
    localStorage.setItem("signedIn", "false");
    localStorage.removeItem("userId");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <TodoCards />
          <MessageSection />
        </div>
      </div>
      <br />
      <button className="log-out" onClick={setSignedIn}>Log Out</button>
      <br />
      <br />
    </>
  );
};

export default ProfilePage;
