import react,{useState,createContext} from "react";

export const DrinkContext = createContext();

const DrinkContextProvider = (props) => {
    const [drinks, setDrinks] = useState([
        {
            id:"123456789",
            name: "Coca-cola",
            price: 10,
            rabatt: false,
            rabattPrice:10,
            
        },{
            id:"223453789",
            name: "Fanta Exotic",
            price: 10,
            rabatt: false,
            rabattPrice:10,
        },{
            id:"324456789",
            name: "Yran",
            price: 10,
            rabatt: false,
            rabattPrice:10,
        },{
            id:"423456449",
            name: "PowerKing",
            price: 10,
            rabatt: false,
            rabattPrice:10,
        }
    ])
    return(
        <DrinkContext.Provider value={drinks}>
            {props.children}
        </DrinkContext.Provider>
    )
}
export default DrinkContextProvider;