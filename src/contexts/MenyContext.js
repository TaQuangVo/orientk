import React,{createContext,useState} from "react";

export const MenyContext = createContext();

export const MenyContextProvider = (props) => {
    const [foods, setFoods] = useState([
        {
            id:"211111111",
            name:"Kebabrulle",
            ingrediens:"Kebab, salad, tomat, lök, kebabsås",
            price:50,
            rabatt:false,
            rabattPrice: 10

        },{
            id:"222222222",
            name:"Falafelrulle",
            ingrediens:"Falafel, salad, tomat, lök, kebabsås",
            price:40,
            rabatt:false,
            rabattPrice: 10
        },{
            id:"3222222233",
            name:"Falafeltalrik",
            ingrediens:"Falafel, salad, tomat, lök, kebabsås",
            price:50,
            rabatt:false,
            rabattPrice: 10
        },{
            id:"42222444",
            name:"Kebabtalrik",
            ingrediens:"Falafel, salad, tomat, lök, kebabsås",
            price:40,
            rabatt:false,
            rabattPrice: 10
        },{
            id:"511111111",
            name:"Kebabrulle",
            ingrediens:"Kebab, salad, tomat, lök, kebabsås",
            price:50,
            rabatt:false,
            rabattPrice: 10

        },{
            id:"622222222",
            name:"Falafelrulle",
            ingrediens:"Falafel, salad, tomat, lök, kebabsås",
            price:40,
            rabatt:false,
            rabattPrice: 10
        },{
            id:"7222222233",
            name:"Falafeltalrik",
            ingrediens:"Falafel, salad, tomat, lök, kebabsås",
            price:50,
            rabatt:false,
            rabattPrice: 10
        },{
            id:"82222444",
            name:"Kebabtalrik",
            ingrediens:"Falafel, salad, tomat, lök, kebabsås",
            price:40,
            rabatt:false,
            rabattPrice: 10
        }
    ]);
    return(
        <MenyContext.Provider value={foods}>
            {props.children}
        </MenyContext.Provider>
    )
}