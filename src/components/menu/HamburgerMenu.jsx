import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// styled-components
const DIV_ANIMATION = styled.div`
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
`;
const LI = styled.li`
    cursor: pointer;
    transition: all .3s;
    &:hover{
        border-bottom: solid 1px #ff7b00;
        color: #ff7b00;
        transform: translateY(-3px);
        transition: all .3s;
    }
`;

const HamburgerMenu = ({userMenu}) => {
    const {menu, setMenu} = userMenu;

    return (
        <DIV_ANIMATION style={{zIndex: "100", animation: menu && 'fadeIn .1s ease-in'}} 
            className='w-25 min-vh-100 p-3 bg-white position-absolute top-0 start-0'
        >
            <i className="bi bi-x fs-1 text-black"
                style={{cursor: "pointer"}}
                onClick={() => setMenu(false)}
            ></i>
            <ul className="list-group list-group-flush d-flex flex-column justify-content-center align-items-center">
                <LI className="list-group-item" style={{background: "inherit"}}>
                    خانه
                </LI>
                <LI className="list-group-item" style={{background: "inherit"}}>
                    محصولات
                </LI>
                <LI className="list-group-item" style={{background: "inherit"}}>
                    وبلاگ
                </LI>
                <LI className="list-group-item" style={{background: "inherit"}}>
                    رضایت مشتریان
                </LI>
                <LI className="list-group-item" style={{background: "inherit"}}>
                    تماس با ما
                </LI>
                <LI className="list-group-item" style={{background: "inherit"}}>
                    درباره ما
                </LI>
                <LI className="list-group-item" style={{background: "inherit"}}>
                    مشتریان ما
                </LI>
            </ul>
        </DIV_ANIMATION>
    );
};

export default HamburgerMenu;