import { createContext, useContext, useState } from "react";

//Create Context
const ThemeContext = createContext();

//provide context function to wrap
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of the ThemeProvider");
  return context;
}
