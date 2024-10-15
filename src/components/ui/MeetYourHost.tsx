import * as React from "react";
import { BiGhost } from "react-icons/bi";
import { Button } from "./button";
import { MdWork } from "react-icons/md";
import {
  PiGlobeHemisphereEastBold,
  PiSuitcaseSimpleBold,
} from "react-icons/pi";
import { ChevronRight } from "lucide-react";

const MeetYourHost = () => {
  return (
    <div className="container mx-auto px-4 pb-24 py-8">
      <h2 className="text-2xl font-semibold">Meet your Host</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-8">
        <div className="flex flex-col gap-7">
          <div className="shadow-xl rounded-xl border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-col">
                <img
                  src="https://a0.muscache.com/im/users/6377993/profile_pic/1368505671/original.jpg?im_w=240"
                  alt="host"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <h2 className="text-3xl font-bold">Albert</h2>
                <div className="flex items-center gap-1">
                  <BiGhost />
                  <p className="font-semibold">Superhost</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start flex-col gap-2 border-b border-gray-400 pb-4">
                  <h3 className="text-2xl font-extrabold">500</h3>
                  <p className="text-sm font-extrabold -mt-2">Validity</p>
                </div>
                <div className="flex items-start flex-col gap-2 border-b border-gray-400 pb-4">
                  <h3 className="text-2xl font-extrabold">4.8</h3>
                  <p className="text-sm font-extrabold -mt-2">Rating</p>
                </div>
                <div className="flex items-start flex-col gap-2 pb-4">
                  <h3 className="text-2xl font-extrabold">7</h3>
                  <p className="text-sm font-extrabold -mt-2">Years Hosting</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col gap-2">
            <div className="flex items-center gap-3">
              <PiSuitcaseSimpleBold size={22} />
              <p className="text-lg line-clamp-1 ml-2">
                My work: Rich's German motorwerks / owner
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PiGlobeHemisphereEastBold size={22} />
              <p className="text-lg">Lives in Eugene, Oregon</p>
            </div>
            <p className="mt-3">
              My Name is Richard Savicky. I live in Eugene, OR. I started Life
              is a Beach Vacation Rentals in 2002. I do...
            </p>
            <button className="text-lg underline font-semibold flex items-center gap-1">
              Show more <ChevronRight />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Richard is a Superhost</h2>
          <p className="mt-4">
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>
          <h2 className="text-xl mt-5 font-semibold">Host Details</h2>
          <p className="mt-3">
            Response rate: 100% <br /> Responds within an hour late
          </p>
          <Button className="my-8 text-lg" size="lg" variant="secondary">
            Message Host
          </Button>
          <div className="py-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <img src="/airbnb.svg" alt="airbnb logo" className="w-6 h-6" />
              <p className="text-sm">
                To protect your payment, never transfer money or communicate
                outside of the Airbnb website or app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetYourHost;

