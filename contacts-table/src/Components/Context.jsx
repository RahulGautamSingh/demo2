import {createContext, useReducer} from "react";

let ContactContext = createContext();

export default ContactContext;

let initialState = {
    arr:[],
}
function reducer(state,action)
{   let newCopy = [...state.arr];
    switch(action[0])
    {
        case "ADD":{
                newCopy.push(action[1]);
                return {arr:newCopy}
        }
        case "DEL":{
            for(let index=0;index<newCopy.length;index++)
            {
                if(action[1].id===newCopy[index].id) 
                {newCopy.splice(index,1);break;}
            }
            return {arr:newCopy}
    }
    default : throw new Error("karna kya chhahte ho")
    }
}


export function ContactContextProvider(props)
{
    
    
    let [contactState,dispatch] = useReducer(reducer,initialState)
    return (
        <ContactContext.Provider value={{
            contactState,
            dispatch
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}