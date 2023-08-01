import React from 'react';
import { styled } from 'styled-components';
import footer from "../../assets/pic/footer.jpg";

// styled-components
const SECTION_ABOUT_US = styled.div`
    width: 100%;
    background-image: url(${footer});
    background-repeat: no-repeat;
    background-position: center;
    .titles{
        .head{
            display: flex;
            h2{
                color: #ff5100;
            }
        }
        p{
            color: #fff;
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
    }
`;

const SectionAboutUs = () => {
    return (
        <SECTION_ABOUT_US>
            <div className='titles'>
                <div className='head'>
                    <i class="bi bi-vector-pen fs-2 ms-2" style={{color: "#ff5100"}}></i>
                    <h2>درباره ما</h2>
                </div>
                <p>
                    شرکت هومان صنعت هرمز با اتکا بر تجربیات، توانایی های فردی اعضای آن در زمینه صنعت بنا نهاده شده است تا بتواند خدمتی هر چند کوچک به صنعت و صنعتگران این مرز بوم باشد.
                    خدمات هومان صنعت هرمز هم در زمینه کالاهای صنعتی که تولیدات داخل و هم تولیدات کشورهای صاحب صنعت میباشد.
                    ما همه انرژی خود را برای خلق خدمات عالی بنا نهادیم تا بتوانیم رضایت مشتریان خود را بدست اوریم.
                    در زیر چند نمونه از ویژگی هایی که سعی کرده ایم دنبال رو آن باشیم را ذکر می نماییم:
                </p>
                <ul>
                    <div className='points'>
                        <li>کیفیت و کارایی مناسب</li>
                        <i class="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                    </div>
                    <div className='points'>
                        <li>قیمت منصفانه</li>
                        <i class="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                    </div>
                    <div className='points'>
                        <li>برنامه ریزی وآینده نگری</li>
                        <i class="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                    </div>
                    <div className='points'>
                        <li>تجربه چندین ساله</li>
                        <i class="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                    </div>
                    <div className='points'>
                        <li>پشتکار و پیگیری</li>
                        <i class="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                    </div>
                    <div className='points'>
                        <li>تشخیص نیاز مشتریان</li>
                        <i class="bi bi-arrow-left-circle fs-5" style={{color: "#ff5100"}}></i>
                    </div>
                </ul>
            </div>
        </SECTION_ABOUT_US>
    );
};

export default SectionAboutUs;