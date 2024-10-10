import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Bed } from "lucide-react";

type Swiper = /*unresolved*/ any;

const RoomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef<Swiper | null>(null); // Explicitly typing the 

  const images = [
    "https://a0.muscache.com/im/pictures/e775cff4-3517-4e9d-9024-809ae8dd2db7.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/6178d75c-c0a2-4fe7-b3a5-9f8e83e7db40.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebcec940-a09f-4c7d-83aa-45523e594e3e.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/7b25f632-680c-46ef-9305-ecfe21998b2d.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/e8613283-293e-4d3e-9049-dcb15def6525.jpg?im_w=720",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Bed className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-semibold">Where you'll sleep</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-sm font-medium">
            {currentSlide} / {images.length}
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
        // pagination={{ clickable: true }} // Enable pagination
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-64 h-72">
            <img
              src={image}
              alt={`Room Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoomSlider;
