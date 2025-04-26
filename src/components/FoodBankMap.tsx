
import { useEffect } from "react";

// This is a placeholder for the actual map implementation
// In a real app, you would integrate Google Maps or a similar service
const FoodBankMap = () => {
  // These would be real food banks fetched from an API
  const foodBanks = [
    { id: 1, name: "Community Food Bank", address: "123 Main St", distance: "0.8 miles" },
    { id: 2, name: "Hope Pantry", address: "456 Oak Ave", distance: "1.2 miles" },
    { id: 3, name: "Neighborhood Assistance", address: "789 Pine Rd", distance: "1.5 miles" },
  ];

  useEffect(() => {
    // In a real implementation, this would initialize the map
    console.log("Map would initialize here with food banks:", foodBanks);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-sharebite-red text-white">
        <h3 className="text-lg font-medium">Food Banks Near You</h3>
      </div>

      {/* This is a placeholder for the actual map */}
      <div className="flex-grow bg-gray-300 flex items-center justify-center">
        <p className="text-gray-600">Interactive map would appear here</p>
      </div>

      {/* List of food banks */}
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
    </div>
  );
};

// Added to fix the reference error
const Button = ({ children, variant, size, className }: any) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default FoodBankMap;
