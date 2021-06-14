import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./css/displayCards.css";
import hoodRats from "./assets/hoodRats.png";
import cfbjj from "./assets/cfbjj.png";
import babyBlankets from "./assets/babyBlankets.png";
import blubberBurger from "./assets/blubberBurger.png";
import tailWindSite from "./assets/tailWindSite.png";
import hoodRatsVid from "./assets/hoodRatsVid.mp4";
import cfbjjVid from "./assets/cfbjjVid.mp4";
import babyBlanketsVid from "./assets/babyBlanketsVid.mp4";
import blubberBurgerVid from "./assets/blubberBurgerVid.mp4";
import tailWindSiteVid from "./assets/tailWindSiteVid.mp4";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

function DisplayCards() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{ dynamicBullets: true, clickable: true }}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            poster={cfbjj}
            src={cfbjjVid}
            muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => (event.target.pause(), event.target.load())}
            loop
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            poster={hoodRats}
            src={hoodRatsVid}
            muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => (event.target.pause(), event.target.load())}
            loop
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            poster={babyBlankets}
            src={babyBlanketsVid}
            muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => (event.target.pause(), event.target.load())}
            loop
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            poster={blubberBurger}
            src={blubberBurgerVid}
            muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => (event.target.pause(), event.target.load())}
            loop
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            poster={tailWindSite}
            src={tailWindSiteVid}
            muted
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => (event.target.pause(), event.target.load())}
            loop
          ></video>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default DisplayCards;
