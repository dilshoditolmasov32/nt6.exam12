import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swipper.css";
import "../../pages/home/Home.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import people from "../../assets/images/people.svg";
import wrapper1 from "../../assets/images/wrapper1.jpg";
import wrapper3 from "../../assets/images/wrapper3.jpg";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={wrapper1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wrapper3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/440/12/60/nature-hd-for-pc-download-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/101/380/61/cat-animals-bokeh-cute-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/611/154/459/widescreen-high-resolution-nature-hd-1920x1080-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
