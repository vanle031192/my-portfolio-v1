import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("english");

  const stringLanguage = language === "english" ? "vietnamese" : "english";

  const changeLanguage = () => setLanguage(stringLanguage);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
