'use client'
import Data from "./Data/page.jsx";
import {SystemContext} from "./ContextAPI.jsx";
import { useContext } from "react";
import Link from "next/link.js";
const Home = () => {
  const {New} = useContext(SystemContext)
 

  
  
  return (
    <div className="bg-white pt-24">
      <section className="relative mx-5 mt-5 rounded-3xl overflow-hidden h-[500px] flex items-center justify-center text-center">
        <img
          src={New[0].img}
          alt="Hero banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Find Your Next Adventure
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Pick a movie. Choose your seat. Make it an experience.
          </p>
          <Link  href='/Seats' className="bg-white w-[200px] text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-black hover:text-white transition-colors">
            Book Your Seat →
          </Link>
        </div>
      </section>

     
    </div>
  );
};

export default Home;