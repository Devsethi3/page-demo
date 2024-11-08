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
              This home nestled in Newport
              Historical, shopping,
              all of this and waiting you.
              <p className="font-semibold mt-4">The space</p>{" "}
              <p>
                This sizable cozy gazes the Pacific is a
                stone throw away from local beach. The hypnotic sounds
                of the waves crashing, the salty, a
                otter poking head of, all
                observed beautiful.
              </p>
              <p className="mt-4">
                Three of the and the
                beautiful views of. Snuggling the fireplace and
                gazing through the spacious windows that offer you an inspiring
                panoramic view of the ocean and some luck you may a
                 of the majestic pod of Gray Whales that live in this
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
