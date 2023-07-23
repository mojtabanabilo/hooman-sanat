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
        <header data-aos="fade-down" data-aos-delay="50">
            {/* <img src={hoomanLogo} alt="hooman-sanat"/> */}
            <ul>
                <li>خانه</li>
                <li>محصولات</li>
                <li>وبلاگ</li>
                <li>رضایت مشتریان</li>
                <li>تماس با ما</li>
                <li>درباره ما</li>
                <li>مشتریان</li>
            </ul>
        </header>
    );
};

export default StickyHeader;