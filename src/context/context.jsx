import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);


    return <AppContext.Provider value={{ characters, setCharacters }}>
        {children}
    </AppContext.Provider>
}