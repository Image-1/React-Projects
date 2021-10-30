import React, { useState } from 'react'
import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    toolbar:{
        display:"flex",
        justifyContent:"space-between",
    },
    logoLg:{
        display:"none",
        [theme.breakpoints.up('sm')]:{
            display:"block"
        },
        '&:hover':{
            color:'black'
        }
    },
    logosm:{
        display:"block",
        [theme.breakpoints.up('sm')]:{
            display:"none"
        },
    },
    search:{
        display:"flex",
        alignItems:"center",
        backgroundColor:alpha(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.down('600')]:{
            display:(props)=>(props.showSearch ?"flex":"none"),
            width:(props) =>(props.showSearch ? "80%" : "50%")
        },
        borderRadius:theme.shape.borderRadius,
        width:'50%',
        marginLeft:'60px'
        
    },
    searchInput:{
        display:"flex",
        flex:"0.9",
        marginLeft:theme.spacing(1),
        color:'white',
        
    },
    searchIcon1:{
        display:'flex',
        flex:"0.1",
        [theme.breakpoints.down('600')]:{
            display:'none',
        }

    },
    cancelSearchIcon:{
        display:"none",
        flex:"0.1",
        [theme.breakpoints.down(600)]:{
            display:"flex",
        },
        margin:"2px"
    },
    searchIcon2:{
        display:'flex',
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none',
        },
        cursor:'pointer',
        

    },
    icons:{
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.down('600')]:{
            display:(props)=>(props.showSearch ? "none" : "flex")
        },
    },
    badges:{
        marginRight:theme.spacing(2)
    }

}));

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    const classes = useStyles({showSearch});
    return (
        <AppBar position="fixed">
            <Toolbar className = {classes.toolbar}>
                <Typography variant = "h6" className={classes.logoLg}>Logo Large</Typography>
                <Typography variant = "h6"className={classes.logosm}>logo</Typography>
                <div className={classes.search}>
                    <Search className={classes.searchIcon1}/>
                    <InputBase className={classes.searchInput} placeholder="Search..." />
                    <Cancel className = {classes.cancelSearchIcon} onClick={() => setShowSearch(false)}/>
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchIcon2} onClick = {()=>setShowSearch(true)}/>
                    <Badge badgeContent = {4} color= 'secondary' className = {classes.badges}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent = {3} color= 'secondary' className = {classes.badges}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="profile-pic" src ="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
