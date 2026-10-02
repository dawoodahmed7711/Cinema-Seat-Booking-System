'use client'
import { SystemContext } from "../ContextAPI.jsx";
import { useContext } from "react";
import { FiPrinter } from "react-icons/fi";
import { useRouter } from "next/navigation";
export default function AllBookings() {
    const {BookingData ,  PrintData} = useContext(SystemContext)
    const router = useRouter();
  return (
    <section className="min-h-screen bg-slate-100 px-4 py-25">
      <div className="mx-auto max-w-2xl">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-3xl text-slate-900">All Bookings</h2>
          <p className="text-sm text-slate-500">{BookingData.length} tickets</p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {BookingData.map((item ,  index) => (
            <div
              key={index}
              className="rounded-xl border-l-4 border-[#b3202f] bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              {/* Movie name and seat number */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl text-slate-900">{item.Moviename}</h3>
                <span className="rounded-full bg-[#b3202f]/10 px-3 py-1 text-sm font-semibold text-[#b3202f]">
                  Seat no: {item.SeatNo}
                </span>
              </div>

              {/* Name and email */}
              <p className="mt-3 text-sm font-medium text-slate-700">{item.Name}</p>
              <p className="text-sm text-slate-500">{item.Mail}</p>



              <button onClick={()=>{PrintData(item);
                router.push('/Slip')
              }} className=" ml-140 flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.98]">
                <FiPrinter/>
                Print
              </button>
            </div>

          
          ))}
        </div>
      </div>
    </section>
  );
}