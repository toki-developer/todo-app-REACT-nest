import React, { useCallback, useState } from 'react'
import PrimaryButton from './PrimaryButton';
import TextInput from './TextInput'
import moment from 'moment'
import cc from "classcat"

type Props = {
    getTodos:() => void,
    show: boolean,
    setShow: (show:boolean) => void,
}

const Form = (props:Props) => {
    const [todo, setTodo] = useState("");
    const [limit, setLimit] = useState(moment().format("YYYY-MM-DD"));

    const inputTodo = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    },[])

    const inputLimit = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setLimit(e.target.value);
    },[])

    async function addTodo() {
        const body = JSON.stringify({todo:todo,limit:limit})
        await fetch('http://localhost:3000/item',{
            method: 'POST',
            mode: 'cors',
            body: body,
            headers:{'Content-Type': 'application/json'}
        })
        .then(() =>{
            props.getTodos();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setTodo("");
            props.setShow(false)
            setLimit(moment().format("YYYY-MM-DD"));
        });

    }

    return (
        <div >
            <div className={cc({"form-back": props.show === true,})} onClick={() => props.setShow(false)}></div>
            <div className={cc([
                "form-content",
                {
                    "form-hide": props.show === false,
                }
            ])}>
                <div className="input-rap">
                    <TextInput value={todo}label="タスクを追加" type="text" fullWidth={true} onChange={inputTodo}/>
                    <TextInput value={limit} label="日時を追加" type="date" fullWidth={false} onChange={inputLimit}/>
                    <span className="primary-button"><PrimaryButton label="追加" onClick={addTodo} /></span>
                </div>
            </div>
        </div>
    )

}

export default Form
