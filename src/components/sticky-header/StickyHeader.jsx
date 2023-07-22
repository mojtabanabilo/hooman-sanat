import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components";
import hoomanLogo from "../../assets/pic/logo-31-1-1.png";

// styled-components
const HEADER = styled.header`
    height: 80px;
    img{
        width: 60px;
        height: 60px;
    }
    li{
        list-style-type: none;
        cursor: pointer;
        transition: all .3s;
        font-size: 1.3rem;
        color: #000;
        &:hover{
            border-bottom: solid 1px #ff7b00;
            color: #ff7b00;
            transform: translateY(-2px);
            transition: all .3s;
        }
    }
`;

const StickyHeader = () => {
    AOS.init();
    return (
        <HEADER 
            data-aos="fade-down" 
            data-aos-delay="50" 
            className='sh-1 w-100 p-3 position-fixed top-0 bg-light d-flex justify-content-center align-items-center'
        >
            <img src={hoomanLogo} alt="hooman-sanat"/>
            <ul className='d-flex m-auto'>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-lg-5 fs-md-1'>خانه</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-lg-5 fs-md-1'>محصولات</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-lg-5 fs-md-1'>وبلاگ</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-lg-5 fs-md-1'>رضایت مشتریان</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-lg-5 fs-md-1'>تماس با ما</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-lg-5 fs-md-1'>درباره ما</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-lg-5 fs-md-1'>مشتریان</li>
            </ul>
        </HEADER>
    );
};

export default StickyHeader;