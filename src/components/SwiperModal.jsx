import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IoMdClose } from "react-icons/io";

export default function SwiperModal({ handleClose }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const thumbImages = [
    { id: 1, image: "/images/image-product-1.jpg" },
    { id: 2, image: "/images/image-product-2.jpg" },
    { id: 3, image: "/images/image-product-3.jpg" },
    { id: 4, image: "/images/image-product-4.jpg" },
  ];

  return (
    <div>
      <IoMdClose style={{ top:'-20px', right: '70px', position: 'absolute', cursor:'pointer' }} className="fs-2 text-warning" onClick={handleClose}/>
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
            className=" rounded"
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
    </div>
  );
}
