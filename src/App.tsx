import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { getCustomers } from "./features/customerSlice";
import { addReservation, getReservations } from "./features/reservationSlice";

function App() {

  const dispatch = useDispatch();
  const reservations = useSelector(getReservations);
  const [reservationNameInput, setReservationNameInput] = useState("");

  const customers = useSelector(getCustomers);

  const handleAddReservation = () =>{
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>

            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard name = {name} index = {index} />
              ))}
            </div>

          </div>

          <div className="reservation-input-container">
            <input value = {reservationNameInput} onChange= {(e) => setReservationNameInput(e.target.value)}/>
            <button onClick = {handleAddReservation}>Add</button>
          </div>

        </div>
        <div className="customer-food-container">
          
          {customers.map((customer)=>(
             <CustomerCard id= {customer.id} name={customer.name} food = {customer.food}/>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;