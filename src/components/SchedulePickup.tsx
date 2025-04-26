
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, CalendarCheck, Clock } from "lucide-react";

interface SchedulePickupProps {
  onComplete: () => void;
}

const SchedulePickup = ({ onComplete }: SchedulePickupProps) => {
  const [date, setDate] = useState<Date | undefined>();
  const [timeSlot, setTimeSlot] = useState<string>("");
  
  // Available time slots
  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  const handleComplete = () => {
    if (date && timeSlot) {
      onComplete();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-base">Select Pickup Date</Label>
        <div className="grid gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  // Disable dates in the past
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-base">Select Time Slot</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {timeSlots.map((slot) => (
            <Button
              key={slot}
              variant={timeSlot === slot ? "default" : "outline"}
              className={cn(
                "justify-start",
                timeSlot === slot ? "bg-sharebite-red hover:bg-sharebite-red/90" : ""
              )}
              onClick={() => setTimeSlot(slot)}
            >
              <Clock className="mr-2 h-4 w-4" />
              {slot}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-sharebite-beige rounded-md">
        <div className="flex items-start">
          <CalendarCheck className="w-5 h-5 mr-2 text-sharebite-red mt-0.5" />
          <div>
            <h4 className="font-medium">Selected Pickup Details</h4>
            {date && timeSlot ? (
              <p className="text-sm text-gray-700">
                Your donation will be picked up on {format(date, "EEEE, MMMM do, yyyy")} between {timeSlot}.
              </p>
            ) : (
              <p className="text-sm text-gray-500 italic">
                Please select both a date and time slot for pickup
              </p>
            )}
          </div>
        </div>
      </div>

      <Button
        onClick={handleComplete}
        disabled={!date || !timeSlot}
        className="w-full bg-sharebite-red hover:bg-sharebite-red/90"
      >
        Schedule Pickup
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Note: Our pickup team will call you 30 minutes before arrival. You'll receive an email confirmation after scheduling.
      </p>
    </div>
  );
};

export default SchedulePickup;
