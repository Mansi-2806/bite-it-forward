import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const FoodBankMap = () => {
  const [apiKey, setApiKey] = useState("");
  const [isMapVisible, setIsMapVisible] = useState(false);
  const { toast } = useToast();

  const handleSubmitApiKey = () => {
    if (apiKey.trim()) {
      setIsMapVisible(true);
      toast({
        title: "API Key Saved",
        description: "Your Mapbox API key has been saved successfully.",
      });
    }
  };

  // These would be real food banks fetched from an API
  const foodBanks = [
    { id: 1, name: "Community Food Bank", address: "123 Main St", distance: "0.8 miles" },
    { id: 2, name: "Hope Pantry", address: "456 Oak Ave", distance: "1.2 miles" },
    { id: 3, name: "Neighborhood Assistance", address: "789 Pine Rd", distance: "1.5 miles" },
  ];

  return (
    <div className="h-full flex flex-col">
      {!isMapVisible ? (
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="mapbox-key">Enter your Mapbox API Key</Label>
              <div className="text-sm text-gray-500 mb-2">
                Get your API key from <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-sharebite-red hover:underline">Mapbox.com</a>
              </div>
              <Input
                id="mapbox-key"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="pk.eyJ1..."
                className="mb-2"
              />
            </div>
            <Button 
              onClick={handleSubmitApiKey}
              className="w-full bg-sharebite-red hover:bg-sharebite-red/90"
            >
              Load Map
            </Button>
          </div>
        </Card>
      ) : (
        <>
          <div className="p-4 bg-sharebite-red text-white">
            <h3 className="text-lg font-medium">Food Banks Near You</h3>
          </div>
          <div className="flex-grow bg-gray-300 flex items-center justify-center">
            {/* This would be replaced with actual Mapbox implementation */}
            <p className="text-gray-600">Interactive map would appear here using Mapbox</p>
          </div>
          <div className="border-t border-gray-200">
            {foodBanks.map((bank) => (
              <div key={bank.id} className="p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium">{bank.name}</h4>
                <p className="text-sm text-gray-600">{bank.address}</p>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{bank.distance}</span>
                  <Button variant="link" size="sm" className="h-auto p-0 text-sharebite-red">
                    Select
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FoodBankMap;
