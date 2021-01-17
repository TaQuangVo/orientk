import React,{createContext,useState,useEffect} from "react";
import axios from "axios";


export const MenyContext = createContext();

export const MenyContextProvider = (props) => {
    const [foods, setFoods] = useState(null);

    useEffect(() => {
        axios.get("https://us-central1-orientk-23b4b.cloudfunctions.net/api/foods")
        .then(meny => {
            setFoods(meny.data);
        })
        .catch(err => console.log(err))
    }, []);

    return(
        <MenyContext.Provider value={foods}>
            {props.children}
        </MenyContext.Provider>
    )
}