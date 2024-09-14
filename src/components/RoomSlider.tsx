import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RoomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const images = [
    "https://a0.muscache.com/im/pictures/e775cff4-3517-4e9d-9024-809ae8dd2db7.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/6178d75c-c0a2-4fe7-b3a5-9f8e83e7db40.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebcec940-a09f-4c7d-83aa-45523e594e3e.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/7b25f632-680c-46ef-9305-ecfe21998b2d.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/e8613283-293e-4d3e-9049-dcb15def6525.jpg?im_w=720",
  ];

  return (
    <div className="relative">
      {/* Title and icons container */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <i className="fas fa-bed text-xl mr-2"></i> {/* Bed icon */}
          <h2 className="text-2xl font-bold">Where you'll sleep</h2>
          <i className="fas fa-map-marker-alt text-xl ml-2"></i> {/* Location icon */}
        </div>
        <div className="flex items-center">
          <button
            className="swiper-button-prev"
            onClick={() => swiperRef.current?.swiper.slidePrev()} // Use optional chaining
          >
            <i className="fas fa-chevron-left"></i> {/* Custom icon */}
          </button>
          <div className="swiper-pagination"></div>
          <button
            className="swiper-button-next"
            onClick={() => swiperRef.current?.swiper.slideNext()} // Use optional chaining
          >
            <i className="fas fa-chevron-right"></i> {/* Custom icon */}
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef} // Attach the ref to the Swiper component
        spaceBetween={30}
        slidesPerView={2} // Show 2 images at a time by default
        loop={true}
        draggable={true}
        breakpoints={{
          // 640px or smaller: Show 1 image at a time
          640: {
            slidesPerView: 1,
          },
          // 768px or larger: Show 2 images at a time
          768: {
            slidesPerView: 2,
          },
        }}
        onSlideChange={(swiper) =>
          setCurrentSlide((swiper.realIndex % images.length) + 1)
        }
        modules={[Pagination, Navigation]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Room Slide ${index + 1}`}
              className="w-full h-[50vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Progress (e.g., 2/5) */}
      <div className="absolute z-50 bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
        {currentSlide}/{images.length}
      </div>
    </div>
  );
};

export default RoomSlider;

// Make the slider like the image i shared, with proper custom paginations buttons and icon styles in css