import { useState } from "react";
import { format, addMonths } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import SelectGuests from "./SelectGuests";
import { Card, CardContent } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Calendar } from "./ui/calendar";
import CalendarPopover from "./CalendarPopover";

// Define the type for
interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

const CheckOutCard = () => {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addMonths(new Date(), 1),
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Handle date selection
  const handleSelect = (range: DateRange | undefined) => {
    if (range) {
      setDate(range);
    } else {
      setDate({ from: undefined, to: undefined });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Add dates for prices</span>
        </div>
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start mb-3 text-left font-normal",
                !date.from && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Select dates</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 sm:w-auto" align="start">
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b">
              <div className="flex flex-col mb-2 sm:mb-0">
                <h3 className="text-xl font-semibold">Select dates</h3>
                <p className="text-sm text-gray-500">
                  Add your travel dates for exact pricing
                </p>
              </div>
              <div className="flex lg:block hidden space-x-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1 p-4">
                <Calendar
                  mode="range"
                  defaultMonth={date.from}
                  selected={date}
                  // @ts-expect-error
                  onSelect={handleSelect}
                  numberOfMonths={1}
                  className="w-full"
                />
              </div>
              <div className="flex-1 p-4 border-t sm:border-t-0 sm:border-l">
                <Calendar
                  mode="range"
                  defaultMonth={addMonths(date.from || new Date(), 1)}
                  selected={date}
                  // @ts-expect-error
                  onSelect={handleSelect}
                  numberOfMonths={1}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-end items-center p-4 border-t">
              <Button
                variant="outline"
                className="mr-2"
                onClick={() => setDate({ from: undefined, to: undefined })}
              >
                Clear dates
              </Button>
              <Button onClick={() => setIsCalendarOpen(false)}>Close</Button>
            </div>
          </PopoverContent>
        </Popover>
        <SelectGuests />
        <CalendarPopover />
      </CardContent>
    </Card>
  );
};

export default CheckOutCard;
