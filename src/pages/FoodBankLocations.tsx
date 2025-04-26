
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import FoodBankMap from "@/components/FoodBankMap";

const FoodBankLocations = () => {
  const [address, setAddress] = useState('');

  const handleSearch = () => {
    // This would be implemented with actual geocoding when connected to Mapbox
    console.log('Searching for:', address);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-sharebite-dark">Find Nearby Food Banks</h1>
          <p className="mt-2 text-gray-600">Locate food banks in your area to schedule a donation pickup</p>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-grow"
            />
            <Button 
              onClick={handleSearch}
              className="bg-sharebite-red hover:bg-sharebite-red/90 whitespace-nowrap"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Find Food Banks
            </Button>
          </div>
        </Card>

        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
          <FoodBankMap />
        </div>
      </div>
    </div>
  );
};

export default FoodBankLocations;
