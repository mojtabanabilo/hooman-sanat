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
    background: linear-gradient(360deg, #2a170b 0%, #794509 35%, #b84000 100%);    
    top: 0%;
    left: 100%;
    transform: translateX(-100%);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    @keyframes fadeIn {
       0%{
        opacity: 0;
        transform: translateX(0);
       }
       100%{
        opacity: 1;
        transform: translateX(-2rem);
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
            color: #fff;
            font-size: 1.1rem;
            &:hover{
                border-bottom: solid 1px #ffffff;
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
        <DIV_ANIMATION style={{animation: menu && 'fadeIn .3s ease-in-out'}}>
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