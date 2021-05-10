import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const NewTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const addTodo = async e => {
    const data = {
      elem: newTodo,
      id: uuidv4()
    };
    const resp = await axios.post(`https://localhost:3000`, data);
    setTodos([...todos, data]);
    setNewTodo('');
  };
  return (
    <>
      <form className="row justify-content-center" onSubmit={addTodo}>
        <label className="h2"> Todo App </label>
        <input
          className="form-control col-8"
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button
          className="btn btn-success col-4"
          type="button"
          onClick={addTodo}
        >
          Hozzáadás
        </button>
      </form>
    </>
  );
};

export default NewTodo;
