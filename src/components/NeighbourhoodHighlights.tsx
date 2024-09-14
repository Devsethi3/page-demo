import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader } from "./ui/drawer";
import { Button } from "./ui/button"; // Assuming you have a button component from ShadCN UI

const NeighbourhoodHighlights = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMore = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container py-8 pb-20 border-t border-gray-200">
      <h2 className="text-2xl font-semibold">Neighbourhood highlights</h2>
      <p className="my-3">
        The neighborhood consists mainly of long-term homeowners. I have the
        only vacation rentals in the neighborhood. Please respect my neighbors.
      </p>
      <button
        onClick={handleShowMore}
        className="text-lg underline font-semibold flex items-center gap-1 transition hover:text-gray-600"
        aria-expanded={isOpen}
        aria-controls="neighbourhood-drawer"
      >
        Show more <ChevronRight className="w-5 h-5" />
      </button>

      {/* Drawer Component */}
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerContent
          id="neighbourhood-drawer"
          className="lg:max-w-md container w-full"
        >
          <DrawerHeader>
            <h2 className="text-xl font-semibold text-center">
              Where you&apos;ll be
            </h2>
          </DrawerHeader>
          <div className="mt-4">
            <p className="font-semibold">Neighbourhood highlights</p>{" "}
            <p className="mt-3">
              The neighborhood consists mainly of long term Home owners. i have
              the only vacation rentals in the neighborhood. Please respect my
              neighbors.
            </p>
            <p className="font-semibold">Getting around</p>{" "}
            <p className="mt-3">
              Steps to the Beach are located one block South in the State park.
              And 1 block North at Georgies Beach side grill.
            </p>
          </div>

          {/* Drawer Footer */}
          <DrawerFooter className="mt-6 flex justify-end">
            <Button onClick={handleClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NeighbourhoodHighlights;
