import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components";

// styled-components
const HEADER = styled.header`
    height: 80px;
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
            <ul className='d-flex m-auto'>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-5'>خانه</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-5'>محصولات</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-5'>وبلاگ</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-5'>رضایت مشتریان</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-5'>تماس با ما</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-5'>درباره ما</li>
                <li className='ms-lg-4 ms-md-3 ms-sm-2 fs-5'>مشتریان</li>
            </ul>
        </HEADER>
    );
};

export default StickyHeader;