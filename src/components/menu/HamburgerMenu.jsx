import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// styled-components
const DIV_ANIMATION = styled.div`
    width: 200px;
    height: 100vh;
    position: fixed;
    background: linear-gradient(360deg, #dadada 35%, #7a7a7a 100%);    
    top: 0%;
    right: 0%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    z-index: 500;
    @keyframes myAnim {
        0% {
            transform: translateX(100px);
        }
        100% {
            transform: translateX(0);
        }
    }
    i{
        cursor: pointer;
    }
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 10px;
        li{
            list-style: none;
            cursor: pointer;
            transition: all .3s;
            color: #ffffff;
            font-size: 1.1rem;
            &:hover{
                border-bottom: solid 1px #ffffff;
                transform: translateY(-3px);
                transition: all .3s;
            }
        }
    }
`;

const HamburgerMenu = ({userMenu}) => {
    const {menu, setMenu} = userMenu;

    return (
        <DIV_ANIMATION style={{animation: menu && 'myAnim 0.3s linear 0s 1 normal forwards'}}>
            <i className="bi bi-caret-right-fill fs-3 text-white" onClick={() => setMenu(false)}></i>
            <ul>
                <li>خانه</li>
                <li>محصولات</li>
                <li>وبلاگ</li>
                <li>رضایت مشتریان</li>
                <li>تماس با ما</li>
                <li>درباره ما</li>
                <li>مشتریان ما</li>
            </ul>
        </DIV_ANIMATION>
    );
};

export default HamburgerMenu;