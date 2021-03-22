import React, { useCallback, useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import './assets/styles/style.css'
import Form from './components/Form';
import AddButton from './components/AddButton';
import moment from 'moment'
import DoneTodoList from './components/DoneTodoList';

const initialTodo: Todo[] = [];
type type = 'add' | 'update'

const App = () => {
  const [todos, setTodos] = useState(initialTodo);
  const [show, setShow] = useState(false);
  const [type, setType] = useState<type>('add');
  const [id, setId] = useState("");
  const [todo, setTodo] = useState("");
  const [limit, setLimit] = useState(moment().format("YYYY-MM-DD"));

  const setStatus = (id:string,todo:string,limit:string,isDone:boolean) => {
    setId(id);
    setTodo(todo);
    setLimit(limit);
  }

  const inputTodo = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  },[])

  const inputLimit = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setLimit(e.target.value);
  },[])

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

  async function addTodo(id:string, todo:string, limit:string, isDonet?:boolean) {
    const body = JSON.stringify({todo:todo,limit:limit})
    await fetch('http://localhost:3000/item',{
        method: 'POST',
        mode: 'cors',
        body: body,
        headers:{'Content-Type': 'application/json'}
    })
    .then(() =>{
        getTodos();
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        setShow(false)
        setTodo("");
        setLimit(moment().format("YYYY-MM-DD"));
    });
  }

  async function updateTodo(id:string, todo:string, limit:string, isDone?:boolean){
    const url = `http://localhost:3000/item/${id}/update`;
    const body = JSON.stringify({todo:todo,limit:limit,isDone:isDone})
    await fetch(url,{
      method: 'PUT',
      mode: 'cors',
      body: body,
      headers:{'Content-Type': 'application/json'}
    })
    .then(() =>{
      getTodos();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setShow(false)
    });
  }

  async function deleteTodo(id:string, todo:string, limit:string, isDone?:boolean){
    const url = ` http://localhost:3000/item/${id}/delete`;
    await fetch(url,{
      method: 'DELETE',
      mode: 'cors'
    })
    .then(() =>{
      getTodos();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setShow(false)
    });
  }

  const showForm = (type: 'add' | 'update') => {
    setShow(true);
    if(type === 'add' ) {
      setId("")
      setTodo("");
      setLimit(moment().format("YYYY-MM-DD"));
      setType('add')
    } else {
      setType('update')
    }
  }

  const todoList = todos.filter((todo) => todo.isDone === false);
  const doneTodoList = todos.filter((todo) => todo.isDone === true);

  return (
    <div className="container">
      <div className="content">
        <h1>マイタスク</h1>
        <TodoList todos={todoList} showForm={showForm} setStatus={setStatus} doneTodo={updateTodo}/>
        <DoneTodoList todos={doneTodoList} showForm={showForm} setStatus={setStatus} doneTodo={updateTodo}/>
        <AddButton showForm={showForm}/>
        <Form
        todo={todo} limit={limit} type={type}
        setShow={setShow} show={show} id={id}
        inputTodo={inputTodo} inputLimit={inputLimit} onClick={type === 'add'? addTodo : updateTodo}
        deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
export default App;
