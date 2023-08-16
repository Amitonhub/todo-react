import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Todo } from "./TodoList";

interface AddTodoModalProps {
  showModal: boolean;
  handleToggleModal: () => void;
  handleAddTodo: (newTodo: Todo) => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({
  showModal,
  handleToggleModal,
  handleAddTodo,
}) => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() !== "" && deadline.trim() !== "" && description.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: text,
        userId: JSON.parse(localStorage.getItem("userId")!)[0],
        deadline: deadline,
        description: description,
        date: new Date().toLocaleDateString(),
        countdown: "",
      };
      handleAddTodo(newTodo);
      setText("");
      setDeadline("");
      setDescription("");
      handleToggleModal();
    }
  };

  return (
    <Modal show={showModal} onHide={handleToggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAdd}>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <input
              type="text"
              className="form-control"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter a todo item"
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              className="form-control"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="Enter the deadline date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTodoModal;