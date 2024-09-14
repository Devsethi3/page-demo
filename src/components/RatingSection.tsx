import React from 'react';
import { Star, CheckCircle, Key, MessageSquare, Map, Tag, SprayCan } from 'lucide-react';

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
}

interface ReviewSectionProps {
  rating?: Rating;
  totalReviews?: number;
  reviews?: Review[];
}

const RatingItem: React.FC<{ label: string; value: number; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="flex flex-col items-center p-2">
    {icon}
    <div className="text-sm font-semibold">{value.toFixed(1)}</div>
    <div className="text-xs text-gray-500">{label}</div>
  </div>
);

const OverallRating: React.FC<{ rating: number; totalReviews: number }> = ({ rating, totalReviews }) => (
  <div className="flex items-center mb-4">
    <Star className="w-5 h-5 text-black mr-1" />
    <span className="font-bold text-lg">{rating.toFixed(2)}</span>
    <span className="mx-1">·</span>
    <span className="text-gray-700">{totalReviews} reviews</span>
  </div>
);

const RatingBreakdown: React.FC<{ rating: Rating }> = ({ rating }) => (
  <div className="grid grid-cols-3 gap-4 mb-6">
    <RatingItem label="Cleanliness" value={rating.cleanliness} icon={<SprayCan className="w-5 h-5" />} />
    <RatingItem label="Accuracy" value={rating.accuracy} icon={<CheckCircle className="w-5 h-5" />} />
    <RatingItem label="Check-in" value={rating.checkIn} icon={<Key className="w-5 h-5" />} />
    <RatingItem label="Communication" value={rating.communication} icon={<MessageSquare className="w-5 h-5" />} />
    <RatingItem label="Location" value={rating.location} icon={<Map className="w-5 h-5" />} />
    <RatingItem label="Value" value={rating.value} icon={<Tag className="w-5 h-5" />} />
  </div>
);

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
      <div>
        <div className="font-semibold">{review.author}</div>
        <div className="text-sm text-gray-500">{review.location}</div>
      </div>
    </div>
    <div className="flex items-center text-sm text-gray-500 mb-2">
      <Star className="w-4 h-4 text-black mr-1" />
      <span className="mr-2">5</span>
      <span className="mr-2">·</span>
      <span className="mr-2">{review.date}</span>
      <span>·</span>
      <span className="ml-2">{review.type}</span>
    </div>
    <p className="text-sm">{review.content}</p>
    <button className="text-sm font-semibold mt-2">Show more</button>
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
    value: 4.8
  },
  totalReviews = 279,
  reviews = [
    {
      author: "Mary",
      location: "Cave Creek, Arizona",
      date: "1 week ago",
      type: "Group trip",
      content: "This place was a great location. The view from the deck is amazing. It was hard to decide between the hot tub or a fire in the fire pit at night. So you might just have to do both! The..."
    },
    {
      author: "Susan",
      location: "Vancouver, Washington",
      date: "2 weeks ago",
      type: "Stayed with a pet",
      content: "Wonderful! Our second time in this house. Already booking for next year!"
    }
  ]
}) => (
  <div className="max-w-2xl mx-auto p-6">
    <OverallRating rating={rating.overall} totalReviews={totalReviews} />
    <RatingBreakdown rating={rating} />
    <div>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  </div>
);

export default ReviewSection;