import React,{useRef, useContext} from 'react'
import "../style/meny.css"

//contexts
import {MenyContext} from "../contexts/MenyContext";
import {DrinkContext} from "../contexts/DrinkContext";


//compoments
import MenyItems from "../components/MenyItem";

//imgage
import kebab from "../img/kebab.jpg";

export default function Meny() {
    const pages = useRef(null);
    const mat = useRef(null);
    const dricka = useRef(null);


    const foods = useContext(MenyContext);
    const drinks = useContext(DrinkContext);


    

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
    const handleOpenCart = () =>{
        const overlay = document.querySelector(".cart__overlay");
        const body = document.querySelector(".cart");
        overlay.classList.remove("cart__overlay--close");
        body.classList.remove("cart--close");
    } 

   

    return (
            <div className="meny">
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
                                            {   foods !== null ? (
                                                foods.map((food, index) => (
                                                    <MenyItems item={food} isfood={true} key={index}/>
                                                ))
                                            ) : (
                                                <h3 className="loading">Loading...</h3>
                                            )
                                            }
                                        </div>
                                    </div>
                                    <div className="meny__list">
                                        <div className="meny__listDiv">
                                        {   drinks !== null ? (
                                               drinks.map((drink,index) => (
                                                <MenyItems item={drink} isfood={false} key={index}/>
                                                ))
                                            ) : (
                                                <h3 className="loading">Loading...</h3>
                                            )
                                        }
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="meny__divider">
                                <div className="divider__downarrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.46 100.14">
                                        <polygon points="111.23 32.9 60.44 83.69 9.66 32.9 1.43 41.13 60.44 100.14 119.46 41.13 111.23 32.9"/>
                                        <polygon points="109.8 0 59.01 50.79 8.23 0 0 8.23 59.01 67.24 118.03 8.23 109.8 0"/>
                                    </svg>
                                </div>
                                <div className="divider__line"></div>
                            </div>
                            <div  className="meny__kundvagn">
                                <button onClick={handleOpenCart}>Visa Kundvagnen</button>
                            </div>
                        </div>           
                    </div>
                </div>                 
            </div>
    )
}
