import React from 'react';
import ImageHelper from './helper/ImageHelper';
import {Redirect} from 'react-router-dom';
import {addItemToCart,removeItemFromCart} from './helper/cartHelper'
//TODO:
let isAuthenticated = true

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false
}) => {

    const cardTitle = product? product.name:"The title"
    const cardDescription = product? product.line:"The description"
    const cardPrice = product? product.ip_address:"The price"

    const addToCart = () => {
        if (isAuthenticated){
            addItemToCart(product, ()=>{})
            console.log("Added to cart");
        }else{
            console.log("Login Please!");
        }
    }

    const getAredirect = redirect =>{
        if(redirect){
            return <Redirect to = "/cart" />;
        }
    }
    
    const addToCartButtonAddition = (addtocartTrue) => {
        return(
            addtocartTrue && (
                <button className = "btn btn-block btn-outline-success mt-2 mb-2" onClick = {addToCart}>
                        Add to Cart
                </button>
            )
        );
    };
    const removeFromcartButtonAddition = (removeFromcartTrue) => {
        return(
            removeFromcartTrue && (
                <button onClick={()=>{
                    removeItemFromCart(product.id)
                    console.log(` Removed : ${product.name}`)
                }}
                className = "btn btn-block btn-outline-danger mt-2 mb-2">
                            Remove
                </button>
            )
        );
    };

    return(
        <div className="card text-white bg-dark border border-info">
            <div className = "card-header lead">{cardTitle}</div>
            <div className= "card-body">
                {/* <div className = "rounded border border-success p-2">
                    <img src="https://images.pexels.com/photos/7307618/pexels-photo-7307618.jpeg" 
                    alt="pixel img" 
                    style={{maxHeight:"100%", maxWidth:"100%"}} 
                    className = "mb-3 rounded"
                    />
                </div> */}
                <ImageHelper product = {product} />
                <p className = "lead bg-success text-weight-normal text-wrap">
                    {cardDescription}
                </p>
                <p className = "btn btn-success rounded btn-sm px-4">${cardPrice}</p>
                <div className = "row">
                    <div className="col-12">
                        {addToCartButtonAddition(addtoCart)}
                    </div>
                    <div className="col-12" onClick = {()=>{}}>
                        {removeFromcartButtonAddition(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;