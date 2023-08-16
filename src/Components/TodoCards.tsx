import React, { useEffect, useRef, useState } from "react";
import "./ProfilePage.css";
import { Todo } from "./TodoList";

export const TodoCards: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const colors = ['#fee4cb', '#dbf6fd', '#fddbf6', ' #dbe5fd', '#dbfdf3'];
  const projectBoxesRef = useRef<HTMLDivElement>(null);
  const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  const getCurrentUserId = (): string | null => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return user.id;
    }
    return null;
  };

  useEffect(() => {
    const filteredTodos = storedTodos.filter((todo: Todo) => {
      return todo.userId === currentUser.id && todo.userId === getCurrentUserId();
    });
  
    setTodos(filteredTodos);
  
    const projectBoxesContainer = projectBoxesRef.current;
    if (projectBoxesContainer) {
      const projectBoxes = Array.from(projectBoxesContainer.querySelectorAll('.project-box')) as HTMLElement[];
      projectBoxes.forEach((projectBox) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        projectBox.style.backgroundColor = randomColor;
      });
    }
  }, [todos]);

  const toggleDeleteButton = () => {
    setShowDeleteButton(!showDeleteButton);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };
  

  return <div className="projects-section">
  <div className="projects-section-header">
    <p>Projects</p>
    <p className="time">{new Date().toLocaleDateString()}</p>
  </div>
  <div className="projects-section-line">
    <div className="projects-status">
      <div className="item-status">
        <span className="status-number">04</span>
        <span className="status-type">In Progress</span>
      </div>
      <div className="item-status">
        <span className="status-number">0</span>
        <span className="status-type">Upcoming</span>
      </div>
      <div className="item-status">
        <span className="status-number">04</span>
        <span className="status-type">Total Projects</span>
      </div>
    </div>
    <div className="view-actions">
      <button className="view-btn list-view" title="List View">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-list"
        >
          <line x1={8} y1={6} x2={21} y2={6} />
          <line x1={8} y1={12} x2={21} y2={12} />
          <line x1={8} y1={18} x2={21} y2={18} />
          <line x1={3} y1={6} x2="3.01" y2={6} />
          <line x1={3} y1={12} x2="3.01" y2={12} />
          <line x1={3} y1={18} x2="3.01" y2={18} />
        </svg>
      </button>
      <button className="view-btn grid-view active" title="Grid View">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-grid"
        >
          <rect x={3} y={3} width={7} height={7} />
          <rect x={14} y={3} width={7} height={7} />
          <rect x={14} y={14} width={7} height={7} />
          <rect x={3} y={14} width={7} height={7} />
        </svg>
      </button>
    </div>
  </div>
  <div className="project-boxes jsGridView">
      {todos.map(todo => (
        <div className="todo-list" key={todo.id}>
          <div className="project-box-wrapper">
            <div className="project-box"   style={{backgroundColor: "#dbf6fd" }}>
              <div className="project-box-header">
                <span>{todo.date}</span>
                <div className="more-wrapper">
                  <button
                    className="project-btn-more"
                    onClick={toggleDeleteButton}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-vertical"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                  {showDeleteButton && (
                    <div className="more-menu">
                      <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="project-box-content-header">
                <p className="box-content-header">{todo.text}</p>
                <p className="box-content-subheader">{todo.description}</p>
              </div>
              <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                  <span
                    className="box-progress"
                    style={{ width: "60%", backgroundColor: "#ff942e" }}
                  />
                </div>
                <p className="box-progress-percentage">60%</p>
              </div>
              <div className="project-box-footer">
          <div className="participants">
            <img
              src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="participant"
            />
            <img
              src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
              alt="participant"
            />
            <button
              className="add-participant"
              style={{ color: "#096c86" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{ color: "#096c86" }}>
            2 Days Left
          </div>
        </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </div>

}
