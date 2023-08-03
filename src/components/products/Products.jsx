import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styled } from 'styled-components';

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
const SLIDE_PRODUCT = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .section-items{
        width: 100%;
        height: 400px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border-top: solid #ff5100 2px;
        padding: 30px 10px 0 10px;
        .item{
            width: 250px;
            height: 300px;
            padding: 10px;
            background: #e0e0e0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            border-radius: 10px;
            box-shadow: 8px 8px 20px #979797;
            img{
                width: 200px;
                height: 200px;
                border-radius: 10px;
                margin-top: 10px;
            }
            p{
                text-align: center;
                margin: 10px 0 0 0;
            }
        }
    }
`;

const Products = () => {
    return (
        <SLIDE_PRODUCT>
            <h1>جدید ترین</h1>
            <div className='section-items'>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                >
                    <SwiperSlide style={{width:"800px"}}>
                    <div className="item">
                        <img src={trox30} alt="product"/>
                        <p>مته Torx  30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <img src={xzn30} alt="product"/>
                        <p>مته XZN  30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <img src={ribe30} alt="product"/>
                        <p>مته Ribe  30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <img src={hexagonal30} alt="product"/>
                        <p>مته Hexagonal 30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <img src={setmate1} alt="product"/>
                        <p>مته Torx  30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <img src={setmate2} alt="product"/>
                        <p>مته XZN  30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <img src={setmate3} alt="product"/>
                        <p>مته Ribe  30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item">
                        <img src={negahdarandeMate} alt="product"/>
                        <p>مته Hexagonal 30 در 10 میلی متری</p>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SLIDE_PRODUCT>
    );
};

export default Products;