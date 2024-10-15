import { useState, useContext, createContext,useEffect } from "react";

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'dark' ? "light" : "dark")
    };

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);

    const values = {
        theme, setTheme,toggleTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}