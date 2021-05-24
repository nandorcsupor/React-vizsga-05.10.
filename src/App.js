import React, { useState, useEffect } from 'react';
import './style.css';
import NewTodo from './NewTodo.js';
import TodoList from './TodoList.js';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      subject: 'valami1',
      completed: true
    },
    {
      id: uuidv4(),
      subject: 'valami2',
      completed: true
    },
    {
      id: uuidv4(),
      subject: 'valami3',
      completed: false
    },
    {
      id: uuidv4(),
      subject: 'valami4',
      completed: true
    },
    {
      id: uuidv4(),
      subject: 'valami5',
      completed: false
    }
  ]);

  return (
    <>
      <NewTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
