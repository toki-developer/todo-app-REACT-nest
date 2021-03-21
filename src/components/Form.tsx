import React, { useCallback, useState } from 'react'
import PrimaryButton from './PrimaryButton';
import TextInput from './TextInput'

const Form = () => {
    const [todo, setTodo] = useState("");
    const [limit, setLimit] = useState("2022-01-01");

    const inputTodo = useCallback((e) => {
        setTodo(e.target.value);
    },[])

    const inputLimit = useCallback((e) => {
        setLimit(e.target.value);
    },[])

    if(true){
        return (
            <div className="form-container">
                <TextInput value={todo}label="タスクを追加" type="text" fullWidth={true} onChange={inputTodo}/>
                <TextInput value={limit} label="日時を追加" type="date" fullWidth={false} onChange={inputLimit}/>
                <span className="primary-button"><PrimaryButton label="追加"/></span>
            </div>
        )
    }
    return <></>

}

export default Form
