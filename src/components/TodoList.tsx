import { createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Todo from './Todo';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

type Props = {
  todos:Todo[],
  showForm:(type:'update') => void,
  setStatus:(id:string,todo:string,limit:string,isDone:boolean)=> void
  doneTodo:(id:string, todo:string, limit:string, isDone?:boolean)=>void
}

const TodoList = (props:Props) => {
    const classes = useStyles();
    console.log(props);

  return (
    <List className={classes.root}>
      {props.todos.map((todo:Todo) => {
        return (
          <Todo
          key={todo.id} id={todo.id} todo={todo.todo} limit={todo.limit} isDone={todo.isDone}
          showForm={props.showForm} setStatus={props.setStatus} doneTodo={props.doneTodo}
          />
        );
      })}
    </List>
  )
}

export default TodoList;