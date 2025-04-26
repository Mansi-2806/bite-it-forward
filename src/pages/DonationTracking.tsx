
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageCheck, Package, Truck, Award, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DonationTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [email, setEmail] = useState("");
  const [showTrackingResult, setShowTrackingResult] = useState(false);
  const { toast } = useToast();

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally validate against a backend API
    setShowTrackingResult(true);
    toast({
      title: "Donation found!",
      description: "We've found your donation details.",
    });
  };

  // Mock donation data for demonstration
  const donationData = {
    id: "SB-2023-0472",
    status: "Delivered",
    type: "Cooked Food & Groceries",
    quantity: "Meals for 15 people, 3 boxes of groceries",
    donationDate: "April 24, 2025",
    pickupTime: "10:30 AM",
    deliveryTime: "11:45 AM",
    donor: "Green Leaf Restaurant",
    recipient: "Hope Community Food Bank",
    impact: "Helped feed 15 people",
    rewardPoints: 150,
    milestones: [
      { status: "Donation Registered", time: "April 24, 2025, 8:15 AM", completed: true },
      { status: "Pickup Scheduled", time: "April 24, 2025, 8:20 AM", completed: true },
      { status: "Driver Assigned", time: "April 24, 2025, 9:30 AM", completed: true },
      { status: "Out for Pickup", time: "April 24, 2025, 10:15 AM", completed: true },
      { status: "Picked Up", time: "April 24, 2025, 10:35 AM", completed: true },
      { status: "In Transit", time: "April 24, 2025, 11:00 AM", completed: true },
      { status: "Delivered", time: "April 24, 2025, 11:45 AM", completed: true },
      { status: "Impact Recorded", time: "April 24, 2025, 12:00 PM", completed: true }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-sharebite-dark">Track Your Donation</h1>
          <p className="mt-2 text-gray-600">Follow the journey of your food donation and see your impact</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Your Tracking Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTrackingSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="trackingId">Tracking ID</Label>
                <Input
                  id="trackingId"
                  placeholder="e.g., SB-2023-0472"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="The email you used when donating"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-sharebite-red hover:bg-sharebite-red/90"
              >
                Track Donation
              </Button>
            </form>
          </CardContent>
        </Card>

        {showTrackingResult && (
          <div className="space-y-8">
            <Card>
              <CardHeader className="bg-green-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <PackageCheck className="w-5 h-5 mr-2 text-green-600" />
                    Donation Status: <span className="ml-2 text-green-600">{donationData.status}</span>
                  </CardTitle>
                  <span className="text-sm text-gray-500">ID: {donationData.id}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Donation Details</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Package className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Type:</span>
                        <span className="font-medium">{donationData.type}</span>
                      </li>
                      <li className="flex items-center">
                        <Package className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Quantity:</span>
                        <span className="font-medium">{donationData.quantity}</span>
                      </li>
                      <li className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Donor:</span>
                        <span className="font-medium">{donationData.donor}</span>
                      </li>
                      <li className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Recipient:</span>
                        <span className="font-medium">{donationData.recipient}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Delivery Information</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Truck className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Donated:</span>
                        <span className="font-medium">{donationData.donationDate}</span>
                      </li>
                      <li className="flex items-center">
                        <Truck className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Pickup:</span>
                        <span className="font-medium">{donationData.pickupTime}</span>
                      </li>
                      <li className="flex items-center">
                        <Truck className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Delivery:</span>
                        <span className="font-medium">{donationData.deliveryTime}</span>
                      </li>
                      <li className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-sharebite-red" />
                        <span className="text-gray-600 w-24">Impact:</span>
                        <span className="font-medium">{donationData.impact}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="py-6">
              <h3 className="text-xl font-bold mb-4">Donation Journey</h3>
              <ol className="relative border-l border-gray-200 ml-3">
                {donationData.milestones.map((milestone, index) => (
                  <li className="mb-6 ml-6" key={index}>
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-8 ring-white">
                      {milestone.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      )}
                    </span>
                    <h4 className="flex items-center text-lg font-semibold text-gray-900">
                      {milestone.status}
                    </h4>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      {milestone.time}
                    </time>
                  </li>
                ))}
              </ol>
            </div>

            <Card className="bg-sharebite-beige border-none">
              <CardContent className="pt-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <Award className="w-8 h-8 text-sharebite-red mr-3" />
                  <div>
                    <h3 className="font-bold text-xl">Rewards Earned</h3>
                    <p className="text-gray-700">
                      You've earned <span className="font-semibold text-sharebite-red">{donationData.rewardPoints} points</span> for this donation!
                    </p>
                  </div>
                </div>
                <Button className="bg-sharebite-red hover:bg-sharebite-red/90">
                  View Rewards
                </Button>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Want to make another difference in your community?
              </p>
              <Button asChild className="bg-sharebite-red hover:bg-sharebite-red/90">
                <a href="/donate">Donate Again</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationTracking;
