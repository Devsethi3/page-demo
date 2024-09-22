import { useState } from "react";
import { addMonths } from "date-fns";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

const HomeCalendar = () => {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addMonths(new Date(), 1),
  });

  const handleSelect = (range: DateRange | undefined) => {
    if (range) {
      setDate(range);
    } else {
      setDate({ from: undefined, to: undefined });
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b">
        <div className="flex flex-col mb-2 sm:mb-0">
          <h3 className="text-2xl font-semibold">Select dates</h3>
          <p className="text-lg text-gray-500">
            Add your travel dates for exact pricing
          </p>
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
      </div>
    </div>
  );
};

export default HomeCalendar;
