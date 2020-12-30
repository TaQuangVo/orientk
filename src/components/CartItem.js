import React from 'react';
import "../style/cartIcon.css";

export default function CartItem({item, index, changeAntal, removeItem}) {

    return (
        <div className="cartItem">
            <div className="cart__title">
                <div className="cartItem__name">
                    <h3>{item.name}</h3>
                </div>
                <div className="cartItem__price">
                    <h3>{item.total}</h3>
                </div>
            </div>
            <div className="cartItem__ingrediens">
                <p>{item.ingrediens}</p>
            </div>
            <div className="cartItem__antal">
                <div className="antal__wraper">
                    <p>Antal:</p>
                    <div className ="change__antal">
                        <p onClick={()=>{changeAntal("-",index)}}>-</p>
                        <p>{item.antal}</p>
                        <p onClick={()=>{changeAntal("+",index)}}>+</p>
                    </div>
                </div>
                
                <div onClick={()=>{removeItem(index)}} className="cartItem__remove">
                    <p>Tabort</p>
                </div>
                
            </div>
            <div className="cartItem__specialneed">
                {
                    (item.special === "" ) && (<p>Ingen specielt önskemål!</p>)
                }
                {
                    item.special !== "" && (<p>{item.special}</p>)
                }              
            </div>
            <div className="cartItem__specialneed">
                {
                    (item.place === "willys" ) && (<p>Vagnen framför Willys</p>)
                }
                {
                    item.place === "orient" && (<p>Vagnen framför Orienthallen</p>)
                }              
            </div>
        </div>
    )
}
