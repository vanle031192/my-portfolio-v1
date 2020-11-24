import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts";

import { MenuItems } from "./components";
import { Layout } from "antd";

import logo from "../../assets/img/van-dev-try.jpg";

const { Header } = Layout;

export const PageHeader = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Header className={isDarkMode ? "app-header--darkMode" : "app-header"}>
      <div className="app-header__logo">
        <Link to="/">
          <img src={logo} alt="VanDEVTry Logo" />
        </Link>
      </div>

      <div className="app-header__menu-section">
        <MenuItems />
      </div>
    </Header>
  );
};
