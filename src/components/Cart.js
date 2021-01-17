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

//img
import payment from "../img/payment.png";



const stripePromise = loadStripe("pk_test_lcbWDSG0RW52kYBPbqG5SVYT00iZ4NBwwE");




export default function Cart() {
    const {cart, cartTotal, changeAntal, removeItem} = useContext(CartContext);
    const cartPaymentWrap = useRef(null);
    const cardPayment = useRef(null);
    const onPickup = useRef(null);

    const handleOder = (val) => {
        if(cart.length > 0){
            cartPaymentWrap.current.style.transform =`translateX(${val})`;
            console.log(cart);
        }
    }
    const handleCloseCart = () =>{
        const overlay = document.querySelector(".cart__overlay");
        const body = document.querySelector(".cart");
        overlay.classList.add("cart__overlay--close");
        body.classList.add("cart--close");
    }   
    const handleShowPayment = (showPayment) => {
        if (showPayment === "card"){
            onPickup.current.classList.remove("showPayment");
            cardPayment.current.classList.add("showPayment");
        }if(showPayment === "pickup"){
            onPickup.current.classList.add("showPayment");
            cardPayment.current.classList.remove("showPayment");
        }
    }
    
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
                                {
                                    cart.length < 1 ? <h3 style={{textAlign:"center", fontFamily:"var(--font-two)", paddingTop:"50px",fontWeight:"300"}}>Kundvagnen är tom...</h3> : null
                                }
                            
                            </div>
                            <div className="cart__footer">
                                <p onClick={handleCloseCart}>Fortsätt handla</p>
                                <button onClick={() => {handleOder("-50%")}}>
                                    <p>Bäställ - {cartTotal}kr</p>
                                </button>
                            </div>
                        </div>
                    </div>
               
                    <div className="cart__payment__wraper">
                        <div className="cart__payment">
                                <h1>Betalning</h1>
                                <div className="payment__img">
                                    <img src={payment}/>
                                </div>
                                <div className="payment__btns">
                                    <button onClick={()=>{handleShowPayment("card")}}>Med kort -10%</button>
                                    <button onClick={()=>{handleShowPayment("pickup")}}>Vid hämtning</button>
                                </div>
                                <div ref= {cardPayment} className="payment__card">
                                    <Elements stripe={stripePromise}>
                                        <div className="card__payment__divider"></div>
                                        <h2>Kort betalning</h2>
                                        <CheckOutForm />
                                    </Elements>
                                </div>
                                <div ref={onPickup} className="payment__onPickUp">
                                <div className="card__payment__divider"></div>
                                        <h2>Betala vid hämtning</h2>
                                        <p>Vi tar emot kort och swish som betalning vid hämtning</p>
                                        <p>*Missar du inte  10% rabatt vid <a>kort-betaning</a>?*</p>
                                        <h4>Totala summa: 150kr</h4>
                                        <button>Oder</button>
                                </div>
                                <div className="backToCart"><h4 onClick={() => {handleOder("0%")}}>Tillbaka till Kundvagnen</h4></div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
