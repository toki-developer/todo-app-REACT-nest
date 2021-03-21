import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Todo from './Todo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

const TodoList = (props:{todos:Todo[]}) => {
    const classes = useStyles();
    console.log(props);

  return (
    <List className={classes.root}>
      {props.todos.map((todo:Todo) => {
        return (
          <Todo key={todo.id} id={todo.id} todo={todo.todo} limit={todo.limit}/>
        );
      })}
    </List>
  )
}

export default TodoList;