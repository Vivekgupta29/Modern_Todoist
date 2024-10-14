import { useState, useContext, createContext } from "react";

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'dark' ? "light" : "dark")
    };

    useEffect(() => {
        // Apply the theme to the root element
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            // System theme detection
            const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.toggle("dark", systemPreference);
            localStorage.setItem("theme", "system");
        }
    }, [theme]);

    const values = {
        theme, setTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}