import React, { useCallback, useState } from 'react'
import PrimaryButton from './PrimaryButton';
import TextInput from './TextInput'
import moment from 'moment'

const Form = (props:any) => {
    const [todo, setTodo] = useState("");
    const [limit, setLimit] = useState(moment().format("YYYY-MM-DD"));

    const inputTodo = useCallback((e) => {
        setTodo(e.target.value);
    },[])

    const inputLimit = useCallback((e) => {
        setLimit(e.target.value);
    },[])

    async function addTodo() {
        const body = JSON.stringify({todo:todo,limit:limit})
        console.log(body);
        await fetch('http://localhost:3000/item',{
            method: 'POST',
            mode: 'cors',
            body: body,
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json'}
        })
        .then(() =>{
            props.getTodos();
            setTodo("");
            setLimit(moment().format("YYYY-MM-DD"));
        })

    }

    if(true){
        return (
            <div className="form-container">
                <TextInput value={todo}label="タスクを追加" type="text" fullWidth={true} onChange={inputTodo}/>
                <TextInput value={limit} label="日時を追加" type="date" fullWidth={false} onChange={inputLimit}/>
                <span className="primary-button"><PrimaryButton label="追加" onClick={addTodo} /></span>
            </div>
        )
    }
    return <></>

}

export default Form
