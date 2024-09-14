import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Bed } from "lucide-react";

interface Review {
  author: string;
  location: string;
  date: string;
  type: string;
  content: string;
  src: string; // Added src for author's profile picture
}

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef<any>(null); // Explicitly typing the ref

  const reviews: Review[] = [
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
  ];

  return (
    <div className="max-w-4xl py-6 border-t border-gray-200 pb-8 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Bed className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-semibold">Testimonials</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-sm font-medium">
            {currentSlide} / {reviews.length}
          </span>
          <button
            className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={16}
        slidesPerView="auto"
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        modules={[Navigation, Pagination]} // Include Pagination module
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="w-64 h-72 flex flex-col p-4 border rounded-lg shadow-md"
          >
            <ReviewItem review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => (
  <div className="flex flex-col h-full">
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
      <span className="mr-2">{review.date}</span>
      <span>·</span>
      <span className="ml-2">{review.type}</span>
    </div>
    <p className="text-sm sm:text-base flex-grow">{review.content}</p>
    <button className="text-sm font-semibold mt-2 sm:mt-3">Show more</button>
  </div>
);

export default TestimonialSlider;

// Start from here add the random unique data in each array and make this slider infinite true
