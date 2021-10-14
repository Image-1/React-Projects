import React,{useState} from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { signup } from '../auth/helper';

const Signup = () =>{

    const [values, setValues] = useState({
        username:"",
        first_name:"",
        last_name:"",
        email:"",
        password1:"",
        password2:"",
        error:"",
        success:false,
    });

    const {username, first_name, last_name, email, password1, password2, error, success} = values;

    const handleChange = (name) => 
        (event) =>{
            setValues({...values, error:false, [name]:event.target.value});
        }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        setValues({...values, error:false})
        signup({username, email, password1, password2, first_name, last_name})
        .then(res =>{
            console.log("DATA ",res)
            if(res.user ){
                setValues({
                    ...values,
                    username:"",
                    first_name:"",
                    last_name:"",
                    email:"",
                    password1:"",
                    password2:"",
                    error:"",
                    success:true,
                }
                )
            }else{
                setValues({
                    ...values,
                    error:true,
                    success:false,
                })
            }
        })
        .catch(err => console.log(err))
    }

    const successMessage = () => {
        return(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display: success? '':'none'}}>
                    New account created successfully. Please <Link to = "/signin">login now</Link>.
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

    const signUpForm = () =>{
        return(
            <div className="row">
                    {successMessage()}
                    {errorMessage()}

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
                            <label className="text-light">First Name:</label>

                            <input 
                            type = "text" 
                            className= "form-control" 
                            value = {first_name} 
                            onChange={handleChange("first_name")}
                            />
                            <label className="text-light">Last Name:</label>

                            <input 
                            type = "text" 
                            className= "form-control" 
                            value = {last_name} 
                            onChange={handleChange("last_name")}
                            />

                            <label className="text-light">Email:</label>

                            <input 
                            type = "text" 
                            className= "form-control" 
                            value = {email} 
                            onChange={handleChange("email")}
                            />

                            <label className="text-light">Password:</label>

                            <input 
                            type = "password" 
                            className= "form-control" 
                            value = {password1} 
                            onChange={handleChange("password1")}
                            />

                            <label className="text-light">Password Again:</label>

                            <input 
                            type = "password" 
                            className= "form-control" 
                            value = {password2} 
                            onChange={handleChange("password2")}
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
        <Base title="Sign Up Page" description = "A Sign Up for User">
            {signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default Signup