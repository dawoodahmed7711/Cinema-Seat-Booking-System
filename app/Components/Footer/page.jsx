import { FiFilm, FiMapPin, FiMail, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 px-10 py-14">
      <div className="grid gap-10 md:grid-cols-4 border-b border-gray-200 pb-10">
        <div>
          <div className="flex items-center gap-2 text-black text-xl font-extrabold mb-3">
            <FiFilm />
            <span>SeatCin</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Book your seat, grab some popcorn, and enjoy the movie the way
            it's meant to be watched.
          </p>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">Movies</a></li>
            <li><a href="#" className="hover:text-black">Bookings</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
            <li><a href="#" className="hover:text-black">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-3">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiMapPin /> San Francisco, CA
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> hello@seatcin.com
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} SeatCin. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-lg">
          <a href="#" className="hover:text-black"><FiInstagram /></a>
          <a href="#" className="hover:text-black"><FiFacebook /></a>
          <a href="#" className="hover:text-black"><FiTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;