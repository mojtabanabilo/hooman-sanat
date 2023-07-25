import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components";
import hoomanLogo from "../../assets/pic/logo-31-1-1.png";

// styled-components
const HEADER = styled.header`
    width: 100%;
    height: 80px;
    padding: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    position: fixed;
    top: 0;
    img{
        width: 60px;
        height: 60px;
        margin-right: 10px;
        @media (max-width: 768px) {
            width: 50px;
            height: 50px;
        }
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        li{
            list-style-type: none;
            cursor: pointer;
            transition: all .3s;
            font-size: 1.3rem;
            color: #000;
            margin: 0 10px;
            &:hover{
                border-bottom: solid 1px #ff7b00;
                color: #ff7b00;
                transform: translateY(-2px);
                transition: all .3s;
            }
            @media (max-width: 768px) {
                font-size: 1rem;
                margin: 0 5px;
                font-weight: 500;
            }
        }
    }
`;

const StickyHeader = ({userSize, userMenu}) => {
    const {screenSize, setScreenSize} = userSize;
    const {menu, setMenu} = userMenu; 
    AOS.init();
    return (
        <HEADER data-aos="fade-down" data-aos-delay="50">
            <img src={hoomanLogo} alt="hooman-sanat"/>
            {screenSize > 570 ? <ul>
                <li>خانه</li>
                <li>محصولات</li>
                <li>وبلاگ</li>
                <li>رضایت مشتریان</li>
                <li>تماس با ما</li>
                <li>درباره ما</li>
                <li>مشتریان</li>
            </ul> : <i className="bi bi-list fs-1 text-black" style={{cursor: "pointer"}} onClick={() => setMenu(!menu)}></i>}
        </HEADER>
    );
};

export default StickyHeader;