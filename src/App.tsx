import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import './assets/styles/style.css'
import Form from './components/Form';
import AddButton from './components/AddButton';

const initialTodo: Todo[] = [];

const App = () => {
  const [todos, setTodos] = useState(initialTodo);
  const [show, setShow] = useState(false);
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
        <AddButton setShow={setShow} show={show}/>
        <Form getTodos={getTodos} setShow={setShow} show={show}/>
      </div>
    </div>
  );
}

export default App;
