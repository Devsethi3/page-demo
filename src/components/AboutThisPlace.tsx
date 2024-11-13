import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { IoIosArrowForward } from "react-icons/io";
import { ScrollArea } from "./ui/scroll-area";

const AboutThisPlace = () => {
  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger>
            <p className="underline flex items-center gap-1 font-bold">
              Show More <IoIosArrowForward />
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="lg:text-2xl text-xl">
                About this space
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[500px]">
              This home nestled Newport
              Historical, shopping,
            .
              <p className="font-semibold mt-4">The space</p>{" "}
              <p>
                This cozy Pacific
                 away local beach. The hypnotic sounds
                 the crashing, salty, a
                otter poking of,
                observed beautiful.
              </p>
              <p className="mt-4">
                Three of the and
                beautiful. Snuggling the fireplace and
                gazing through spacious windows that offer you an inspiring
                panoramic of the luck
                the majestic pod of Gray Whales that live in this
                area.
              </p>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AboutThisPlace;
