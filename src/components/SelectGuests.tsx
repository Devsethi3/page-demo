import { useState, useEffect, useRef } from "react";
import { Users, Minus, Plus } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const SelectGuests = () => {
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] =
    useState<boolean>(false);
  const [guests, setGuests] = useState<GuestCounts>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsGuestDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="mb-4 relative" ref={dropdownRef}>
        <Button
        variant="outline"
          onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
          className="w-full justify-between"
        >
          <span>
            {totalGuests} guest{totalGuests !== 1 ? "s" : ""}
          </span>
          <Users className="w-4 h-4" />
        </Button>
        {isGuestDropdownOpen && (
          <Card className="absolute top-full left-0 right-0 mt-2 z-10 animate-in fade-in-80 slide-in-from-top-1">
            <CardContent className="p-4">
              {Object.entries(guests).map(([type, count]) => (
                <div
                  key={type}
                  className="flex justify-between items-center mb-2"
                  onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
                >
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
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{count}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleGuestChange(type as keyof GuestCounts, "add")
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted-foreground mt-4">
                This place has a maximum of 6 guests, not including infants.
                Pets aren't allowed.
              </p>
              <Button
                className="mt-4 w-full"
                onClick={() => setIsGuestDropdownOpen(false)}
              >
                Close
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default SelectGuests;
