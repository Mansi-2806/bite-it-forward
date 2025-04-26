
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  MapPin, 
  Calendar, 
  Package, 
  FileText
} from "lucide-react";
import FoodDetailsForm from "@/components/FoodDetailsForm";
import SchedulePickup from "@/components/SchedulePickup";
import FoodBankMap from "@/components/FoodBankMap";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const [currentStep, setCurrentStep] = useState<string>("details");
  const [foodDetails, setFoodDetails] = useState({
    foodType: "",
    quantity: "",
    description: "",
    isCookedFood: false,
    expiryDate: ""
  });
  const { toast } = useToast();

  const handleSubmitDetails = (details: any) => {
    setFoodDetails(details);
    setCurrentStep("location");
    toast({
      title: "Food details saved",
      description: "You can now select a food bank for pickup",
    });
  };

  const handleSubmitLocation = () => {
    setCurrentStep("schedule");
    toast({
      title: "Location selected",
      description: "Please schedule a convenient pickup time",
    });
  };

  const handleSubmitSchedule = () => {
    toast({
      title: "Donation scheduled!",
      description: "Thank you for your contribution. You'll receive a confirmation email shortly.",
    });
    // In a real app, would submit the donation to a backend here
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-sharebite-dark">Donate Surplus Food</h1>
          <p className="mt-2 text-gray-600">Your surplus food can make a difference in someone's life</p>
        </div>

        <div className="mb-8">
          <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details" className="flex items-center gap-2">
                <FileText className="w-4 h-4" /> Food Details
              </TabsTrigger>
              <TabsTrigger value="location" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Select Food Bank
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Schedule Pickup
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="w-5 h-5 mr-2 text-sharebite-red" /> 
                    Tell us about your surplus food
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FoodDetailsForm onSubmit={handleSubmitDetails} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="location" className="mt-6">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-sharebite-red" /> 
                    Find a Food Bank Near You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Label htmlFor="address">Your Address</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="address"
                        placeholder="Enter your address"
                        className="flex-grow"
                      />
                      <Button variant="outline">
                        <MapPin className="w-4 h-4 mr-2" /> Use Current Location
                      </Button>
                    </div>
                  </div>
                  <div className="h-72 w-full mt-4 bg-gray-100 rounded-md overflow-hidden">
                    <FoodBankMap />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmitLocation} className="w-full bg-sharebite-red hover:bg-sharebite-red/90">
                    Continue to Schedule Pickup
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-sharebite-red" /> 
                    Schedule a Convenient Pickup Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SchedulePickup onComplete={handleSubmitSchedule} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-sharebite-beige p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2 text-sharebite-dark">What types of food can you donate?</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Unopened non-perishable food items (canned goods, pasta, rice)</li>
            <li>Fresh produce and vegetables</li>
            <li>Dairy products (before expiration date)</li>
            <li>Bakery items and bread</li>
            <li>Prepared meals (properly stored and handled)</li>
            <li>Surplus groceries from stores</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Note:</strong> All food donations should be edible, safe, and where applicable, within expiration dates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
