import React,{useRef,useEffect, useState} from 'react'

import "../style/menyitem.css"

export default function MenyItem() {
    const [antal, setAntal] = useState(1);

    const form = useRef(null);
    const formWraper = useRef(null)
    const oder = useRef(null);
    const oderWraper = useRef(null)
    const notclick = useRef(null)


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
      
            wraper.current.classList.toggle("close")
              

      
    }
    const handleCloseOder = (wraper) => {
        const wraperH = wraper.current.clientHeight;
        if(wraperH > 0){
            wraper.current.style.height=`${wraperH}px`;
            wraper.current.style.height="0";
        }
    }
    return (
 
            <div className="menyItem">
                <div className="menyItem__header">
                    <h2  onClick={(e)=>{handleOpenOder(e,oder,oderWraper)}} className="menyItem__name">Falafelrulle</h2>
                    <h2 className="menyItem__price">40 kr</h2>
                </div>
                <div className="menyItem__ingrediens">
                    <p>Falafel, salad, tomat, lök, kebabsås</p>
                </div>
                <div ref={oderWraper} className="wraper close">
                    <div ref={oder} className="menyItem__oder">
                        <div className="menyitem__antal">
                            <div className="menyitem__setantal">
                                <p>Antal: </p>
                                <div onClick={()=>{changeAntal("-")}}><a>-</a></div>
                                <div>{antal}</div>
                                <div onClick={()=>{changeAntal("+")}} className="plus" ><a>+</a></div>
                            </div>
                            <div className="total">
                                <p>80 kr</p>
                            </div>
                        </div>
                        <div className="menyitem__tilläg">
                            <div className="onskemal">
                                <p>Har du ett önske mål, </p>
                                <a onClick={()=>{handleOpen(form, formWraper)}}>Säg oss!</a>
                            </div>
                            <div className="menyitem__Addtocard">
                                <a>Lägg till i kundvagnen</a>
                            </div>
                        </div>
                        <div className="wraper__area" ref={formWraper}>
                            <div ref={form} className="menyitem__form">
                                <textarea />
                            </div>
                        </div>
                        <div  className="oder__close"><a ref={notclick}>Stämg X</a></div>
                        <div className="menyitem__divider"></div>
                        
                    </div>
                </div>
            </div>

    )
}
