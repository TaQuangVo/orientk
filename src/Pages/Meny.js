import React,{useRef, useEffect} from 'react'
import "../style/meny.css"

//compoments
import MenyItems from "../components/MenyItem";


//imgage
import homeBackground from "../img/homeBackground.jpg";
import kebab from "../img/kebab.jpg";

export default function Meny() {
    const pages = useRef(null);
    const mat = useRef(null);
    const dricka = useRef(null);
    const background = useRef(null);

    const handlePageChange = ( page ) =>{
        if(page === 1 ){
            pages.current.style.transform="translateX(0%)";
            mat.current.style.fontWeight = "600";
            dricka.current.style.fontWeight = "300";
        }
        if(page === 2 ){
            pages.current.style.transform="translateX(-50%)";
            mat.current.style.fontWeight = "300";
            dricka.current.style.fontWeight = "600";
        }
        
    }

    useEffect(() => {
        window.onmousemove = (e) =>{
            const X = e.clientX;
            const Y = e.clientY;
            const Xoffset = X - window.innerWidth / 2;
            const Yoffset = Y - window.innerHeight / 2;
            const XoffsetPercent = Xoffset / (window.innerWidth/2);
            const YoffsetPercent = Yoffset / (window.innerHeight/2);

            background.current.style.transform = `scale(1.2) translate(${-50*XoffsetPercent}px , ${-50*YoffsetPercent}px)`;


        }
    }, [])

    return (

        <div className="meny">
           <div className="meny__background">
                <img ref={background} src={homeBackground} alt="background"/>
                <div className="nemy__overlay"></div>
           </div>
           <div className="meny__body">
                <div className="meny__img">
                    <img src={kebab} alt="kebab"></img>
                </div>
                <div className="meny__meny">
                    <div className="meny__wraper">
                        <h3>Meny</h3>
                        <div className="meny__nav">
                            <div className="nav__mat">
                                <h6 ref={mat} onClick={()=>{handlePageChange( 1)}}>Mat</h6>
                            </div>
                            <div  className="nav__dricka">
                                <h6 ref={dricka} onClick={()=>{handlePageChange( 2)}}>Dricka</h6>
                            </div>                    
                        </div>
                        <div className="meny__pages">
                            <div ref = {pages} className="pages__wraper">
                                <div className="meny__list">
                                    <div className="meny__listDiv">
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                    </div>
                                </div>
                                <div className="meny__list">
                                    <div className="meny__listDiv">
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                        <MenyItems />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="meny__divider">
                            <div className="divider__downarrow">V</div>
                            <div className="divider__line"></div>
                        </div>
                        <div className="meny__kundvagn">
                            <button>Visa Kundvagnen</button>
                        </div>
                    </div>
                    
                </div>
           </div>
            
        </div>
    )
}
