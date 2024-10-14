import { createContext, useContext, useState } from "react"

const UniversalContext = createContext();

export const useUniversalContext = () => useContext(UniversalContext);

export const UniversalContextProvider = ({ children }) => {

    const [leftSideBar, setLeftSideBar] = useState(false);

    const values = {
        leftSideBar, setLeftSideBar
    }

    return (
        <UniversalContext.Provider value={values}>
            {children}
        </UniversalContext.Provider>
    );
}