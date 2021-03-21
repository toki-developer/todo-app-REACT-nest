import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
    showForm: (type:'add') => void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        width:62,
        height:62,
        borderRadius: 50,
        fontWeight:600,
        fontSize:40,
        zIndex:2,
    },
  }),
);

const AddButton = (props:Props) => {
    const classes = useStyles();
    return (
        <div className="add-button">
            <Button  variant="contained" color="primary" className={classes.button} onClick={() => props.showForm('add')}>＋</Button>
        </div>
    )
}

export default AddButton
