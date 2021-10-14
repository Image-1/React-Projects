import React,{useState} from "react";
import Base from "../core/Base";
import { signin, authenticate, signout, verifyAuthenticated, isAuthenticated } from "../auth/helper/index";
import { Redirect } from "react-router-dom";

const Signin =() =>{

    const [values, setValues] = useState(
        {
            username: "admin",
            email: "",
            password: "opklopkl",
            error:"",
            success:false,
            loading:false,
            didRedirect:false,
            
        }
    )

    const {username, password,email, error, success, loading, didRedirect}= values

    const handleChange =(name) =>(event)=>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const handleOnSubmit =(event) =>{
        event.preventDefault();
        setValues({...values, error:false, loading:true})
        signin({username,email,password})
        .then(res =>{
            console.log(res);
            if(res.success_msg){
                authenticate(res.access_token, ()=>{})
                setValues({
                    ...values,
                    username: "",
                    email: "",
                    password: "",
                    error:"",
                    success:true,
                    loading:false,
                    didRedirect:true,
                })

            }else{
                setValues({
                    ...values,
                    error:true,
                    success:false,
                })
            }
        })
        .catch(err =>console.log(err))

    }

    const performRedirect = () =>{
        if(verifyAuthenticated()){
            return <Redirect to="/"/>;
        }
    }

    const loadingMessage =() =>{
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const successMessage = () => {
        return(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display: success? '':'none'}}>
                   Logged in successfully.
                </div>
            </div>
        </div>
        )
    }
    const errorMessage = () => {
        return(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left" style={{display: error ? '':'none'}}>
                <div className="alert alert-danger">
                   Check all fields again.
                </div>
            </div>
        </div>
        )
    }

    const signinForm = () =>{
        return(
            <div className="row">
                    {/* {successMessage()}
                    {errorMessage()} */}

                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">

                            <label className="text-light">User Name:</label>

                            <input 
                            type = "text" 
                            className= "form-control" 
                            value = {username} 
                            onChange={handleChange("username")}
                            />

                            <label className="text-light">Password:</label>

                            <input 
                            type = "password" 
                            className= "form-control" 
                            value = {password} 
                            onChange={handleChange("password")}
                            />

                        </div>
                        <button 
                        className="btn btn-success btn-block" 
                        onClick = {handleOnSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title= "Sign In" description = "Sign In page">
            {loadingMessage()}
            {signinForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
            {performRedirect()}
        </Base>
    )
}

export default Signin