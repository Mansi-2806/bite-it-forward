
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, Truck, Package, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const { toast } = useToast();
  
  const handleVolunteerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "Thank you for volunteering. We'll contact you soon.",
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-sharebite-dark">Become a Volunteer</h1>
          <p className="mt-2 text-gray-600">Join our mission to reduce food waste and help those in need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-md">
            <CardHeader className="bg-sharebite-red text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Why Volunteer?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-sharebite-red/20 rounded-full flex items-center justify-center">
                    <span className="h-2 w-2 bg-sharebite-red rounded-full"></span>
                  </div>
                  <span>Make a direct impact on reducing food waste and hunger in your community</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-sharebite-red/20 rounded-full flex items-center justify-center">
                    <span className="h-2 w-2 bg-sharebite-red rounded-full"></span>
                  </div>
                  <span>Gain valuable experience in logistics, community service, and sustainability</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-sharebite-red/20 rounded-full flex items-center justify-center">
                    <span className="h-2 w-2 bg-sharebite-red rounded-full"></span>
                  </div>
                  <span>Connect with like-minded individuals passionate about making a difference</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-sharebite-red/20 rounded-full flex items-center justify-center">
                    <span className="h-2 w-2 bg-sharebite-red rounded-full"></span>
                  </div>
                  <span>Flexible schedule options to fit your availability</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 bg-sharebite-red/20 rounded-full flex items-center justify-center">
                    <span className="h-2 w-2 bg-sharebite-red rounded-full"></span>
                  </div>
                  <span>Earn certificates and recognition for your community service</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Apply to Volunteer</CardTitle>
              <CardDescription>
                Fill out the form below to join our volunteer team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">How would you like to help?</Label>
                  <Textarea 
                    id="interest" 
                    placeholder="Tell us about your interests and how you'd like to contribute..." 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="availability">Your Availability</Label>
                  <Textarea 
                    id="availability" 
                    placeholder="Let us know what days and times you're available to volunteer..." 
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-sharebite-red hover:bg-sharebite-red/90">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Volunteer Opportunities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-sharebite-red flex items-center justify-center mb-2">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Delivery Driver</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-gray-600">Help transport food donations from donors to food banks. Must have a valid driver's license.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-sharebite-red flex items-center justify-center mb-2">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Food Sorter</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-gray-600">Sort and organize donated food items at our distribution centers for efficient redistribution.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-sharebite-red flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Community Ambassador</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-gray-600">Represent ShareBite in the community, recruit restaurants and grocers as donors.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div className="bg-sharebite-beige rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-sharebite-red" />
          </div>
          <h3 className="text-xl font-bold mb-2">Volunteer Recognition Program</h3>
          <p className="max-w-lg mx-auto mb-6">
            We appreciate our volunteers! Our recognition program rewards your dedication with certificates, community service hours, and special events.
          </p>
          <Button className="bg-sharebite-red hover:bg-sharebite-red/90">
            View Recognition Program
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
