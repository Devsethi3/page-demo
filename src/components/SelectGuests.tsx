import { useState } from "react";
import { Users, Minus, Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const SelectGuests = () => {
  const [guests, setGuests] = useState<GuestCounts>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleGuestChange = (
    type: keyof GuestCounts,
    operation: "add" | "subtract"
  ) => {
    setGuests((prev) => ({
      ...prev,
      [type]:
        operation === "add" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const totalGuests = guests.adults + guests.children + guests.infants;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full mb-4 justify-between">
          <span>
            {totalGuests} guest{totalGuests !== 1 ? "s" : ""}
          </span>
          <Users className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full lg:max-w-[380px] max-w-[350px] p-4">
        {Object.entries(guests).map(([type, count]) => (
          <div key={type} className="flex justify-between items-center mb-4">
            <div>
              <h4 className="font-semibold capitalize">{type}</h4>
              <p className="text-sm text-muted-foreground">
                {type === "adults"
                  ? "Age 13+"
                  : type === "children"
                  ? "Ages 2-12"
                  : type === "infants"
                  ? "Under 2"
                  : "Bringing a service animal?"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  handleGuestChange(type as keyof GuestCounts, "subtract")
                }
                disabled={type === "adults" && count === 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{count}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  handleGuestChange(type as keyof GuestCounts, "add")
                }
                disabled={totalGuests >= 6 && type !== "infants"}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        <p className="text-sm text-muted-foreground mt-4">
          This place has a maximum of 6 guests, not including infants. Pets
          aren't allowed.
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectGuests;
