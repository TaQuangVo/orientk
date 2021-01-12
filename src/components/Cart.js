import React,{useContext, useRef} from 'react';
import "../style/cart.css";

//stipe
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

//context
import {CartContext} from "../contexts/CartContext";

//component
import CartItem from "../components/CartItem";
import CheckOutForm from "../components/CheckoutForm";



const stripePromise = loadStripe("pk_test_lcbWDSG0RW52kYBPbqG5SVYT00iZ4NBwwE");




export default function Cart() {
    const {cart, changeAntal, removeItem} = useContext(CartContext);
    const cartPaymentWrap = useRef(null);

    const handleOder = (val) => {
        cartPaymentWrap.current.style.transform =`translateX(${val})`;
    }
    const handleCloseCart = () =>{
        const overlay = document.querySelector(".cart__overlay");
        const body = document.querySelector(".cart");
        overlay.classList.add("cart__overlay--close");
        body.classList.add("cart--close");
    }   
    
console.log(cart);
    return (
        <div>
            <div onClick={handleCloseCart} className="cart__overlay cart__overlay--close"></div>
            <div className="cart cart--close">
                <div ref={cartPaymentWrap} className="cartPayment__wraper">
                    <div className="cart__content__wraper">
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
                                <button onClick={() => {handleOder("-50%")}}>
                                    <p>Bäställ </p>
                                    <p> - 150kr</p>
                                </button>
                            </div>
                        </div>
                    </div>
               
                    <div className="cart__payment__wraper">
                        <div className="cart__payment">
                                <h1>Betalning</h1>
                                <div className="payment__btns">
                                    <button>Med kort</button>
                                    <button>Vid hämtning</button>
                                </div>
                                <div className="payment__card">
                                    <Elements stripe={stripePromise}>
                                        <div className="card__payment__divider"></div>
                                        <h2>Kort betalning</h2>
                                        <CheckOutForm />
                                    </Elements>
                                </div>
                                <div className="payment__onPickUp">

                                </div>
                                <div className="backToCart"><h4>Tillbaka till Kundvagnen</h4></div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
