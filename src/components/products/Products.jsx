import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { styled } from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// images
import trox30 from "../../assets/pic/products/366-300x300.jpg";
import xzn30 from "../../assets/pic/products/365-300x300.jpg";
import ribe30 from "../../assets/pic/products/364-300x300.jpg";
import hexagonal30 from "../../assets/pic/products/363-300x300.jpg";
import setmate1 from "../../assets/pic/products/378-300x300.jpg";
import setmate2 from "../../assets/pic/products/377-300x300.jpg";
import setmate3 from "../../assets/pic/products/376-300x300.jpg";
import negahdarandeMate from "../../assets/pic/products/375-300x300.jpg";

// styled-components
const DIV = styled.div`
    width: 250px;
    height: 300px;
    background: #ececec;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding-top: 20px;
    margin: 0 10px;
    img{
      width: 200px;
      height: 200px;
      border-radius: 10px;
        @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        padding: 10px;
      }
    }
    p{
      margin-top: 10px;
      font-size: 1.1rem;
      font-family: Arial, Helvetica, sans-serif;
    }
    @media (max-width: 768px) {
      width: 100%; 
      margin: 0;
      padding: 10px; 
    }
`;
const Products = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  return (
    <>
      <h1 style={{marginRight: "20px"}}>جدید ترین</h1>
      <div style={{border: "solid 1.5px #ff5100"}}></div>
        <Swiper 
            style={{margin: "20px"}}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={breakpoints}
        >
          <SwiperSlide>
            <DIV className="item">
              <img src={trox30} alt="product" />
              <p>مته Torx 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
          <SwiperSlide>
            <DIV className="item">
              <img src={xzn30} alt="product" />
              <p>مته XZN 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
          <SwiperSlide>
            <DIV className="item">
              <img src={ribe30} alt="product" />
              <p>مته Ribe 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
          <SwiperSlide>
            <DIV className="item">
              <img src={hexagonal30} alt="product" />
              <p>مته Hexagonal 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
          <SwiperSlide>
            <DIV className="item">
              <img src={setmate1} alt="product" />
              <p>مته Torx 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
          <SwiperSlide>
            <DIV className="item">
              <img src={setmate2} alt="product" />
              <p>مته XZN 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
          <SwiperSlide>
            <DIV className="item">
              <img src={setmate3} alt="product" />
              <p>مته Ribe 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
          <SwiperSlide>
            <DIV className="item">
              <img src={negahdarandeMate} alt="product" />
              <p>مته Hexagonal 30 در 10 میلی متری</p>
            </DIV>
          </SwiperSlide>
        </Swiper>
    </>
  );
};

export default Products;
