import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

type Props = {
    label:string,
    onClick:() => void,
}

const useStyles = makeStyles({
    button: {
        marginBottom: 16,
    }
})

const PrimaryButton = (props:Props) => {
    const classes = useStyles()
    return (
        <Button className={classes.button} variant="contained" color="primary" onClick={props.onClick}>{props.label}</Button>
    )
}

export default PrimaryButton
