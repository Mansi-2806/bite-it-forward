
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  PackageCheck, 
  Award, 
  ArrowDown,
  Truck,
  FileText, 
  Package
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-sharebite-red text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              From Surplus to Support
            </h1>
            <p className="mt-4 text-xl md:text-2xl">
              Bridging Food and Need
            </p>
            <p className="mt-4 text-lg opacity-80">
              "Every bite counts—pass it on."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button size="lg" asChild className="bg-white text-sharebite-red hover:bg-sharebite-beige">
                <Link to="/donate">Donate Food</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-sharebite-red">
                <Link to="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full opacity-10 transform scale-110"></div>
              <img 
                src="/lovable-uploads/0665fe92-2215-45d0-a0ec-902784e1dfce.png" 
                alt="ShareBite Logo" 
                className="relative z-10 w-64 h-64 object-contain animate-bounce-slow"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
          <ArrowDown className="inline-block w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 bg-sharebite-beige bg-overlay-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sharebite-dark">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">Simple steps to make a difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sharebite-red/10 flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-sharebite-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Register Your Surplus</h3>
                <p className="text-gray-600">
                  Enter details about your surplus food - whether cooked or uncooked, groceries, vegetables or dairy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sharebite-red/10 flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-sharebite-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule Pickup</h3>
                <p className="text-gray-600">
                  Choose a convenient time for our delivery partners to collect your food donation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sharebite-red/10 flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-sharebite-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Track Your Impact</h3>
                <p className="text-gray-600">
                  Follow your donation journey and see the positive impact you're making in your community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sharebite-dark">Our Impact</h2>
            <p className="mt-4 text-lg text-gray-600">Together, we're making a difference</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-sharebite-red mb-2">5,000+</h3>
              <p className="text-gray-600">Meals Redistributed</p>
            </div>
            
            <div className="p-6">
              <h3 className="text-4xl font-bold text-sharebite-red mb-2">120+</h3>
              <p className="text-gray-600">Restaurant Partners</p>
            </div>
            
            <div className="p-6">
              <h3 className="text-4xl font-bold text-sharebite-red mb-2">50+</h3>
              <p className="text-gray-600">Food Banks Connected</p>
            </div>
            
            <div className="p-6">
              <h3 className="text-4xl font-bold text-sharebite-red mb-2">2,000+</h3>
              <p className="text-gray-600">Volunteer Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-gradient-to-b from-sharebite-beige/50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sharebite-dark">Why Choose ShareBite</h2>
            <p className="mt-4 text-lg text-gray-600">Features that make food sharing simple and rewarding</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sharebite-red flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nearby Food Banks</h3>
                <p className="text-gray-600">
                  Locate food banks in your area with our interactive map, making it easy to schedule nearby donations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sharebite-red flex items-center justify-center mb-4">
                  <PackageCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Donation Tracking</h3>
                <p className="text-gray-600">
                  Follow your donation journey from pickup to delivery, with real-time updates and notifications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sharebite-red flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Rewards & Certificates</h3>
                <p className="text-gray-600">
                  Earn rewards and certificates for your contributions, encouraging sustainable food sharing practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sharebite-green flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multiple Food Types</h3>
                <p className="text-gray-600">
                  Donate various types of surplus food - cooked meals, groceries, vegetables, dairy products, and more.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sharebite-green flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Choose pickup times that work for you with our intuitive scheduling system.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sharebite-green flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliable Partners</h3>
                <p className="text-gray-600">
                  Our network of delivery partners ensures your donation reaches those in need promptly and safely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-sharebite-red text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Make a Difference?</h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Join us in our mission to reduce food waste and help those in need. 
            Every donation counts, every bite matters.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-sharebite-red hover:bg-sharebite-beige">
              <Link to="/donate">Donate Food</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-sharebite-red">
              <Link to="/volunteer">Join as Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
