import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import { Navigation } from "swiper/modules"; // Import specific modules
import "./Carousel.css"; // Custom styles

const Carousel = ({ images }) => {
  return (
    <div className="image-slider-container">
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        navigation={true} // Enable navigation buttons
        modules={[Navigation]} // Add Navigation module
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {/* Map through the images array and render SwiperSlide */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="image-slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
