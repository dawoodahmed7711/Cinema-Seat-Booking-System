'use client'
import { useContext, useState } from "react";
import { SystemContext } from "../ContextAPI.jsx";
import Link from "next/link.js";
import { useRouter } from "next/navigation";
export default function SeatingArrangement() {
const router = useRouter();
  const { New ,  Seating  , seats } = useContext(SystemContext);

  const allSeats = seats;

  // Har row ke seats alag alag nikaal lo
  const rowA = allSeats.filter((seat) => seat.seatNo[0] === "A");
  const rowB = allSeats.filter((seat) => seat.seatNo[0] === "B");
  const rowC = allSeats.filter((seat) => seat.seatNo[0] === "C");

  // Teeno rows ko ek array mein rakh do taake map laga sakein
  const allRows = [rowA, rowB, rowC];

  

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-15">
      {/* Screen */}
      <div className="w-full max-w-4xl relative">
        <svg viewBox="0 0 1000 160" className="w-full" aria-hidden="true">
          <path d="M0 150 Q500 -50 1000 150 Q500 10 0 150 Z" fill="black" />
        </svg>
        <span className="absolute left-1/2 top-[38%] -translate-x-1/2 text-sm text-black">
          Screen
        </span>
      </div>

      {/* Seats */}
      <div className="mt-10 flex flex-col gap-6">
        {allRows.map((row, index) => (
          <div key={index} className="flex gap-3 sm:gap-6 justify-center">
            {row.map((seat) => (
  <button
    href={seat.booked ? "#" : "/Form"}
    key={seat.seatNo}
    onClick={() => {
      if(seat.booked) {
        return;
      }
  Seating(seat.seatNo);
  router.push("/Form");
}}
    className={`w-9 h-9 sm:w-14 sm:h-12 rounded-lg text-xs sm:text-sm text-white transition pl-1 pt-1
      ${
        seat.booked
          ? "bg-red-500 cursor-not-allowed"
          : "bg-green-800 hover:bg-green-700"
      }
    `}
  >
    {seat.seatNo}
  </button>
))}
          </div>
        ))}
      </div>

    
      <div className="mt-16 w-full max-w-4xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-bold text-black">Available:</span>
          <span className="w-12 h-10 rounded-lg bg-green-800" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-black">Booked :</span>
          <span className="w-12 h-10 rounded-lg bg-red-500" />
        </div>
      </div>

    
    </div>
  );
}