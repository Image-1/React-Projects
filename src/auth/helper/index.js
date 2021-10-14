import { isElement } from 'react-dom/test-utils';
import {USERS} from '../../backend';
import {cartEmpty} from '../../core/helper/cartHelper';

export const signup = (user) =>{
    return fetch(`${USERS}user/registration/`, {
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    }
    )
    .then(response =>{
        // console.log("Response", response.json())
        return response.json();
    })
    .catch(err =>console.log(err))
};

export const signin = (user) => {
    
    const formData = new FormData()
    for(const username in user){
        formData.append(username,user[username])
    }

    return fetch(`${USERS}user/login/`, {
        method:"POST",
        body: formData
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


export const authenticate = (data, next) =>{
    if(typeof window !== undefined){
        console.log("lllll")
    }
    if(typeof window !== undefined){
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () =>{
    if(typeof window === undefined){
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }else{
        return false;
    }
}

export const verifyAuthenticated =() =>{
    if(typeof window === undefined){
        return false;
    }
    if(isAuthenticated()){
        const acc_token ={token: `${isAuthenticated()}`}
    return true
    }
    return false
}

export const signout = (next) =>{
    // const userId  = isAuthenticated() && isAuthenticated().user.id
    // console.log(userId)
    if(typeof window !== undefined){
        localStorage.removeItem("jwt")
        cartEmpty(()=>{});
    }
    return fetch(`${USERS}user/logout/`, {
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response)
        next();
    })
    .catch(err => console.log(err))
}