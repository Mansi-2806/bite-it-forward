import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Heart, Users, MapPin } from "lucide-react";
import ShareBiteLogo from "./ShareBiteLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShareBiteLogo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-sharebite-dark hidden sm:block">ShareBite</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-sharebite-red">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <Link to="/donate" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-sharebite-red">
              <Heart className="h-4 w-4 mr-1" /> Donate Food
            </Link>
            <Link to="/food-banks" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-sharebite-red">
              <MapPin className="h-4 w-4 mr-1" /> Food Banks
            </Link>
            <Link to="/volunteer" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-sharebite-red">
              <Users className="h-4 w-4 mr-1" /> Volunteer
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sharebite-red">
              About Us
            </Link>
            <Link to="/track" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sharebite-red">
              Track Donation
            </Link>
            
            <Button variant="default" className="bg-sharebite-red hover:bg-sharebite-red/90">
              Get Started
            </Button>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-sharebite-red focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t">
            <Link to="/" 
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-sharebite-red hover:bg-sharebite-beige rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 mr-2" /> Home
            </Link>
            <Link to="/donate" 
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-sharebite-red hover:bg-sharebite-beige rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="h-5 w-5 mr-2" /> Donate Food
            </Link>
            <Link to="/food-banks" 
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-sharebite-red hover:bg-sharebite-beige rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin className="h-5 w-5 mr-2" /> Food Banks
            </Link>
            <Link to="/volunteer"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-sharebite-red hover:bg-sharebite-beige rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="h-5 w-5 mr-2" /> Volunteer
            </Link>
            <Link to="/about"
              className="px-3 py-2 text-base font-medium text-gray-700 hover:text-sharebite-red hover:bg-sharebite-beige rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link to="/track"
              className="px-3 py-2 text-base font-medium text-gray-700 hover:text-sharebite-red hover:bg-sharebite-beige rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Donation
            </Link>
            <div className="pt-2">
              <Button 
                variant="default" 
                className="w-full bg-sharebite-red hover:bg-sharebite-red/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
