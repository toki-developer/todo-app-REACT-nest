import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import './assets/styles/style.css'
import Form from './components/Form';

const initialTodo: Todo[] = [];

const App = () => {
  const [todos, setTodos] = useState(initialTodo);
  async function getTodos() {
    await fetch('http://localhost:3000/item', {
      mode: 'cors'
    })
      .then((response) => {return response.json()})
      .then((todos) => {return setTodos(todos)});
  }
  useEffect(() => {
    getTodos();
  }, [setTodos])

  return (
    <div className="container">
      <div className="content">
        <TodoList todos={todos}/>
        <Form />
      </div>
    </div>
  );
}

export default App;
