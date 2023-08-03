import React from 'react';
import { styled } from 'styled-components';
import footer from "../../assets/pic/footer.jpg";
import aboutUsPic from "../../assets/pic/factory2-about-pic1-1.png";

// styled-components
const SECTION_ABOUT_US = styled.div`
    width: 100%;
    background-image: url(${footer});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    img{
        width: 40%;
        height: 40%;
    }
    .titles{
        width: 50%;
        @media (max-width: 690px) {
            width: 100%;
        }
        .image-points{
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .head{
            display: flex;
            h2{
                color: #ff5100;
            }
        }
        p{
            color: #fff;
            text-align: justify;
        }
        ul{
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            .points{
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-start;
                align-items: center;
                li{
                    list-style: none;
                    color: #fff;
                    margin-right: 10px;
                }
            }
        }
        button{
            width: 90px;
            height: 40px;
            background: #ff5100;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            font-weight: 300;
            margin-top: 20px;
        }
    }
`;

const SectionAboutUs = ({userSize}) => {
    const {screenSize, setScreenSize} = userSize;
    return (
        <SECTION_ABOUT_US>
            {
                screenSize > 690 && <img src={aboutUsPic} alt="aboutus"/>
            }
            <div className='titles'>
                <div className='head'>
                    <i className="bi bi-vector-pen fs-2 ms-2" style={{color: "#ff5100"}}></i>
                    <h2>درباره ما</h2>
                </div>
                <p style={{fontSize: "1.2rem"}}>
                    شرکت هومان صنعت هرمز با اتکا بر تجربیات، توانایی های فردی اعضای آن در زمینه صنعت بنا نهاده شده است تا بتواند خدمتی هر چند کوچک به صنعت و صنعتگران این مرز بوم باشد.
                    خدمات هومان صنعت هرمز هم در زمینه کالاهای صنعتی که تولیدات داخل و هم تولیدات کشورهای صاحب صنعت میباشد.
                    ما همه انرژی خود را برای خلق خدمات عالی بنا نهادیم تا بتوانیم رضایت مشتریان خود را بدست اوریم.
                    در زیر چند نمونه از ویژگی هایی که سعی کرده ایم دنبال رو آن باشیم را ذکر می نماییم:
                </p>
                {
                    screenSize > 690 ? <ul>
                        <div className='points'>
                            <li>کیفیت و کارایی مناسب</li>
                            <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                        </div>
                        <div className='points'>
                            <li>قیمت منصفانه</li>
                            <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                        </div>
                        <div className='points'>
                            <li>برنامه ریزی وآینده نگری</li>
                            <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                        </div>
                        <div className='points'>
                            <li>تجربه چندین ساله</li>
                            <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                        </div>
                        <div className='points'>
                            <li>پشتکار و پیگیری</li>
                            <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                        </div>
                        <div className='points'>
                            <li>تشخیص نیاز مشتریان</li>
                            <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                        </div>
                    </ul> : <div className='image-points'>
                        <ul>
                            <div className='points'>
                                <li>کیفیت و کارایی مناسب</li>
                                <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                            </div>
                            <div className='points'>
                                <li>قیمت منصفانه</li>
                                <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                            </div>
                            <div className='points'>
                                <li>برنامه ریزی وآینده نگری</li>
                                <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                            </div>
                            <div className='points'>
                                <li>تجربه چندین ساله</li>
                                <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                            </div>
                            <div className='points'>
                                <li>پشتکار و پیگیری</li>
                                <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                            </div>
                            <div className='points'>
                                <li>تشخیص نیاز مشتریان</li>
                                <i className="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                            </div>
                        </ul>
                        {
                            screenSize > 400 && <img src={aboutUsPic} className='be-img' alt="aboutus"/>
                        }
                    </div>
                }
                
                <button>درباره ما</button>
            </div>
        </SECTION_ABOUT_US>
    );
};

export default SectionAboutUs;