import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import "./TodoList.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { v4 as uuidv4 } from "uuid";
import AddTodoModal from "./TodoModal";

export interface Todo {
  userId: string | null;
  id: any;
  text: string;
  deadline: string;
  description: string;
  date: any;
  countdown: any;
}

interface TodoListProps {
  userId: string | null;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({
  userId,
  todos,
  setTodos,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos: Todo[] = JSON.parse(storedTodos);
      const filteredTodos = parsedTodos.filter(
        (todo) => todo.userId === userId
      );
      setTodos(filteredTodos);
    }
  }, [userId, setTodos]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddTodo = (newTodo: Todo) => {
    const storedTodos = localStorage.getItem("todos") ?? "";
    if (storedTodos) {
      const parsedTodos: Todo[] = JSON.parse(storedTodos);
      const updatedTodos = [...parsedTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      const filteredTodos = updatedTodos.filter(
        (todo) => todo.userId === userId
      );
      setTodos(filteredTodos);
    } else {
      const updatedTodos = [newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    }
    setShowModal(false);
  };

  return (
    <>
      <AddTodoModal
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        handleAddTodo={handleAddTodo}
      />
      <button
            className="add-btn"
            title="Add New Project"
            onClick={handleToggleModal}
          >
        <svg
          className="btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1={12} y1={5} x2={12} y2={19} />
          <line x1={5} y1={12} x2={19} y2={12} />
        </svg>
      </button>
    </>
  );
};

export default TodoList;