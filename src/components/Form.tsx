import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton';
import TextInput from './TextInput'
import moment from 'moment'
import cc from "classcat"

type Props = {
    show: boolean,
    setShow: (show:boolean) => void,
    inputTodo:(e:React.ChangeEvent<HTMLInputElement>) => void,
    inputLimit:(e:React.ChangeEvent<HTMLInputElement>) => void,
    onClick:() => void,
    todo:string,
    limit:string,
    type: 'add' | 'update',
}

const Form = (props:Props) => {
    const label = props.type === 'add'? '追加' : '更新';
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
                    <TextInput value={props.todo} label={`タスクを${label}`} type="text" fullWidth={true} onChange={props.inputTodo}/>
                    <TextInput value={moment(props.limit).format("YYYY-MM-DD")} label={`日時を${label}`}  type="date" fullWidth={false} onChange={props.inputLimit}/>
                    <span className="primary-button"><PrimaryButton label={label} onClick={props.onClick} /></span>
                </div>
            </div>
        </div>
    )

}

export default Form
