import { Heart, Share, Star } from "lucide-react";
import { Button } from "./components/ui/button";
import "react-datepicker/dist/react-datepicker.css";
import { PiDoorOpen } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import AboutThisPlace from "./components/AboutThisPlace";
import MobileHero from "./components/MobileHero";
import DesktopHero from "./components/DesktopHero";
import { FaLocationDot } from "react-icons/fa6";
import CheckOutCard from "./components/CheckOutCard";
import CalendarPopover from "./components/CalendarPopover";
import RoomSlider from "./components/RoomSlider";

const AirbnbListingPage = () => {
  return (
    <div className="mx-auto py-8">
      <div className="flex container flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Ocean Front ~ Newport Whale Watch{" "}
        </h1>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="underline">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="underline">
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <div className="lg:block hidden">
        <DesktopHero />
      </div>
      <div className="lg:hidden mb-8 block">
        <MobileHero />
      </div>

      <div className="flex container flex-col h-[200vh] lg:flex-row justify-between mb-8 gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Entire home in Newport, Oregon, United States{" "}
          </h2>
          <p className="text-muted-foreground">
            10 guests · 4 bedrooms · 5 beds · 2 bathrooms
          </p>
          <div className="flex items-center font-bold mt-1 mb-6">
            <Star className="w-5 h-5 d mr-1" />
            <span className="font-semibold">4.89 · </span>
            <span className="ml-1 underline">299 reviews</span>
          </div>

          <div className="flex items-center border-t border-gray-200 pt-6 space-x-4 mb-8">
            <img
              src="https://a0.muscache.com/im/users/6377993/profile_pic/1368505671/original.jpg?im_w=240"
              alt="Host"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Hosted by AirBnb Superhost</h3>
              <p className="text-muted-foreground">
                Superhost · 5 years hosting
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 py-8">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <p className="opacity-75">
              Experience the beauty of the Washington coast in this charming
              A-frame cottage. Enjoy stunning ocean views, a private hot tub,
              and easy beach access. Perfect for a romantic getaway or small
              family vacation.
            </p>
          </div>
          <div className="border-t border-gray-200 py-8">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-10">
                <PiDoorOpen size={28} className="font-bold" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">Self check-in</h3>
                  <p className="-mt-1 text-sm opacity-80">
                    Check yourself in with the keypad.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <SlBadge size={28} className="font-bold" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">
                    Richard is a Superhost
                  </h3>
                  <p className="-mt-1 text-sm opacity-80">
                    Superhosts are experienced, highly rated Hosts.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <FaLocationDot size={28} className="font-bold" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">Great location</h3>
                  <p className="-mt-1 text-sm opacity-80">
                    Guests who stayed here in the past year loved the location.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-6">
            <p>
              This home is nestled in Newport and is just minutes away from the
              Historical Nye Beach, bay front shopping and adored restaurants,
              all of this and more waiting for you to experience.
            </p>

            <p className="mt-4 font-semibold">This Place</p>
            <p className="line-clamp-1 -mt-1 mb-8">
              This sizable cozy home gazes at the Pacific Ocean and is just a
              stone throw away from the local sandy beach. The hypnotic sounds
              of the ocean waves crashing, the salty beach air, a curious sea
              otter poking his head out of the water, this and more all observed
              from this beautiful four bedroom two bath home.
            </p>

            <AboutThisPlace />
          </div>
          <div className="border-t border-gray-200 py-6">
            <RoomSlider />
          </div>
        </div>

        <div className="lg:w-1/3 pb-24">
          <div className="sticky top-4">
            <CheckOutCard />
          </div>
        </div>
        <div className="fixed z-30 bottom-0 w-full min-h-[10vh] shadow-xl bg-white lg:hidden block py-5 border-t">
          <div className="flex items-center gap-5">
            <p>Add dates for prices</p>
            <CalendarPopover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirbnbListingPage;
