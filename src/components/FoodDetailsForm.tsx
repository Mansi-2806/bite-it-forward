
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Switch } from "@/components/ui/switch";

interface FoodDetailsFormProps {
  onSubmit: (details: any) => void;
}

const FoodDetailsForm = ({ onSubmit }: FoodDetailsFormProps) => {
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [isCookedFood, setIsCookedFood] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      foodType,
      quantity,
      description,
      isCookedFood,
      expiryDate
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="foodType">Type of Food</Label>
        <Select value={foodType} onValueChange={setFoodType} required>
          <SelectTrigger id="foodType">
            <SelectValue placeholder="Select food category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cooked">Cooked Food</SelectItem>
            <SelectItem value="produce">Fresh Produce</SelectItem>
            <SelectItem value="groceries">Groceries</SelectItem>
            <SelectItem value="bakery">Bakery Items</SelectItem>
            <SelectItem value="dairy">Dairy Products</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Approximate Quantity</Label>
        <Input
          id="quantity"
          placeholder="e.g., 5 kg, 3 boxes, meals for 10 people"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Please describe the food in more detail"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="isCookedFood"
          checked={isCookedFood}
          onCheckedChange={setIsCookedFood}
        />
        <Label htmlFor="isCookedFood">This is cooked/prepared food</Label>
      </div>

      {isCookedFood && (
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Best Consumed Before</Label>
          <Input
            id="expiryDate"
            type="datetime-local"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required={isCookedFood}
          />
          <p className="text-sm text-gray-500">Please indicate when this food should be consumed by for best quality and safety</p>
        </div>
      )}

      <Button type="submit" className="w-full bg-sharebite-red hover:bg-sharebite-red/90 mt-4">
        Save and Continue
      </Button>
    </form>
  );
};

export default FoodDetailsForm;
