import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:"80px",
        // backgroundColor:theme.palette.primary.main,
    },
    media:{
        objectFit:"cover",
        height:250,
        [theme.breakpoints.down("600")]:{
            height:150,
        }
    }
}))

const Post = () => {
    const classes = useStyles();
    return (
        <Card className = {classes.card}>
            <CardActionArea className= {classes.cardAction}>
                <CardMedia 
                className = {classes.media}
                image = "https://images.news18.com/ibnlive/uploads/2021/10/google-slideshow.jpg"
                // image = "https://upload.wikimedia.org/wikipedia/commons/b/b4/KanoJigoro20110806.jpg"
                title="The Post" 
                />
                <CardContent>
                    <Typography gutterBottom variant= "h5">Kanō Jigorō</Typography>
                    <Typography paragraph>
                        Kanō Jigorō was a Japanese educator, athlete, and the founder of Judo. Judo was the first Japanese martial art to
                        gain widespread international recognition, and the first to become an official Olympic sport.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size= "small" color = "primary">Share</Button>
                    <Button size= "small" color = "primary">Learn More</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default Post
