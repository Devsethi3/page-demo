import { useState } from "react";
import { addMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

const CalendarPopover = () => {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addMonths(new Date(), 1),
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSelect = (range: DateRange | undefined) => {
    if (range) {
      setDate(range);
    } else {
      setDate({ from: undefined, to: undefined });
    }
  };

  return (
    <div>
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">Check availability</Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 sm:w-auto" align="start">
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b">
            <div className="flex flex-col mb-2 sm:mb-0">
              <h3 className="text-xl font-semibold">Select dates</h3>
              <p className="text-sm text-gray-500">
                Add your travel dates
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
    </div>
  );
};

export default CalendarPopover;
