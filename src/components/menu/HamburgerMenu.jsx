import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// styled-components
const DIV_ANIMATION = styled.div`
    width: 200px;
    height: 100vh;
    background: red;
    position: fixed;
    top: 0%;
    left: 0%;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end; */
    @keyframes fadeIn {
       0%{
        opacity: 0;
        transform: translateX(-2rem);
       }
       100%{
        opacity: 1;
        transform: translateX(0);
       } 
    }
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(2rem);
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        padding-left: 10px;
        li{
            list-style: none;
            cursor: pointer;
            transition: all .3s;
            color: #fff;
            font-size: 1rem;
            &:hover{
                border-bottom: solid 1px #ff7b00;
                color: #ff7b00;
                transform: translateY(-3px);
                transition: all .3s;
            }
        }
    }
`;
const LI = styled.li`
    
`;

const HamburgerMenu = ({userMenu}) => {
    const {menu, setMenu} = userMenu;

    return (
        <DIV_ANIMATION style={{animation: menu ? 'fadeIn .2s ease-in' : 'fadeOut .2s ease-in-out'}}>
            <i className="bi bi-caret-left-fill fs-3 text-white" onClick={() => setMenu(false)}></i>
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