import React,{useEffect,useRef} from 'react'

//imgs
import homeBackground from "../img/homeBackground.jpg";

export default function Background() {

    const backgroundContainer = useRef(null);
    const background = useRef(null);

    useEffect(() => {

        const handleHover = (e) => {
            if(window.innerWidth > 600)
            {
                const X = e.clientX;
                const Y = e.clientY;
                const Xoffset = X - window.innerWidth / 2;
                const Yoffset = Y - window.innerHeight / 2;
                const XoffsetPercent = Xoffset / (window.innerWidth/2);
                const YoffsetPercent = Yoffset / (window.innerHeight/2);
                if(background.current){
                     background.current.style.transform = `scale(1.2) translate(${-50*XoffsetPercent}px , ${-50*YoffsetPercent}px)`;
                }

               
            }
        }

        window.addEventListener("mousemove", handleHover);

        const handleBackgroundImgSize = () => {
            if(window.innerWidth/window.innerHeight < 1.2){
                background.current.style.width="auto";
                background.current.style.height="120vh";
            }else if(window.innerWidth/window.innerHeight > 1.2){
                background.current.style.width="120vw";
                background.current.style.height="auto";
            }
        }
        handleBackgroundImgSize();
        window.addEventListener("resize", handleBackgroundImgSize)
        return() => {
            window.removeEventListener("resize", handleBackgroundImgSize);
            window.removeEventListener("mousemove", handleHover);
            console.log("im in")
        }
            
        
    }, [])

    return (
        <div ref={backgroundContainer} className="home__background ">
                <img ref={background} src={homeBackground} alt="background"/>
                <div style={{opacity:"50%"}} className="home__backgroundOverlay"></div>
        </div>
    )
}
