'use client'
import { SystemContext } from "../ContextAPI.jsx";
import { useContext } from "react";
import { FiPrinter } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function AllBookings() {
  const { BookingData, PrintData } = useContext(SystemContext);

  const router = useRouter();

  return (
    <section className="min-h-screen bg-slate-100 px-3 sm:px-4 pt-24 pb-10">
      <div className="mx-auto w-full max-w-2xl">
        {/* Heading */}
        <div className="mb-6 sm:mb-8 flex items-end justify-between gap-3">
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-900">All Bookings</h2>
          <p className="shrink-0 text-xs sm:text-sm text-slate-500">
            {BookingData.length} tickets
          </p>
        </div>

        {BookingData.length === 0 ? (
          /* Empty state */
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <p className="mb-4 text-slate-500">You haven't booked any tickets yet.</p>
            <button
              onClick={() => router.push('/')}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Book Your Ticket Now
            </button>
          </div>
        ) : (
          /* Cards */
          <div className="space-y-4">
            {BookingData.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border-l-4 border-blue-600 bg-white p-4 sm:p-5 shadow-sm transition hover:shadow-md"
              >
                {/* Movie name and seat number */}
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 className="min-w-0 break-words font-serif text-xl sm:text-2xl text-slate-900">
                    {item.Moviename}
                  </h3>
                  <span className="shrink-0 rounded-full bg-blue-400/10 px-2.5 py-1 text-xs sm:px-3 sm:text-sm font-semibold text-blue-700">
                    Seat no: {item.SeatNo}
                  </span>
                </div>

                {/* Name and email */}
                <p className="mt-3 text-sm font-medium text-slate-700">{item.Name}</p>
                <p className="break-all text-sm text-slate-500">{item.Mail}</p>

                {/* Print button */}
                <div className="mt-4 flex sm:justify-end">
                  <button
                    onClick={() => {
                      PrintData(item);
                      router.push('/Slip');
                    }}
                    className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.98]"
                  >
                    <FiPrinter />
                    Print
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}