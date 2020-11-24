import React, { useContext } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, AboutMe, Contact, NotFound } from "./sections/index";
import { PageHeader } from "./sections";
import { LanguageProvider, ThemeContext } from "./contexts";
import { Layout, Affix } from "antd";
import "./styles/index.css";

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Router>
      <LanguageProvider>
        <Layout id={isDarkMode ? "app--darkMode" : "app"}>
          <Affix offsetTop={0}>
            <PageHeader />
          </Affix>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-me" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </LanguageProvider>
    </Router>
  );
};

export default App;
