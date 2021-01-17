import react,{useState,createContext,useEffect} from "react";
import axios from "axios";

export const DrinkContext = createContext();

const DrinkContextProvider = (props) => {
    const [drinks, setDrinks] = useState(null)

    useEffect(() => {
        axios.get("https://us-central1-orientk-23b4b.cloudfunctions.net/api/drinks")
        .then(meny => {
            setDrinks(meny.data);
            console.log(meny.data);
        })
        .catch(err => console.log(err))
    },[]);

    return(
        <DrinkContext.Provider value={drinks}>
            {props.children}
        </DrinkContext.Provider>
    )
}
export default DrinkContextProvider;