import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import counterContext from "./counterContext";

function CounterProvider ({children}) {
    const counterState = useState(0)

    return ( 
    <>
        <counterContext.Provider value={counterState}>
        {children}
        </counterContext.Provider>
    </>
    )

}

export default CounterProvider;