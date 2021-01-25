const drinkMeny = {
    id:"123456789",
    name: "Coca-cola",
    price: 10,
    rabatt: false,
    rabattPrice:10,
    
};
const foodMeny = {
    id:"211111111",
    name:"Kebabrulle",
    ingrediens:"Kebab, salad, tomat, lök, kebabsås",
    price:50,
    rabatt:false,
    rabattPrice: 10
};
const cartItem = {
    id:"111111111",
    name:"Kebabrulle",
    ingrediens:"Kebab, salad, tomat, lök, kebabsås",
    price:50,
    rabatt:false,
    place: "willys",
    special: "",
    antal: 1,
    total: 50,
};
const creatmeny = {
    isFood: true,
    name:"name of the food",
    ingrediens:"what ever inside the food",
    price:100,
    rabatt:true,
    rabattPrice: 50,
}

//use to confirm order
const payment_request = [
    {
        "name":"name",
        "email":"email@email.com",
        "paymentMethod":"card",
        "payload": {
            "id":"dZ9IiVgTNWHqLedMduZu",
            "name": "Kebabsalad",
            "price": 12,
            "rabatt": true,
            "rabattPrice": 2,
            "antal": 2,
            "special": "item.special",
            "place": "willys",
            "ingrediens": "massa med saker"
        },
      }
]
const payment_request_return = {
    "oders": [
        {
            "id": "thisismyfkingid1",
            "name": "customrulle1",
            "price": 5001,
            "rabatt": false,
            "rabattPrice": 50001,
            "priceToCalcutate": 5001,
            "antal": 1,
            "totalPrice": 5001,
            "special": "mycket lök"
        }
    ],
    "total": 325250,
    "client_secret": "pi_1I9tiJA7D489xVTkr3BwZ4ku_secret_Sz3NWiWpvei9PzSj0LEvkn3Ru"
}