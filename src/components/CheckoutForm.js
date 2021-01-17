import React,{useContext, useState} from 'react'
import "../style/checkoutform.css"
import axios from "axios";

//context
import {CartContext} from "../contexts/CartContext";

//stripe
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

export default function CheckOutForm() {

  const [isProcessing, setIsProcessing] = useState(false);
  const [chekoutError, setChekoutError] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 

  const {cart} = useContext(CartContext);

  const stripe = useStripe();
  const elements = useElements();


  const CARD_OPTIONS = {
      font:[{
          cssSrc: "https://fonts.googleapis.com/css2?family=Exo&display=swap"
      }],
      iconStyle: 'solid',
      hidePostalCode: true,
      style: {
        base: {
          iconColor: 'white',
          color: 'white',
          fontWeight: 500,
          fontFamily: '"Exo", sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {color: '#white'},
          '::placeholder': {color: "white"},
        },
        invalid: {
          iconColor: '#ffc7ee',
          color: '#ffc7ee',
        },
      },
    };
  const handleNameChange = (e) =>{
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onCardChange = (e) => {
    if(e.complete ===true){
      console.log("complete");
    }
    if(e.complete ===false){
      console.log("incomplete");
    }
    if(e.error !== undefined){
      console.log(e.error);
    }
  }
  const handleFormSubmit = async (e) => {
    setIsProcessing(true); 
    e.preventDefault();

    //preset payload for geting clientsecret,
    const payload = [];
    cart.forEach(item => {
      payload.push({
          "id":item.id,
          "name": item.name,
          "price": item.price,
          "rabatt": item.rabatt,
          "rabattPrice": item.rabattPrice,
          "antal": item.antal,
          "special": item.special,
          "place":item.place,
          "ingrediens": item.ingrediens,
      });
    });

    //confirm order and get clientsecret,
    const confirmOrder = await axios.post("https://us-central1-orientk-23b4b.cloudfunctions.net/api/payment_intents",payload);

    if(confirmOrder.data.client_secret == null){

      setIsProcessing(false);
      console.log("nått gick fel");

    }else{

      //get cardElement and billing ditails,
      const cardElement = elements.getElement(CardElement);
      const billingDetails = {
        name: name,
        email: email,
      }

      //requse payment medthod;
      const paymentMethodReq = await stripe.createPaymentMethod({
        type:"card",
        card: cardElement,
        billing_details:billingDetails,
      })
      //confirm cardpayment
      const confirmCardPayment = await stripe.confirmCardPayment(confirmOrder.data.client_secret,{
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      console.log(paymentMethodReq);
      console.log(confirmCardPayment);
      console.log(confirmOrder);
    }

  }

  return (
      <form className="checkoutform">
          <div className="checkoutform__inputs">
              <input onChange={(e)=>{handleNameChange(e)}} placeholder="Namn" name="name"/>
              <input onChange={(e)=>{handleEmailChange(e)}} placeholder="e-mail (om du vill ha kvitto)" name="email"/>
          </div>
          <div  className="FormRow">
              <CardElement onChange={(e)=>{onCardChange(e)}} options={CARD_OPTIONS} />
          </div>
          <button onClick={(e)=>{handleFormSubmit(e)}} type="submit" disabled={isProcessing}>{isProcessing ? "Loading..." : "Betala"}</button>
      </form>
    )
}
