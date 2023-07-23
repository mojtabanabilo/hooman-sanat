import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import hoomanLogo from "../../assets/pic/logo-31-1-1.png";
import banner from "../../assets/pic/banner.jpg"

// styled-components
const HEADER = styled.header`
    width: 100vw;
    height: 100vh;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    img{
        width: 100px;
        height: 100px;
    }
    li{
        list-style-type: none;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            border-bottom: solid 1px #ff7b00;
            color: #ff7b00;
            transform: translateY(-3px);
            transition: all .3s;
        }
    }
`;
const RESPONSIVE = styled.div`
    @media (max-width: 768px) {
        .h-1{
            background-size: contain;
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
        <RESPONSIVE>
            <HEADER className={`h-1 p-3`}>
                <section className={`h-s-1 mw-100 mh-100 d-flex justify-content-start align-items-center ${screenSize < 650 && 'w-100 d-flex justify-content-between'}`}>
                    <img src={hoomanLogo} alt="hooman-sanat"/>
                    {screenSize > 650 ? <ul className='d-flex me-4  text-center'>
                        <li className={`ms-lg-4 ms-md-3 text-light fs-4 ${screenSize < 768 && 'fs-6 ms-3'}`}>خانه</li>
                        <li className={`ms-lg-4 ms-md-3 text-light fs-4 ${screenSize < 768 && 'fs-6 ms-3'}`}>محصولات</li>
                        <li className={`ms-lg-4 ms-md-3 text-light fs-4 ${screenSize < 768 && 'fs-6 ms-3'}`}>وبلاگ</li>
                        <li className={`ms-lg-4 ms-md-3 text-light fs-4 ${screenSize < 768 && 'fs-6 ms-3'}`}>رضایت مشتریان</li>
                        <li className={`ms-lg-4 ms-md-3 text-light fs-4 ${screenSize < 768 && 'fs-6 ms-3'}`}>تماس با ما</li>
                        <li className={`ms-lg-4 ms-md-3 text-light fs-4 ${screenSize < 768 && 'fs-6 ms-3'}`}>درباره ما</li>
                        <li className={`ms-lg-4 ms-md-3 text-light fs-4 ${screenSize < 768 && 'fs-6 ms-3'}`}>مشتریان</li>
                    </ul> : <i className="bi bi-list fs-1 text-white ms-5" style={{cursor: "pointer"}} onClick={() => setMenu(!menu)}></i>}
                </section>
            </HEADER>
        </RESPONSIVE>
    );
};

export default Header;