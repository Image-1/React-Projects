import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from '../app/store';

interface ReservationState{
    values:string[]
}

const initialState: ReservationState = {
    values:[]
}


const reservationsSlice = createSlice({
    name:'reservations',
    initialState,
    reducers:{
        addReservation: (state, action: PayloadAction<string>) =>{
            state.values.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<number>) =>{
            state.values.splice(action.payload, 1)
        }
        }
})

export const {addReservation, removeReservation} = reservationsSlice.actions;

export const getReservations = (state:RootState) => state.reservations.values;
export default reservationsSlice.reducer;