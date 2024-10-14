import { useState, useContext, createContext } from "react";

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    const values = {
        theme, setTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}