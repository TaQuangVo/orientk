import React,{useState,createContext} from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([
        {
            id:"111111111",
            name:"Kebabrulle",
            ingrediens:"Kebab, salad, tomat, lök, kebabsås",
            price:50,
            rabatt:false,
            place: "willys",
            special: "",
            antal: 1,
            total: 50,
        },{
            id:"111134411",
            name:"Coca-cola",
            ingrediens: null,
            price:10,
            rabatt:false,
            place: "willys",
            special: "",
            antal:2,
            total:20
        }
    ]);
    
    const changeAntal = (tecken, oder) => {
        setCart((prev)=>{     
            return prev.map((items, index) => {
                if(index === oder){
                    if( tecken === "+"){
                        
                        return{
                        ...items,
                         antal: items.antal+1,
                         total: (items.antal+1) * items.price,
                         }
                    }
                    else{
                        if(items.antal-1 === 0){
                            removeItem(oder);
                        }else{
                            return{
                                ...items,
                                antal: items.antal-1,
                                total: (items.antal-1) * items.price,
                            }
                        }
                         
                         
                    }                
                }else{
                    return{...items};
                }
             })
             console.log(cart);
             
        })
    }

    const addToCard = (addItem) => {
        setCart((prev) => {
            let dublicated = null;
            prev.forEach((item, index) => {
                if(
                    item.id === addItem.id &&
                    item.place === addItem.place &&
                    item.special === addItem.special
                ){
                    dublicated = index;
                }
            })
            if(dublicated === null){
                    return[...prev, addItem]
            }else{
                    return prev.map((item, index) => {
                        if(index !== dublicated){
                            return {...item}
                        }
                        else{
                            return{
                                ...item,
                                antal: item.antal + addItem.antal
                            }
                        }
                    })
            }
        });
    }

    const removeItem = (oder) =>{
        setCart((prev) => {
            const res = prev.filter((item, index) => {
                if(index === oder){
                    return false;
                }else{
                    return true;
                }
            })
            return res;
        })
    }


    
    
    return(
        <CartContext.Provider value={{cart, changeAntal,removeItem,addToCard}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;