import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import {v4 as uuid} from 'uuid';

interface ReservationsCardTypes {
    name:string,
    index:number

}

function ReservationCard({name, index}:ReservationsCardTypes) {
    const dispatch = useDispatch();

    return <div className="reservation-card-container" key = {index} onClick = {() =>{
        dispatch(removeReservation(index));
        dispatch(addCustomer({
            id:uuid(),
            name,
            food:[],
        }));
        }}>
        {name}
        </div>
}

export default ReservationCard
