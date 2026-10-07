'use client'
import { useContext, useState } from "react";
import { SystemContext } from "../ContextAPI.jsx";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";
const inputClass =
  "w-full rounded-lg border border-blue-600 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20";



 function BookingForm() {
  const router = useRouter();
    const {New ,  SeatNo  ,  BookingDetails ,   tech} = useContext(SystemContext);
    const [FullName , setFullName] = useState("")
    const [Email , setEmail] = useState("")
    const [Moviename ,  setMoviename] = useState('')
    const [Seatno   ,  setSeatno] = useState('')
    const [Price , setPrice] = useState('500/')
   

    function Form(e){
     
       e.preventDefault();

       if(FullName === '' & Email === '' & Moviename === '' & Seatno === '' ) {
        return;
        }
       
        
         const Info = {
            Name : FullName,
            Mail : Email,
            Moviename:New[0].Moviename,
            SeatNo:SeatNo,
            Rs:Price,
         }
       
         BookingDetails(Info);
         tech();
       
         toast.success('Seat Booked ');
         
    }
   

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-20">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">

        <div className="bg-slate-50 px-10 pt-8">
          <div className="h-8 rounded-t-[50%] border-t-4 border-slate-300 bg-gradient-to-b from-slate-200 to-transparent shadow-[0_-8px_24px_rgba(179,32,47,0.18)]" />
          <p className="mt-1 text-center text-xs text-slate-400">Screen this way</p>

     
          
        </div>

        
        <div className="relative">
          <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-slate-100" />
          <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-slate-100" />
          <div className="border-t border-dashed border-slate-300" />
        </div>

        <div className="p-8">
          <h1 className="font-serif text-3xl text-slate-900">Book your seat</h1>
          <p className="mt-1 text-sm text-slate-500">
            Fill in your details and we will hold your ticket.
          </p>

          <form onSubmit={Form} className="mt-6 space-y-5">
          
            <div>
              <label htmlFor="name" className={labelClass}>
                Full name
              </label>
              <input
              onChange={(e)=>setFullName(e.target.value)}
                id="name"
                name="name"
                type="text"
                placeholder="Dawood Ahmed"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>

              <input
              onChange={(e)=>setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="movie" className={labelClass}>
                Movie name
              </label>
              <input
              onChange={(e)=>setMoviename(e.target.value)}
          
                id="movie"
                name="movie"
                type="text"
                placeholder={New[0].Moviename}
                readOnly
                className={inputClass}
              />
            </div>

             <div>
              <label htmlFor="movie" className={labelClass}>
                Price
              </label>
              <input
              onChange={(e)=>setPrice(e.target.value)}
          
                id="movie"
                name="movie"
                type="text"
                placeholder={500}
                readOnly
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="seat" className={labelClass}>
                Seat number
              </label>
              <input
                onChange={(e)=>setSeatno(e.target.value)}
                id="seat"
                name="seat"
                type="text"
                placeholder={SeatNo}
                readOnly
                className={inputClass}
              />
            </div>

           
            <button onClick={()=>{Form;
              router.push('/Bookings')
            }}
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-[#961a27] focus:outline-none focus:ring-2 focus:ring-[#b3202f]/40 active:scale-[0.98]"
            >
              
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default BookingForm;