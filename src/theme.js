import { createTheme } from "@material-ui/core";
import { blue, grey, red } from "@material-ui/core/colors";

export const theme1 = createTheme({
    palette:{
        primary:{
            main:grey["500"]
        }
    },
    myButton:{
        backgroundColor:"red",
        color:"white",
        border: "2px solid black",
        
    }
}
)