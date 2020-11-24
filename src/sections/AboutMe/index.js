import React, { useContext } from "react";
import { AboutSection, Overview } from "./components";
import { ThemeContext } from "../../contexts";
import { Layout } from "antd";

const { Content } = Layout;

export const AboutMe = () => {
  console.log("AboutMe rendering!");
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Content className={isDarkMode ? "about-me--darkMode" : "about-me"}>
      <AboutSection />
      <Overview />
    </Content>
  );
};
