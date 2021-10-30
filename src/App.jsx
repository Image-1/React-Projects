import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import AddComponent from "./components/AddComponent";


const useStyles = makeStyles((theme) =>({
  app:{
    display:"flex",
    flexDirection:"column",
  },
  mainGrid:{
    // display:"flex",
    // flexDirection:"row",
    
  },
  leftbarGrid:{
    // flex:0.2,
  },
  feedGrid:{
    // flex:0.9,
  },
  rightbarGrid:{

    [theme.breakpoints.down("600")]:{
      display:"none"
    }
  }
}))

const App = () => {
  const classes= useStyles()
  return (
    <div className={classes.app1}>
          <Navbar/>
          <Grid container className={classes.mainGrid}>
            <Grid item sm ={2} xs={2} className= {classes.leftbarGrid}>
              <Leftbar/>
            </Grid>
            <Grid item sm ={7} xs={10} className ={classes.feedGrid}>
              <Feed/>
            </Grid>
            <Grid item sm ={3} className= {classes.rightbarGrid}>
              <Rightbar />
            </Grid>
          </Grid>
          <AddComponent />
    </div>
  );
};

export default App;