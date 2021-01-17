import React,{useContext, useState} from 'react'
import "../style/checkoutform.css"
import axios from "axios";

//context
import {CartContext} from "../contexts/CartContext";

//stripe
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

export default function CheckOutForm() {

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardFormComplete, setIsCardformComplete] = useState(false);
  const [isNameFormComplete, setIsNameformComplete] = useState(false);
  const [checkoutError, setChekoutError] = useState("");
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
    if(e.target.value === ""){
      setIsNameformComplete(false);
    }else{
      setIsNameformComplete(true);
    }
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onCardChange = (e) => {

    setIsCardformComplete(e.complete);

    if(e.error !== undefined){
      console.log(e.error);
      setChekoutError(e.error.message);
    }else{
      setChekoutError("");
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if(isProcessing){
      setChekoutError("Processing...");
    }else if(!isCardFormComplete || !isNameFormComplete){
      setChekoutError("Fyll i nödvändiga rutor!");
    }
    else{
    setIsProcessing(true); 

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
      console.log("nått gick fel med att hämta client_secrett från stripe, kan va någon i meny inte finns längre i databasen ");
      setChekoutError("Något gick fel!")
    }else{
      //get cardElement and billing ditails,
      const cardElement = elements.getElement(CardElement);
      const billingDetails = {
        name: name,
        email: (email=="")? null : email,
      }
      //requse payment medthod;
      const paymentMethodReq = await stripe.createPaymentMethod({
        type:"card",
        card: cardElement,
        billing_details:billingDetails,
      })
      if(paymentMethodReq.paymentMethod == undefined){
        setChekoutError(paymentMethodReq.error.message) ;
        console.log("nått gick fel med att skappfa en betalningmetod, kan va att att fel kortnr");
        
      }else{
        //confirm cardpayment
        const confirmCardPayment = await stripe.confirmCardPayment(confirmOrder.data.client_secret,{
          payment_method: paymentMethodReq.paymentMethod.id,
        });
        console.log(confirmOrder);
        console.log(paymentMethodReq);
        console.log(confirmCardPayment);
      }
    }
    setIsProcessing(false);
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
          <button onClick={(e)=>{handleFormSubmit(e)}} type="submit" 
          disabled={(isProcessing || !isNameFormComplete || !isCardFormComplete)}>
            {isProcessing ? "Loading..." : "Betala"}
          </button>
          <p className="checkout__error">{checkoutError}</p>
      </form>
    )
}