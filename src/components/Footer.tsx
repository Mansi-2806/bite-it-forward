
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import ShareBiteLogo from "./ShareBiteLogo";

const Footer = () => {
  return (
    <footer className="bg-sharebite-dark text-white">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <ShareBiteLogo className="h-12 w-auto" />
              <div className="ml-3">
                <h1 className="text-xl font-bold">ShareBite</h1>
                <p className="text-xs text-gray-400">"Every bite counts—pass it on."</p>
              </div>
            </div>
            <p className="mt-4 text-sm">From Surplus to Support: Bridging Food and Need</p>
            <div className="mt-4 flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <h5 className="uppercase font-bold mb-4 text-center md:text-left">Quick Links</h5>
            <ul className="text-gray-400 text-center md:text-left">
              <li className="mb-2"><Link to="/" className="hover:text-white">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li className="mb-2"><Link to="/donate" className="hover:text-white">Donate Food</Link></li>
              <li className="mb-2"><Link to="/volunteer" className="hover:text-white">Volunteer</Link></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <h5 className="uppercase font-bold mb-4 text-center md:text-left">Contact Us</h5>
            <ul className="text-gray-400 text-center md:text-left">
              <li className="mb-2">123 Main Street</li>
              <li className="mb-2">New York, NY 10001</li>
              <li className="mb-2">info@sharebite.org</li>
              <li className="mb-2">(123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ShareBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
