import React,{useRef, useEffect} from 'react'
import "../style/sideIcons.css"



export default function SideIcons() {
    const sideIcon = useRef(null);
    const overlay = useRef(null);

    useEffect(() => {
        const icons = document.querySelectorAll(".sideIcons__container svg");
        icons.forEach((icon) => {
            icon.addEventListener("click", ()=>{
                console.log("clicked");
                sideIcon.current.style.transform="translateX(-100%)";
                sideIcon.current.style.backgroundColor="rgba(0, 0, 0, 0.568)"
                overlay.current.style.pointerEvents="all";
            })
        })
        overlay.current.addEventListener("click", ()=>{
            sideIcon.current.style.transform="translateX(-100px)";
            sideIcon.current.style.backgroundColor="rgba(0, 0, 0, 0)"
            overlay.current.style.pointerEvents="none";
        })
    }, [])

    return (
        <div className="sideIconWrap">
            <div ref={overlay} className="sideIcon__overlay"></div>

            <div ref={sideIcon} className="sideIcons">
                <div className="sideIcons__container">
                    <div className="sideIcons__phone">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.58 48.58">
                            <path  d="M1645.2,347.25A24.29,24.29,0,1,1,1669.49,323,24.31,24.31,0,0,1,1645.2,347.25Zm0-47.57A23.29,23.29,0,1,0,1668.49,323,23.31,23.31,0,0,0,1645.2,299.68Z" transform="translate(-1620.91 -298.68)"/>
                            <path  d="M1639.89,308.63a2.14,2.14,0,0,1,1.28,1.72c.35,1.51.67,3,1,4.53a3.31,3.31,0,0,1,.06.7,1.4,1.4,0,0,1-1,1.46q-.71.25-1.44.48a1.18,1.18,0,0,0-.84.92,3.08,3.08,0,0,0,.08,1.8,19.38,19.38,0,0,0,5.88,8.56,13.07,13.07,0,0,0,1.8,1.24,2.16,2.16,0,0,0,1.35.24,1,1,0,0,0,.81-.47l.81-1.16a1.5,1.5,0,0,1,2.07-.61,15.25,15.25,0,0,1,1.39.72c.87.47,1.73.95,2.59,1.43.22.12.44.25.65.39a2.09,2.09,0,0,1,1.1,1.59l-.08.58c-.19.43-.35.89-.58,1.3a6.07,6.07,0,0,1-4.65,3.26c-.42.06-.85,0-1.27.06l-1-.14c-.39-.12-.79-.23-1.17-.37a15.83,15.83,0,0,1-5.08-3.22,36,36,0,0,1-4.86-5.38,36.63,36.63,0,0,1-4.59-7.59,14.79,14.79,0,0,1-1.27-4.76c0-.48,0-1,0-1.46l.15-1c0-.07.06-.15.08-.22a6,6,0,0,1,4.6-4.49,12.07,12.07,0,0,1,1.6-.21Z" transform="translate(-1620.91 -298.68)"/>
                        </svg>
                        <div className="phone__info">
                            <p>0729 44 43 45</p>
                        </div>
                    </div>
                    <div className="sideIcons__location">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.5 48.5">
                            <path  d="M1620.22,273.06a9.93,9.93,0,0,0-9.93,9.93c0,5.49,9.93,20,9.93,20s9.93-14.47,9.93-20A9.92,9.92,0,0,0,1620.22,273.06Zm0,14.16a4.67,4.67,0,1,1,4.67-4.67A4.67,4.67,0,0,1,1620.22,287.22Z" transform="translate(-1595.38 -263.05)"/>
                            <path  d="M1619.63,311.55a24.25,24.25,0,1,1,24.25-24.25A24.28,24.28,0,0,1,1619.63,311.55Zm0-47.5a23.25,23.25,0,1,0,23.25,23.25A23.28,23.28,0,0,0,1619.63,264.05Z" transform="translate(-1595.38 -263.05)"/>
                        </svg>
                        <div className="location__info">
                            <p>Mitt emot Willy's</p>
                            <p>Mitt emot Orienthallen</p>
                        </div>
                    </div>
                    <div className="sideIcons__facebook">
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.5 48.5">
                            <path  d="M1597.63,316a24.25,24.25,0,1,1,24.25-24.25A24.28,24.28,0,0,1,1597.63,316Zm0-47.5a23.25,23.25,0,1,0,23.25,23.25A23.28,23.28,0,0,0,1597.63,268.45Z" transform="translate(-1573.38 -267.45)"/>
                            <path  d="M1600,283.85a1.28,1.28,0,0,1,1.34-1.45h3.43v-5.23H1600c-5.24,0-6.42,3.87-6.42,6.38v2.75h-3v6.1h3.08v15.26h6.1V292.4h4.52l.2-2.39.36-3.71H1600Z" transform="translate(-1573.38 -267.45)"/>
                        </svg>
                        <div className="facebook__info">
                            <p>www.facebook.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
