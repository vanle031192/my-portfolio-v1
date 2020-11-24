import React, { createContext } from "react";
import { useToggleState } from "../customHooks";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
