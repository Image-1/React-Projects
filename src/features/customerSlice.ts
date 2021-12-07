import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";



interface CustomerState{
    values: Customer[];
}

interface Customer {
    id:string,
    name:string,
    food:string[],
}


const initialState:CustomerState = {
    values: [],
};

interface addFoodToCustomerTypes{
    id:string,
    food:string
}


export const customerSlice = createSlice({
    name:"customers",
    initialState,
    reducers:{
        addCustomer: (state, action:PayloadAction<Customer>) =>{
            state.values.push(action.payload);
        },
        addFoodToCustomer:(state, action:PayloadAction<addFoodToCustomerTypes>) =>{
            state.values.forEach((customer) =>{
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food);
                }

            })
        }
    }
}); 


export const getCustomers = (state:RootState)=> state.customers.values;
export default customerSlice.reducer;
export const {addCustomer, addFoodToCustomer} = customerSlice.actions;