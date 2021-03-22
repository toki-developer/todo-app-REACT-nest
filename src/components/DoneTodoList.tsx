import React, { useState } from 'react'
import TodoList from './TodoList'
import cc from "classcat"

type Props = {
    todos:Todo[],
    showForm:(type:'update') => void,
    setStatus:(id:string,todo:string,limit:string,isDone:boolean)=> void
    doneTodo:(id:string, todo:string, limit:string, isDone?:boolean)=>void
  }

const DoneTodoList = (props:Props) => {
    const [showDone, setShowDone] = useState(false);
    return (
        <div>
            <div className='done-list-title'>
                <span>完了{props.todos.length}件</span>
                <span className= {cc([
                'show-done-list',
                {'show-done-list-r':showDone}
                ])} onClick={()=> setShowDone(!showDone)}/>
            </div>
            <div className={cc([
                "done-list",
                {"done-list-hide": showDone}
                ])}>
                <TodoList todos={props.todos} showForm={props.showForm} setStatus={props.setStatus} doneTodo={props.doneTodo}/>
            </div>
        </div>
    )
}

export default DoneTodoList
