import PrimaryButton from './PrimaryButton';
import TextInput from './TextInput'
import moment from 'moment'
import cc from "classcat"

type Props = {
    show: boolean,
    setShow: (show:boolean) => void,
    inputTodo:(e:React.ChangeEvent<HTMLInputElement>) => void,
    inputLimit:(e:React.ChangeEvent<HTMLInputElement>) => void,
    onClick:(id:string, todo:string, limit:string, isDonet?:boolean) => void,
    deleteTodo:(id:string, todo:string, limit:string, isDonet?:boolean) => void,
    todo:string,
    limit:string,
    id:string,
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
                    { props.type === 'update' && <span className="delete-button"><PrimaryButton id={props.id} todo={props.todo} limit={props.limit} label={'削除'} onClick={props.deleteTodo} /></span>}
                    <span className="primary-button"><PrimaryButton id={props.id} todo={props.todo} limit={props.limit} label={label} onClick={props.onClick} /></span>
                </div>
            </div>
        </div>
    )

}

export default Form
