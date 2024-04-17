"use client";

import React, { useEffect, useState, createContext, useContext } from 'react'

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode; 
}

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void; 
}

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");  

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark"); 
  }; 

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;
    
    if (localTheme) {
        setTheme(localTheme);
        document.documentElement.classList.toggle("dark", localTheme === "dark");
      } else {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDarkMode ? "dark" : "light"); // Set theme based on system preference
        document.documentElement.classList.toggle("dark", prefersDarkMode);
      }
}, []);

  
    return <ThemeContext.Provider value={{
        theme, 
        toggleTheme
    }}>
        {children}
        </ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if(context === null){
        throw new Error ("useTheme must be used within a ThemeContextProvider")
 
    }
    return context; 
}
