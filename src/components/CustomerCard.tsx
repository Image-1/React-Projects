import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface customerCardTypes{
    id:string,
    name:string,
    food:string[]
}

function CustomerCard({id, name, food}:customerCardTypes) {

    const dispatch = useDispatch();

    const [foodInput, setfoodInput] = useState("");

    return (<div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">
                  {food.map((food) =>(
                      <p>{food}</p>
                  ))}
              </div>
              <div className="customer-food-input-container">
                <input value = {foodInput} onChange = {(e) =>setfoodInput(e.target.value)}/>
                <button onClick = {() =>{
                    if(!foodInput) return;
                    dispatch(addFoodToCustomer({
                        id,
                        food:foodInput
                    }));
                    setfoodInput("");
                                }}>Add</button>
              </div>
            </div>
          </div>)
}
export default CustomerCard
