'use client'
import { useState } from "react";
import { FiFilm, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleBook = () => {
    setOpen(false);
    router.push("/Seats");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg sm:text-xl font-extrabold tracking-tight"
        >
          <FiFilm className="text-2xl text-blue-600" />
          <span className="text-blue-600">SeatCin</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">
          <Link href="/" className="hover:text-black">
            Movies
          </Link>
          <Link href="/Bookings" className="hover:text-black">
            Your Bookings
          </Link>
        </div>

        {/* Desktop button */}
        <button
          onClick={handleBook}
          className="hidden md:block bg-black text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Book Now!
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 text-2xl text-gray-800"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 sm:px-6 pb-5 pt-2 border-t border-gray-100 font-medium text-gray-800">
          <Link href="/" onClick={() => setOpen(false)} className="py-2 hover:text-black">
            Movies
          </Link>
          <Link href="/Bookings" onClick={() => setOpen(false)} className="py-2 hover:text-black">
            Your Bookings
          </Link>
          <button
            onClick={handleBook}
            className="w-full bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors "
          >
            Book Now!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;