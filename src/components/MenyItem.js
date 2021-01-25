import React,{useRef, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';

import {CartContext} from "../contexts/CartContext";

import "../style/menyitem.css"

export default function MenyItem({item, isfood}) {
    const {addToCard} = useContext(CartContext);
    
    const location = useParams().location;

    const [antal, setAntal] = useState(1);

    const [special, setSpecial] = useState("");
    const updateSpecial = (e) =>{
        setSpecial(e.target.value);
    }



    const form = useRef(null);
    const formWraper = useRef(null)
    const oder = useRef(null);
    const oderWraper = useRef(null)
    const notclick = useRef(null)
    const laggtill = useRef(null);
    const tillaggad = useRef(null)

    const changeAntal = (tecken) => {
        if(tecken === "+"){
            setAntal((pref)=>{
                 const temp = pref + 1;
                 return(temp)
                })
        }
        else{
            if(antal>1)
            {
                setAntal((pref)=>{
                    const temp = pref - 1;
                    return(temp)
               })
            }
        }   
    }
    const handleOpen= (target, wraper) => {
        const height = target.current.clientHeight;
        const wraperH = wraper.current.clientHeight;
        if(wraperH === 0 ){
             wraper.current.style.height = `${height}px`;
        }else{
            wraper.current.style.height = "0px";
        }
    }

    const handleOpenOder= (e, target, wraper) => {
            const wrapers = document.querySelectorAll(".wraper");
            wrapers.forEach((wrap) => {
                if(wrap !== wraper.current)
                wrap.classList.add("close");
            })
            wraper.current.classList.toggle("close");
      
    }
    const handleCloseOder = (wraper) => {
        const wraperH = wraper.current.clientHeight;
        if(wraperH > 0){
            wraper.current.style.height=`${wraperH}px`;
            wraper.current.style.height="0";
        }
    }
    const add = () => {
        laggtill.current.classList.remove("showAddToCard");
        tillaggad.current.classList.add("showAddToCard");
        setTimeout(function(){ 
            laggtill.current.classList.add("showAddToCard");
            tillaggad.current.classList.remove("showAddToCard");
        }, 700);
        const toAdd = {
            id : item.id,
            name : item.name,
            ingrediens : item.ingrediens,
            price : item.price,
            rabattPrice: item.rabattPrice,
            rabatt : item.rabatt,
            place: location,
            special : special,
            antal: antal,
            total:  item.rabatt? item.rabattPrice * antal : antal*item.price
        }
        //console.log(antal);
        //console.log(antal*item.price);
        addToCard(toAdd);
        
    }
    return (
 
            <div className="menyItem" >
                <div className="menyItem__header">
                    <h2  onClick={(e)=>{handleOpenOder(e,oder,oderWraper)}} className="menyItem__name">{item.name}</h2>
                        {
                            !item.rabatt ? (
                                <h2 className="menyItem__price">{item.price+ " kr"}</h2>
                            ):(
                                <div className="Meny__price">
                                    <h2 className="menyItem__beforeprice">{item.price+ " kr"}</h2>
                                    <h2 className="menyItem__afterprice">{item.rabattPrice+ " kr"}</h2>
                                </div>
                            )
                        } 


                    
                </div>
                <div className="menyItem__ingrediens">
                    <p>{item.ingrediens}</p>
                </div>
                <div ref={oderWraper} className="wraper close">
                    <div ref={oder} className="menyItem__oder">
                        <div className="menyitem__antal">
                            <div className="menyitem__setantal">
                                <p>Antal: </p>
                                <div className="antal__form">
                                    <div onClick={()=>{changeAntal("-")}}><p><a>-</a></p></div>
                                    <div>{antal}</div>
                                    <div onClick={()=>{changeAntal("+")}} className="plus" ><p><a>+</a></p></div>
                                </div>
                            </div>
                            <div className="total">
                                {
                                    !item.rabatt ? (
                                        <p>{item.price * antal + " kr"}</p>

                                    ) : (
                                        <p>{item.rabattPrice * antal + " kr"}</p>  
                                    ) 
                                }
                            </div>
                        </div>
                            
                                <>
                                <div className="menyitem__tilläg">
                                {isfood && (
                                    <div className="onskemal">
                                        <p></p>
                                        <p onClick={()=>{handleOpen(form, formWraper)}}><a>Önskemål?</a></p>
                                    </div>
                                )}
                                    <div onClick={(e) => {add()}} className="menyitem__Addtocard">
                                        <div ref={laggtill} className="addtocard showAddToCard"><p><a>Lägg till</a></p></div>
                                        <div ref={tillaggad} className="addtocard"><p><a>Tilläggad</a></p></div>
                                        
                                    </div>
                                </div>
                                {isfood && (
                                    <div className="wraper__area" ref={formWraper}>
                                        <div ref={form} className="menyitem__form">
                                            <textarea className="textarea" onChange={updateSpecial} />
                                        </div>
                                    </div>
                                )}
                                </>
                            
                        <div  className="oder__close"><a ref={notclick} onClick={(e)=>{handleOpenOder(e,oder,oderWraper)}}>Stäng X</a></div>
                        <div className="menyitem__divider"></div>
                        
                    </div>
                </div>
            </div>

    )
}
