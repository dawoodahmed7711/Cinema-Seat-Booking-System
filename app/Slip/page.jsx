"use client";
import { useContext } from "react";
import { SystemContext } from "../ContextAPI.jsx";
import { FiFilm, FiPrinter } from "react-icons/fi";

// Shared classes so each row stays short
const rowClass = "flex items-start justify-between gap-4 py-2 sm:py-2.5 text-xs sm:text-sm";
const labelClass = "text-slate-500 shrink-0";
const valueClass = "font-medium text-slate-900 text-right break-words min-w-0";

// When printing: hide everything on the page (navbar, footer, etc.)
// and show only the element with id="print-slip"
const printStyles = `
@media print {
  body * { visibility: hidden; }
  #print-slip, #print-slip * { visibility: visible; }
  #print-slip {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 24rem;
  }
}
`;

export default function SlipPage() {
  const { Print } = useContext(SystemContext);
  const Today = new Date();
  const final = `${Today.getDate()} - ${Today.getMonth() + 1} - ${Today.getFullYear()}`;

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100 px-3 sm:px-4 pt-24 pb-10 print:min-h-0 print:bg-white print:p-0">
      <style>{printStyles}</style>

      {/* One wrapper keeps the slip and button the same width */}
      <div className="w-full max-w-sm">
        <div
          id="print-slip"
          className="w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-xl print:shadow-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-blue-700 px-4 py-3 sm:px-6 sm:py-4 text-white [print-color-adjust:exact] [-webkit-print-color-adjust:exact]">
            <div className="flex items-center gap-2">
              <FiFilm className="text-lg sm:text-xl" />
              <span className="text-base sm:text-lg font-semibold">SeatCin</span>
            </div>
            <span className="text-xs sm:text-sm text-white/80">Booking slip</span>
          </div>

          <div className="p-4 sm:p-6">
            {/* Movie and status */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="font-serif text-xl sm:text-2xl text-slate-900 break-words">
                  {Print.Moviename}
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">Action , Thrill</p>
              </div>
              <span className="shrink-0 rounded-full bg-green-100 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs font-semibold text-green-700">
                Confirmed
              </span>
            </div>

            {/* Details */}
            <div className="mt-4 sm:mt-5 divide-y divide-slate-100 border-t border-slate-200">
              <div className={rowClass}>
                <span className={labelClass}>Booking ID</span>
                <span className={valueClass}>BK-S{Print.SeatNo}</span>
              </div>
              <div className={rowClass}>
                <span className={labelClass}>Date</span>
                <span className={valueClass}>{final}</span>
              </div>
              <div className={rowClass}>
                <span className={labelClass}>Show time</span>
                <span className={valueClass}>7:30 PM</span>
              </div>
              <div className={rowClass}>
                <span className={labelClass}>Hall</span>
                <span className={valueClass}>Hall : 1</span>
              </div>
              <div className={rowClass}>
                <span className={labelClass}>Customer</span>
                <span className={valueClass}>{Print.Name}</span>
              </div>
              <div className={rowClass}>
                <span className={labelClass}>Email</span>
                <span className={`${valueClass} break-all`}>{Print.Mail}</span>
              </div>
            </div>
          </div>

          {/* Dashed tear-off line with notches */}
          <div className="relative border-t-2 border-dashed border-slate-300">
            <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-slate-100 print:bg-white" />
            <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-slate-100 print:bg-white" />
          </div>

          <div className="p-4 sm:p-6">
            {/* Seats */}
            <div className={rowClass}>
              <span className={labelClass}>Seats</span>
              <span className="rounded-md bg-slate-900 px-2.5 py-1 text-xs sm:px-3 sm:text-sm font-bold text-white break-words [print-color-adjust:exact] [-webkit-print-color-adjust:exact]">
                {Print.SeatNo}
              </span>
            </div>

            {/* Price */}
            <div className={rowClass}>
              <span className={labelClass}>Price per seat</span>
              <span className={valueClass}>Rs. {Print.Rs}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4 border-t border-slate-200 pt-3 sm:pt-4">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="text-lg sm:text-xl font-bold text-blue-500">
                Rs. {Print.Rs}
              </span>
            </div>

            <p className="mt-4 sm:mt-5 text-center text-[11px] sm:text-xs text-slate-400">
              Please arrive 15 minutes before the show.
            </p>
          </div>
        </div>

        {/* Print button (hidden when printing) */}
        <button
          onClick={() => window.print()}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-1 py-3 font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98] print:hidden"
        >
          <FiPrinter />
          Print slip
        </button>
      </div>
    </main>
  );
}