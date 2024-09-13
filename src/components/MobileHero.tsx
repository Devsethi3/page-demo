import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MobileHero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const images = [
    "https://a0.muscache.com/im/pictures/e775cff4-3517-4e9d-9024-809ae8dd2db7.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/6178d75c-c0a2-4fe7-b3a5-9f8e83e7db40.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebcec940-a09f-4c7d-83aa-45523e594e3e.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-18685311/original/7b25f632-680c-46ef-9305-ecfe21998b2d.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/e8613283-293e-4d3e-9049-dcb15def6525.jpg?im_w=720",
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        draggable={true}
        onSlideChange={(swiper) =>
          setCurrentSlide((swiper.realIndex % images.length) + 1)
        }
        modules={[Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[50vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Progress (e.g., 2/4) */}
      <div className="absolute z-50 bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
        {currentSlide}/{images.length}
      </div>
    </div>
  );
};

export default MobileHero;
