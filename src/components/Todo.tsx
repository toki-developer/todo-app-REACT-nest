import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment'


const Todo = (props:Todo) => {
    const calcLimit = ():string => {
        const limit = moment().diff(props.limit , 'days') * -1;
        if(limit < 0) return limit* -1 + '日前'
        return 'あと'+limit+'日';
    }
    return (
        <ListItem key={props.id} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox/>
            </ListItemIcon>
            <ListItemText primary={props.todo} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                  <span>{calcLimit()}</span>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    )
}

export default Todo;