import React from 'react'
import { Avatar, Container, ImageList, ImageListItem, makeStyles, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:"80px",
        position:"sticky",
        top:0,
    },
    title:{
        fontSize:18,
        fontWeight:500,
        color:"#555"
    }

}))

const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>Online Friends</Typography>
            <AvatarGroup max={4} style={{marginBottom:20}}>
                <Avatar alt="Agnes Walker" 
                src="https://wallpapercave.com/wp/wp8953919.gif" />
                <Avatar alt="Remy Sharp" 
                src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg" />
                <Avatar alt="Travis Howard" 
                src="https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg" />
                <Avatar alt="Cindy Baker" 
                src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg" />
                <Avatar alt="Trevor Henderson" 
                src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg" />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList rowHeight={100} cols={2}>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="the something"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="the something"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="the something"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="the something"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt="the something"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/vegetables.jpg" alt="the something"/>
                </ImageListItem>
            </ImageList>

        </Container>
    )
}

export default Rightbar
