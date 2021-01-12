import React from 'react'
import "../style/checkoutform.css"

//stripe
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

export default function CheckOutForm() {

    const stripe = useStripe();
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
    return (
        <form className="checkoutform">
            <div className="checkoutform__inputs">
                <input placeholder="Namn"/>
                <input placeholder="e-mail (om du vill ha kvitto)"/>
            </div>
            <div  className="FormRow">
                <CardElement options={CARD_OPTIONS} />
            </div>
                    

            <button type="submit" disabled={!stripe}>Betala</button>
        </form>
    )
}
