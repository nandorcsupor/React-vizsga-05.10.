import React, { useState, useEffect } from 'react';
import './style.css';
import NewTodo from './NewTodo.js';
import TodoList from './TodoList.js';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {});

  return (
    <>
      <NewTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
