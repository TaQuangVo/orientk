import React,{useEffect, useRef} from 'react'
import "../style/home.css"
import {Link} from "react-router-dom";

//gsap
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";






export default function Home() {
    gsap.registerPlugin(ScrollTrigger);



    useEffect(() => {


        gsap.timeline({
            scrollTrigger:{
                scrub:true,
                pin:".home",
            }
        })
        .to(".section1__content1", {
            opacity:0,
            duration:.4,
            ease: Power0.easeNone
        })
        .to(".section1__content",{
            y: "-50%",
            duration:0.5,
            ease: Power0.easeNone
        }, "<")
       .from(".section1__content2",{
           opacity:0, 
           duration:.3,
           ease: Power0.easeNone
        }, 0.2)




    }, [])


    

    return (
    <div>
        
        <div   className="home">
            
            <div className="home__body">
                <section className="home__section1 ">
                    <div className="section1__content1__container">
                        <div  className="section1__content">
                            <div  className="section1__content1">
                                <p>Är du småhungrig?</p>
                            </div>
                            <div  className="section1__content2">
                                <p>Vi finns här för dig!</p>
                                <p>Håll dig mätt även i gatan</p>
                            </div>
                        </div>
                    </div>
                    <div className="section1__arrow">
                        <p>Scrolla ner</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.46 100.14">
                            <polygon  points="111.23 32.9 60.44 83.69 9.66 32.9 1.43 41.13 60.44 100.14 119.46 41.13 111.23 32.9"/>
                            <polygon  points="109.8 0 59.01 50.79 8.23 0 0 8.23 59.01 67.24 118.03 8.23 109.8 0"/>
                        </svg>
                    </div>
                </section>
                <section className="home__section2">
                    <div className="section2__content">
                        <div className="section2__header">
                            <p>Låt oss fixa din oder medan du kommer</p>
                        </div>
                        <div className="section2__btns">
                            <div className="btn__willys">
                                <Link to="/meny/willy">
                                    <button>Mitt emot Willy's</button>
                                </Link>
                            </div>
                            <div className="btn__orienthall">
                                <Link to = "/meny/orient">
                                    <button>Mitt emot orienthallen</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <section className="footer">
                    <div className="footer__info">
                        <div className="footer__phone">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.58 48.58">
                                <path  d="M1645.2,347.25A24.29,24.29,0,1,1,1669.49,323,24.31,24.31,0,0,1,1645.2,347.25Zm0-47.57A23.29,23.29,0,1,0,1668.49,323,23.31,23.31,0,0,0,1645.2,299.68Z" transform="translate(-1620.91 -298.68)"/>
                                <path  d="M1639.89,308.63a2.14,2.14,0,0,1,1.28,1.72c.35,1.51.67,3,1,4.53a3.31,3.31,0,0,1,.06.7,1.4,1.4,0,0,1-1,1.46q-.71.25-1.44.48a1.18,1.18,0,0,0-.84.92,3.08,3.08,0,0,0,.08,1.8,19.38,19.38,0,0,0,5.88,8.56,13.07,13.07,0,0,0,1.8,1.24,2.16,2.16,0,0,0,1.35.24,1,1,0,0,0,.81-.47l.81-1.16a1.5,1.5,0,0,1,2.07-.61,15.25,15.25,0,0,1,1.39.72c.87.47,1.73.95,2.59,1.43.22.12.44.25.65.39a2.09,2.09,0,0,1,1.1,1.59l-.08.58c-.19.43-.35.89-.58,1.3a6.07,6.07,0,0,1-4.65,3.26c-.42.06-.85,0-1.27.06l-1-.14c-.39-.12-.79-.23-1.17-.37a15.83,15.83,0,0,1-5.08-3.22,36,36,0,0,1-4.86-5.38,36.63,36.63,0,0,1-4.59-7.59,14.79,14.79,0,0,1-1.27-4.76c0-.48,0-1,0-1.46l.15-1c0-.07.06-.15.08-.22a6,6,0,0,1,4.6-4.49,12.07,12.07,0,0,1,1.6-.21Z" transform="translate(-1620.91 -298.68)"/>
                            </svg>
                            <div className="phone__info">
                                <p>0729 44 43 45</p>
                            </div>
                        </div>
                        <div className="footer__location">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.5 48.5">
                                <path  d="M1620.22,273.06a9.93,9.93,0,0,0-9.93,9.93c0,5.49,9.93,20,9.93,20s9.93-14.47,9.93-20A9.92,9.92,0,0,0,1620.22,273.06Zm0,14.16a4.67,4.67,0,1,1,4.67-4.67A4.67,4.67,0,0,1,1620.22,287.22Z" transform="translate(-1595.38 -263.05)"/>
                                <path  d="M1619.63,311.55a24.25,24.25,0,1,1,24.25-24.25A24.28,24.28,0,0,1,1619.63,311.55Zm0-47.5a23.25,23.25,0,1,0,23.25,23.25A23.28,23.28,0,0,0,1619.63,264.05Z" transform="translate(-1595.38 -263.05)"/>
                            </svg>
                            <div className="location__info">
                                <p>Mitt emot Willy's</p>
                                <p>Mitt emot Orienthallen</p>
                            </div>
                        </div>
                        <div className="footer__facebook">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.5 48.5">
                                <path  d="M1597.63,316a24.25,24.25,0,1,1,24.25-24.25A24.28,24.28,0,0,1,1597.63,316Zm0-47.5a23.25,23.25,0,1,0,23.25,23.25A23.28,23.28,0,0,0,1597.63,268.45Z" transform="translate(-1573.38 -267.45)"/>
                                <path  d="M1600,283.85a1.28,1.28,0,0,1,1.34-1.45h3.43v-5.23H1600c-5.24,0-6.42,3.87-6.42,6.38v2.75h-3v6.1h3.08v15.26h6.1V292.4h4.52l.2-2.39.36-3.71H1600Z" transform="translate(-1573.38 -267.45)"/>
                            </svg>
                            <div className="facebook__info">
                                <p>www.facebook.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p>© Coppyrigt Orientköket</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
    )
}
