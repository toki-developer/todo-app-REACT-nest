import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import './assets/styles/style.css'

const initialTodo: Todo[] = [];

const App = () => {
  const [todos, setTodos] = useState(initialTodo);
  console.log(todos);
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
      </div>
    </div>
  );
}

export default App;
