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
        background-size: 200% 100%;
    }
    section{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        .logo{
            width: 120px;
            height: 120px;
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            margin-left: 140px;
            @media (max-width: 768px) {
                margin-left: 70px;
            }
            @media (max-width: 530px) {
                width: 90px;
                height: 90px;
                margin-left: 50px;
            }
            @media (max-width: 400px) {
                width: 70px;
                height: 70px;
                margin-left: 30px;
            }
            img{
                width: 100px;
                height: 100px;
                @media (max-width: 530px) {
                    width: 70px;
                    height: 70px;
                }
                @media (max-width: 400px) {
                    width: 50px;
                    height: 50px;
                }
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
                font-weight: 500;
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
        setScreenSize(window.innerWidth)
        window.addEventListener("resize", setScreenSize(window.innerWidth));
        return () => {
          window.removeEventListener("resize", setScreenSize(window.innerWidth))
        }
    }, [])

    return (
        <HEADER>
            <section style={{justifyContent: screenSize < 768 && "space-between"}}>
                <div className='logo'>
                    <img src={hoomanLogo} alt="hooman-sanat"/>
                </div>
                {screenSize > 876 ? <ul>
                    <li>خانه</li>
                    <li>محصولات</li>
                    <li>وبلاگ</li>
                    <li>رضایت مشتریان</li>
                    <li>تماس با ما</li>
                    <li>درباره ما</li>
                    <li>مشتریان</li>
                </ul> : <i className="bi bi-list fs-1 text-white" style={{cursor: "pointer"}} onClick={() => setMenu(!menu)}></i>}
            </section>
        </HEADER>
    );
};

export default Header;