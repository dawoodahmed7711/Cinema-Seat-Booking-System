'use client'
import { FiFilm } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
        <FiFilm className="text-2xl text-blue-600" />
        <span className="text-blue-600">SeatCin</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">
        <Link href="/" className="hover:text-black">
          Movies
        </Link>
        <Link href="/Bookings" className="hover:text-black">
          Your Bookings
        </Link>
      </div>

      <button onClick={()=>router.push('/Seats')} className="bg-black text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
        Book Now!
      </button>
    </nav>
  );
};

export default Navbar;