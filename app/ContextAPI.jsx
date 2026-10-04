'use client'
import { createContext, useContext, useState } from "react"
import React from 'react'
import Data from "./Data/data.js"
export const SystemContext = createContext()


 function ContextAPI({children}) {
    const Today  = new Date();
  const final = `${Today.getDate()} - ${Today.getMonth()+1} - ${Today.getFullYear()}`
    const New  = Data.filter(item => item.date === final)
    const [Moviedetails , setMoviedetails] = useState(null)
    const [SeatNo ,  setSeatNo] = useState(null)
    const [BookingData ,  setBookingData] = useState([])
    const [seats ,  setseats] = useState(New[0].Seats || [])
    const [Print ,  setPrint] = useState(null)
  
 
    function tech(){
      setseats(prev =>
    prev.map(seat =>
      seat.seatNo === SeatNo
        ? { ...seat, booked: true }
        : seat
    )
  );
    }
    if(!New) {
      throw new Error('NO Movie TOday')
    }
  
    function Name(MovieName) {
        setMoviedetails(MovieName)
        
    }
   function Seating(item) {
    setSeatNo(item)
   }

   function BookingDetails(data){
    setBookingData((prev)=>[...prev , data])
   
   }
function PrintData(data){
    setPrint(data)
    
}
  
  return (
    <>
     <SystemContext value={{Name ,  Moviedetails ,  New ,  Seating ,  SeatNo ,  setBookingData ,  BookingDetails  ,  setseats ,  seats  ,  tech ,  BookingData ,  PrintData ,  Print}}>
        {children}
        </SystemContext> 
    </>
  )
}
export default ContextAPI;