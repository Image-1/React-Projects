import React, {useState, useEffect} from 'react';
import {getProducts} from './helper/coreapicalls';
import Base from './Base';
import Card from './Card';
import { verifyAuthenticated } from '../auth/helper';
import { Redirect } from 'react-router-dom';

export default function Home(){

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)

    const loadAllProducts = () => {
        getProducts()
        .then(data =>{
            if(data){
                console.log(data)
                setProducts(data.results);
            }else{
                console.log(data)
            }
        })
        .catch(err=> console.log(err, "home error"))
    }

    useEffect(()=>{
            loadAllProducts();
        
        
    },[])

    const performRedirect = () =>{
        if(verifyAuthenticated() == false){
            return <Redirect to="/signin"/>;
        }
    }

    return(
        <Base title="Home Page"
        description = " Welcome to Home Page">
            <div>
            <h1>Home Component</h1>
            <div className = "row">
                {products.map((product, index)=>{
                    return(
                        <div key = {index} className = "col-4 mb-4">
                            <Card product = {product}/>
                            
                        </div>
                    )
                })}
            </div>
            </div>
            {performRedirect()}
        </Base>
    )
}