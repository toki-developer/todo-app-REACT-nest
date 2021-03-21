import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
    show: boolean,
    setShow: (show:boolean) => void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        width:62,
        height:62,
        borderRadius: 50,
        fontWeight:600,
        fontSize:40
    },
  }),
);

const AddButton = (props:Props) => {
    const classes = useStyles();
    return (
        <div className="add-button">
            <Button variant="outlined" color="primary" className={classes.button} onClick={() => props.setShow(true)}>＋</Button>
        </div>
    )
}

export default AddButton
