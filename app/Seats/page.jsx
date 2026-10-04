'use client'
import { useContext } from "react";
import { SystemContext } from "../ContextAPI.jsx";
import { useRouter } from "next/navigation";

export default function SeatingArrangement() {
  const router = useRouter();
  const { Seating, seats } = useContext(SystemContext);

  // Split seats by row
  const rowA = seats.filter((seat) => seat.seatNo[0] === "A");
  const rowB = seats.filter((seat) => seat.seatNo[0] === "B");
  const rowC = seats.filter((seat) => seat.seatNo[0] === "C");
  const allRows = [rowA, rowB, rowC];

  const handleSeatClick = (seat) => {
    if (seat.booked) return;
    Seating(seat.seatNo);
    router.push("/Form");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-3 sm:px-6 pt-24 pb-10 sm:pb-16">
      {/* Screen */}
      <div className="w-full max-w-4xl relative">
        <svg viewBox="0 0 1000 160" className="w-full h-auto" aria-hidden="true">
          <path d="M0 150 Q500 -50 1000 150 Q500 10 0 150 Z" fill="black" />
        </svg>
        <span className="absolute left-1/2 top-[50%] -translate-x-1/2 text-xs sm:text-sm text-black">
          Screen
        </span>
      </div>

      {/* Seats */}
      <div className="mt-6 sm:mt-10 w-full max-w-4xl flex flex-col gap-3 sm:gap-6">
        {allRows.map((row, index) => (
          <div
            key={index}
            className="flex gap-1.5 sm:gap-3 md:gap-6 justify-center"
          >
            {row.map((seat) => (
              <button
                key={seat.seatNo}
                type="button"
                disabled={seat.booked}
                onClick={() => handleSeatClick(seat)}
                className={`flex-1 min-w-0 max-w-14 aspect-[7/6] rounded-md sm:rounded-lg text-[10px] sm:text-sm text-white transition flex items-center justify-center
                  ${
                    seat.booked
                      ? "bg-red-500 cursor-not-allowed"
                      : "bg-green-800 hover:bg-green-500"
                  }
                `}
              >
                {seat.seatNo}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-10 sm:mt-16 w-full max-w-4xl flex flex-row justify-between sm:justify-between items-center gap-4 text-sm sm:text-base">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-bold text-black">Available:</span>
          <span className="w-8 h-7 sm:w-12 sm:h-10 rounded-md sm:rounded-lg bg-green-800" />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-bold text-black">Booked:</span>
          <span className="w-8 h-7 sm:w-12 sm:h-10 rounded-md sm:rounded-lg bg-red-500" />
        </div>
      </div>
    </div>
  );
}