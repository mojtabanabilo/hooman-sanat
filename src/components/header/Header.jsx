import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import hoomanLogo from "../../assets/pic/logo-31-1-1.png";
import banner from "../../assets/pic/banner.jpg";

// styled-components
const HEADER = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    @media (max-width: 768px) {
        background-size: 130% 100%;
        background-position: left;
    }
    @media (max-width: 470px) {
        background-size: 150% 100%;
    }
    @media (max-width: 380px) {
        background-size: 180% 100%;
    }
    section{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            width: 100px;
            height: 100px;
            @media (max-width: 530px) {
                width: 70px;
                height: 70px;
            }
        }
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
            li{
                list-style-type: none;
                cursor: pointer;
                transition: all .3s;
                color: #ffffff;
                font-size: 1.2rem;
                margin: 0 10px;
                &:hover{
                    border-bottom: solid 1px #ff7b00;
                    color: #ff7b00;
                    transform: translateY(-3px);
                    transition: all .3s;
                }
            }
        }
    }
`;


const Header = ({userSize, userMenu}) => {
    const {menu, setMenu} = userMenu;
    const {screenSize, setScreenSize} = userSize;
    
    useEffect(() => {
        const handleScreenSize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleScreenSize);
        return () => {
          window.removeEventListener("resize", handleScreenSize)
        }
    }, [])

    return (
        <HEADER>
            <section style={{justifyContent: screenSize < 768 && "space-between"}}>
                <img src={hoomanLogo} alt="hooman-sanat"/>
                {screenSize > 768 ? <ul>
                    <li>خانه</li>
                    <li>محصولات</li>
                    <li>وبلاگ</li>
                    <li>رضایت مشتریان</li>
                    <li>تماس با ما</li>
                    <li>درباره ما</li>
                    <li>مشتریان</li>
                </ul> : <i className="bi bi-list fs-1 text-white ms-5" onClick={() => setMenu(!menu)}></i>}
            </section>
        </HEADER>
    );
};

export default Header;