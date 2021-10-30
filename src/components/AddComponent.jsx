import React, { useState } from 'react'
import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip } from '@material-ui/core';
import Post from './Post';
import { Add } from '@material-ui/icons';
const Options = [
    {
      value: 'Public',
      label: 'Public',
    },
    {
      value: 'Private',
      label: 'Private',
    },
    {
      value: 'Unlisted',
      label: 'Unlisted',
    },
  ];

  
const useStyles = makeStyles((theme)=>({
    fab:{
        position:"fixed",
        bottom:20,
        right:20
    },
    container:{
        width:500,
        height:550,
        backgroundColor:"white",
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:"auto",
        [theme.breakpoints.down("600")]:{
            height:"100vh",
            width:"100vw",
        },
        
        
    }
}))

const AddComponent = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
        <Tooltip title="Add" aria-label = "add" onClick = {()=>setOpen(true)}>
            <Fab color="primary" className= {classes.fab}>
                <Add />
            </Fab>
        </Tooltip>
        <Modal
        open = {open}
        onClose = {()=>setOpen(false)}
        >
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className ={classes.items}>
                        <TextField 
                        label = "Title"
                        style={{width:"100%"}}
                        size= "small"
                        />
                    </div>
                    <div className ={classes.items}>
                        <TextField 
                            multiline
                            variant="outlined"
                            defaultValue="Discription needed to add."
                            rows = {4}
                            label = "Description"
                            style={{width:"100%"}}
                            size= "small"
                            />
                    </div>
                
                    <div className={classes.items}>
                        <TextField select id="standard-basic" value={Options[0]["label"]} label="Visibility">
                            {Options.map((option)=>(
                                <MenuItem key={option.value} value= {option.value}>{option.label}</MenuItem>
                            ))}       
                        </TextField>
                    </div>
                    <div className={classes.items}>
                        <FormLabel component="legend">who can comment?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel 
                            label= "Everybody"
                            value= "Everybody"
                            control={<Radio size="small" />}
                            />
                            <FormControlLabel 
                            label= "My Friends"
                            value= "My Friends"
                            control={<Radio size="small" />}
                            />
                            <FormControlLabel 
                            label= "Nobody"
                            value= "Nobody"
                            control={<Radio size="small" />}
                            />
                            <FormControlLabel 
                            label= "Custom (Premium)"
                            value= "Custom (Premium)"
                            control={<Radio size="small" />}
                            disabled
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.items} >
                        <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={() =>setOpen(false)}>Create</Button>
                        <Button variant="outlined" color="secondary" onClick={() =>setOpen(false)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        </>
    )
}

export default AddComponent
