import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const NewTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const addTodo = e => {
    const data = {
      id: uuidv4(),
      subject: newTodo,
      completed: false
    };
    setTodos([...todos, data]);
    setNewTodo('');
  };
  return (
    <>
      <form className="row justify-content-center" onSubmit={addTodo}>
        <label className="h2 m-2 p-2"> Todo App </label>
        <div className="col-8">
          <input
            className="col-10 form-control"
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            onKeyPress={e => setNewTodo(e.target.value)}
          />
        </div>
        <div className="col-4">
          <button className="btn btn-success" type="button" onClick={addTodo}>
            Hozzáadás
          </button>
        </div>
      </form>
    </>
  );
};

export default NewTodo;
