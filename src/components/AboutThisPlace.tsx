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
              This home is nestled in Newport and is just minutes away from the
              Historical, bay front shopping and adored restaurants,
              all of this and more waiting for you to.
              <p className="font-semibold mt-4">The space</p>{" "}
              <p>
                This sizable cozy home gazes at the Pacific Ocean and is just a
                stone throw away from the local sandy beach. The hypnotic sounds
                of the waves crashing, the salty beach air, a curious sea
                otter poking his head out of the water, this and more all
                observed from beautiful.
              </p>
              <p className="mt-4">
                Three of the four bedrooms and the living quarters provide
                beautiful views of the ocean. Snuggling by the fireplace and
                gazing through the spacious windows that offer you an inspiring
                panoramic view of the ocean and with some luck you may get a
                glimpse of the majestic pod of Gray Whales that live in this
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
