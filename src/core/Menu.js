import React, {Fragment} from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { signout, verifyAuthenticated } from "../auth/helper";

const currentTab = (history, path) =>{
    if(history.location.pathname == path){
        return {color:"#2ecc72"}
    }else{
        return {color:"#FFFFFF"}
    }

}

const Menu = ({history, path}) => {



    return(
        <div>
            <ul className="nav nav-tabs bg-dark">

                <li className="nav-item">
                    <Link style = {currentTab(history, '/')} className="nav-link" to = "/">
                        Home
                    </Link> 
                </li>
                <li className="nav-item">
                    <Link style = {currentTab(history, '/cart')} className="nav-link" to = "/cart">
                        Cart
                    </Link> 
                </li>
                <li className="nav-item">
                    <Link style = {currentTab(history, '/user/dashboard')} className="nav-link" to = "/user/dashboard">
                        Dashboard
                    </Link> 
                </li>
               {!verifyAuthenticated()&& (
                   <Fragment>
                <li className="nav-item">
                    <Link style = {currentTab(history, '/signup')} className="nav-link" to = "/signup">
                        SignUp
                    </Link> 
                </li>
                <li className="nav-item">
                    <Link style = {currentTab(history, '/signin')} className="nav-link" to = "/signin">
                        SignIn
                    </Link> 
                </li>
                   </Fragment>
               )}
                
                {verifyAuthenticated() && (
                    <Fragment>
                <li className="nav-item">
                    <span 
                    onClick = {() =>{
                        signout(()=>(<Redirect to= "/signin"/>))
                    }}
                    className="nav-link text-warning">
                        SignOut
                    </span>
                </li>
                </Fragment>
                )}
               
                
            </ul>
        </div>
    )
}
export default withRouter(Menu)