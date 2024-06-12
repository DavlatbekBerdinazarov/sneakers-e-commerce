import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const thumbImages = [
    { id: 1, image: "/images/image-product-1.jpg" },
    { id: 2, image: "/images/image-product-2.jpg" },
    { id: 3, image: "/images/image-product-3.jpg" },
    { id: 4, image: "/images/image-product-4.jpg" },
  ];

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "445px",
          width: "445px",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {thumbImages.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              style={{ borderRadius: "15px" }}
              className="w-100 h-100"
              src={img.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={23}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="d-flex justify-content-between"
        style={{ height: "88px", width: "445px", marginTop: "20px"}}
      >
        {thumbImages.map((img) => (
          <SwiperSlide
            style={{ height: "88px", width: "88px"}}
            key={img.id}
            className="thumb-slide"
          >
            <img
              style={{ borderRadius: "7px" }}
              className="w-100 h-100"
              src={img.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .thumb-slide img {
            opacity: 1;
            transition: opacity 0.3s;
          }
          .thumb-slide.swiper-slide-thumb-active img {
            opacity: 0.5;
          }
        `}
      </style>
    </div>
  );
}
