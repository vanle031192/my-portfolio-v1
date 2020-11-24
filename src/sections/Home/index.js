import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import { LanguageContext, ThemeContext } from "../../contexts";
import { Layout } from "antd";

const { Content } = Layout;

const translate = {
  english: {
    name: "Van Le",
    job: "now a Web Developer",
    me: "I'm",
    greeting: "Hello World!",
  },
  vietnamese: {
    name: "là Hoài Văn",
    job: "là một lập trình viên website",
    me: "Tôi",
    greeting: "Chào mọi người!",
  },
};

export const Home = () => {
  console.log("Home rendering!");
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const { name, job, me, greeting } = translate[language];
  return (
    <Content className={isDarkMode ? "home--darkMode" : "home"}>
      <div className={isDarkMode ? "home-content--darkMode" : "home-content"}>
        <h1>{greeting}</h1>
        <h2>
          {me}{" "}
          <span className="home__type-writer">
            <Typewriter
              options={{
                strings: [name, job],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>
      </div>
    </Content>
  );
};
