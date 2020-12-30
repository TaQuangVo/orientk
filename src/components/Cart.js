import React,{useContext} from 'react';
import "../style/cart.css";

//context
import {CartContext} from "../contexts/CartContext";

//component
import CartItem from "../components/CartItem";

const handleCloseCart = () =>{
    const overlay = document.querySelector(".cart__overlay");
    const body = document.querySelector(".cart");
    overlay.classList.add("cart__overlay--close");
    body.classList.add("cart--close");
}   

export default function Cart() {
    const {cart, changeAntal, removeItem} = useContext(CartContext);
    console.log(cart);
    return (
        <div>
            <div onClick={handleCloseCart} className="cart__overlay cart__overlay--close"></div>
            <div className="cart cart--close">
                <div className="cart__content">
                    <div className="cart__header">
                        <div className="header__body">
                            <p>Kundvagnen</p>
                            <div onClick={handleCloseCart} className="cart__closeBtn">
                                <p>X</p>
                            </div>
                        </div>
                        <div className="header__divider"></div>
                    </div>
                    <div className="cart__body">
                        {
                            cart.map((item, index) => {
                                return( <CartItem removeItem={removeItem} item={item} index={index} changeAntal={changeAntal} key={index}/>)
                            })
                        }
                       
                    </div>
                    <div className="cart__footer">
                        <p onClick={handleCloseCart}>Fortsätt handla</p>
                        <button>
                            <p>Bäställ </p>
                            <p> - 150kr</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
