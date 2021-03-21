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
  setId:(id:string) => void,
  setTodo:(todo:string) => void,
  setLimit:(limit:string) => void,
}

const TodoList = (props:Props) => {
    const classes = useStyles();
    console.log(props);

  return (
    <List className={classes.root}>
      {props.todos.map((todo:Todo) => {
        return (
          <Todo
          key={todo.id} id={todo.id} todo={todo.todo} limit={todo.limit} showForm={props.showForm}
          setId={props.setId} setTodo={props.setTodo} setLimit={props.setLimit}
          />
        );
      })}
    </List>
  )
}

export default TodoList;