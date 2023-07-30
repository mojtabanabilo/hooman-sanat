import React, {useEffect, useState} from 'react';
import { styled } from 'styled-components';
import bgFooter from "../../assets/pic/footer.jpg"

// styled-components
const FOOTER = styled.footer`
    background-image: url(${bgFooter});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .bg{
        width: 100%;
        height: 400px;
        background: #ffffffb9;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row-reverse;
        @media (max-width: 956px) {
            flex-direction: column-reverse;
            align-items: center;
            height: fit-content;
        }
        .table{
            width: 50%;
            height: 200px;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 956px) {
                width: 100%;
            }
            p{
                padding: 0;
                margin: 0;
                background: inherit;
            }
            section{
                width: 400px;
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                @media (max-width: 956px) {
                    width: 80%;
                }
                .header{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #e65c00;
                    padding: 0 10px;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    p{
                        color: #ffffff;
                    }
                }
                .data, .date, .header{
                    width: 100%;
                    height: 35%;
                }
                .data, .date{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .data{
                    background: #ffffff;
                }
                .date{
                    background: #e9e9e9;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
            }
        }
        .contact{
            width: 50%;
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-area: auto;
            @media (max-width: 956px) {
                flex-direction: column-reverse;
                align-items: center;
                height: fit-content;
                width: 80%;
            }
            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h4{
                    color: #e65c00;
                }
                p{
                    font-size: 1.1rem;
                }
            }
        }
    }
`;

const Footer = () => {
    return (
        <FOOTER>
            <div className='bg'>
                <div className='table'>
                    <section>
                        <div className='header'>
                            <p>عنوان ارز</p>
                            <p>قیمت(ریال)</p>
                            <p>زمان</p>
                        </div>
                        <div className='data'>
                            <p>در حال بروز رسانی ...</p>
                        </div>
                        <div className='date'>
                            <p>نرخ ارز تاریخ 1402/05/08</p>
                        </div>
                    </section>
                </div>
                <div className='contact'>
                    <div>
                        <h4>آدرس</h4>
                        <p style={{textAlign: "justify"}}>بندر عباس, بلوار امام خمینی, نرسیده به شهر نمایش, ساختمان تجاری اداری عرفان, طبقه پنجم, واحد 53</p>
                    </div>
                    <div>
                        <h4>کد پستی</h4>
                        <p>7915739985</p>
                    </div>
                    <div style={{gridColumn: "1 / span 1", gridRow: "2 / span 2"}}>
                        <h4>تلفن</h4>
                        <p>076-33318004-5</p>
                        <p>076-91310917</p>
                        <p>09129440577</p>
                    </div>
                    <div>
                        <h4>فکس</h4>
                        <p>076-33318006</p>
                    </div>
                    <div style={{gridColumn: "2 / span 1"}}>
                        <h4>ایمیل</h4>
                        <p>info@hoomansanat.com</p>
                    </div>
                </div>
            </div>
        </FOOTER>
    );
};

export default Footer;