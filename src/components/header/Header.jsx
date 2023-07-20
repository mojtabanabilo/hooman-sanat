import React from 'react';
import styled from "styled-components";
import hoomanLogo from "../../assets/pic/logo-31-1-1.png";
import banner from "../../assets/pic/banner.jpg"

// styled-components
const HEADER = styled.header`
    width: 100%;
    background-image: url(${banner});
    background-position: top;
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

const Header = () => {
    
    return (
        <HEADER className='h-1 w-100 min-vh-100  p-3'>
            <section className='h-s-1 d-flex justify-content-start align-items-center'>
                <img src={hoomanLogo} alt="hooman-sanat"/>
                <ul className='d-flex me-4  text-center'>
                    <li className='ms-lg-4 ms-md-3 ms-sm-2 text-light fs-5'>خانه</li>
                    <li className='ms-lg-4 ms-md-3 ms-sm-2 text-light fs-5'>محصولات</li>
                    <li className='ms-lg-4 ms-md-3 ms-sm-2 text-light fs-5'>وبلاگ</li>
                    <li className='ms-lg-4 ms-md-3 ms-sm-2 text-light fs-5'>رضایت مشتریان</li>
                    <li className='ms-lg-4 ms-md-3 ms-sm-2 text-light fs-5'>تماس با ما</li>
                    <li className='ms-lg-4 ms-md-3 ms-sm-2 text-light fs-5'>درباره ما</li>
                    <li className='ms-lg-4 ms-md-3 ms-sm-2 text-light fs-5'>مشتریان</li>
                </ul>
            </section>
        </HEADER>
    );
};

export default Header;