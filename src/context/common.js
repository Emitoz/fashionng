import { createContext, useState } from "react";

export const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
    const [ searchMode, setSearchMode ] = useState(false);

    return (
        <CommonContext.Provider value={{ searchMode, setSearchMode }}>
            {children}
        </CommonContext.Provider>
    )
}