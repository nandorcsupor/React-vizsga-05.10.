import React, { useState } from 'react';
import axios from 'axios';

const TodoList = ({ todos, setTodos }) => {
  const remove = async id => {
    const result = await axios.delete(`https://localhost:3000/${id}`);
    setTodos(todos.filter(e => e.id !== id));
  };

  return (
    <div className="container col-10 justify-content-center">
      <div className="m-2 list-group">
        {todos.map(t => (
          <div key={t.id} className="list-group-item-success">
            <button className="btn btn-danger" />
            {remove}
          </div>
        }
        >
        <div className="row align-items-center">
          <div className="col-6">{t.elem} </div>
          <label for="checked"> </label>
          <input type="radio" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
