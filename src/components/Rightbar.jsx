import React from 'react'
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:"80px",
        position:"sticky",
        top:0,
    }
}))

const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>Rightbar</Container>
    )
}

export default Rightbar
