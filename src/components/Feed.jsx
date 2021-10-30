import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:"80px",
        // backgroundColor:theme.palette.primary.main,
    }
}))

const Feed = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

export default Feed
