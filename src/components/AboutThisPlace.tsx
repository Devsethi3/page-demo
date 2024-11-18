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
              This nestled
              Historical, shopping,
            .
              <p className="font-semibold mt-4">The space</p>{" "}
              <p>
                This Pacific
                 away local beach.
                  crashing,
              </p>
              <p className="mt-4">
                Three of the
                beautiful. Snuggling the
                gazing through spacious that an inspiring
                panoramic
                the majestic of
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
