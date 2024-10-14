import React from "react";
import {
  Star,
  CheckCircle,
  Key,
  MessageSquare,
  Map,
  Tag,
  SprayCan,
} from "lucide-react";
import { FaStar } from "react-icons/fa6";
import TestimonialSlider from "./TestimonialSlider";

interface Rating {
  overall: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

interface Review {
  author: string;
  location: string;
  date: string;
  type: string;
  content: string;
  src: string; // Added src for author's 
}

interface ReviewSectionProps {
  rating?: Rating;
  totalReviews?: number;
  reviews?: Review[];
}

const RatingItem: React.FC<{
  label: string;
  value: number;
  icon: React.ReactNode;
}> = ({ label, value, icon }) => (
  <div className="flex flex-col items-center p-2 sm:p-4">
    {icon}
    <div className="text-sm font-semibold">{value.toFixed(1)}</div>
    <div className="text-base opacity-80">{label}</div>
  </div>
);

const OverallRating: React.FC<{ rating: number; totalReviews: number }> = ({
  rating,
  totalReviews,
}) => (
  <div className="flex items-center mb-4 sm:mb-6">
    <div className="flex items-center border-r pr-4 mr-4">
      <FaStar className="w-8 h-8 text-yellow-500" />
      <span className="font-bold text-3xl sm:text-4xl">
        {rating.toFixed(2)}
      </span>
    </div>
    <span className="mx-2 text-lg sm:text-xl">·</span>
    <div className="flex flex-col">
      <span className="font-bold opacity-80 text-lg sm:text-xl">
        {totalReviews} reviews
      </span>
      <span className="text-sm text-gray-600">Overall Rating</span>
    </div>
  </div>
);

const RatingBreakdown: React.FC<{ rating: Rating }> = ({ rating }) => (
  <div className="flex flex-wrap items-center gap-12 mb-10 sm:mb-12">
    <RatingItem
      label="Cleanliness"
      value={rating.cleanliness}
      icon={<SprayCan className="w-8 h-8 sm:w-10 sm:h-10" />}
    />
    <RatingItem
      label="Accuracy"
      value={rating.accuracy}
      icon={<CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />}
    />
    <RatingItem
      label="Check-in"
      value={rating.checkIn}
      icon={<Key className="w-8 h-8 sm:w-10 sm:h-10" />}
    />
    <RatingItem
      label="Communication"
      value={rating.communication}
      icon={<MessageSquare className="w-8 h-8 sm:w-10 sm:h-10" />}
    />
    <RatingItem
      label="Location"
      value={rating.location}
      icon={<Map className="w-8 h-8 sm:w-10 sm:h-10" />}
    />
    <RatingItem
      label="Value"
      value={rating.value}
      icon={<Tag className="w-8 h-8 sm:w-10 sm:h-10" />}
    />
  </div>
);

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => (
  <div className="mb-6 sm:mb-8">
    <div className="flex items-center mb-2 sm:mb-3">
      <img
        src={review.src}
        alt={`${review.author}'s profile`}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
      />
      <div>
        <div className="font-semibold">{review.author}</div>
        <div className="text-sm text-gray-500">{review.location}</div>
      </div>
    </div>
    <div className="flex items-center text-sm text-gray-500 mb-2 sm:mb-3">
      <Star className="w-4 h-4 text-black mr-1" />
      <span className="mr-2">5</span>
      <span className="mr-2">·</span>
      <span className="mr-2">{review.date}</span>
      <span>·</span>
      <span className="ml-2">{review.type}</span>
    </div>
    <p className="text-sm sm:text-base">{review.content}</p>
    <button className="text-sm font-semibold mt-2 sm:mt-3">Show more</button>
  </div>
);

const ReviewSection: React.FC<ReviewSectionProps> = ({
  rating = {
    overall: 4.89,
    cleanliness: 4.7,
    accuracy: 4.9,
    checkIn: 4.9,
    communication: 4.8,
    location: 5.0,
    value: 4.8,
  },
  totalReviews = 279,
  reviews = [
    {
      author: "Mary",
      location: "Cave Creek, Arizona",
      date: "1 week ago",
      type: "Group trip",
      src: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "This place was a great location. The view from the deck is amazing. It was hard to decide between the hot tub or a fire in the fire pit at night. So you might just have to do both! The...",
    },
    {
      author: "Susan",
      location: "Vancouver, Washington",
      date: "2 weeks ago",
      type: "Stayed with a pet",
      src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis blanditiis quod doloremque eos sequi porro ratione quam fugiat, autem architecto quos et saepe aperiam nesciunt quo reiciendis quaerat.",
    },
    {
      author: "Harry",
      location: "Vancouver, Washington",
      date: "2 weeks ago",
      type: "Stayed with a pet",
      src: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis blanditiis quod doloremque eos sequi porro ratione quam fugiat, autem architecto quos et saepe aperiam nesciunt quo reiciendis quaerat.",
    },
    {
      author: "Sofia",
      location: "Vancouver, Washington",
      date: "2 weeks ago",
      type: "Stayed with a pet",
      src: "https://images.pexels.com/photos/2446655/pexels-photo-2446655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis blanditiis quod doloremque eos sequi porro ratione quam fugiat, autem architecto quos et saepe aperiam nesciunt quo reiciendis quaerat.",
    },
    {
      author: "John",
      location: "Vancouver, Washington",
      date: "2 weeks ago",
      type: "Stayed with a pet",
      src: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis blanditiis quod doloremque eos sequi porro ratione quam fugiat, autem architecto quos et saepe aperiam nesciunt quo reiciendis quaerat.",
    },
  ],
}) => (
  <div className="container mx-auto py-6 border-t border-gray-200 px-4 sm:px-6 md:px-8">
    <OverallRating rating={rating.overall} totalReviews={totalReviews} />
    <div className="hidden lg:block">
      <RatingBreakdown rating={rating} />
    </div>
    <div className="hidden lg:block">
      <div className="grid grid-cols-2 gap-5">
        {reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>
    </div>

    <div className="lg:hidden block">
      <TestimonialSlider />
    </div>
  </div>
);

export default ReviewSection;
