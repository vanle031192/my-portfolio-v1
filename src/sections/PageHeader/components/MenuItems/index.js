import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext, ThemeContext } from "../../../../contexts/";
import { Menu, Switch } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  WhatsAppOutlined,
  SettingFilled,
  GlobalOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const { Item, SubMenu } = Menu;

const activeMenuStyles = {
  fontWeight: "bolder",
  color: "#1890ff",
};

const translate = {
  english: {
    home: "Home",
    aboutMe: "About Me",
    contact: "Contact",
    settings: "Settings",
    theme: "Change Theme",
    dark: "dark",
    light: "light",
    lang: "Choose Language",
    eng: "English",
    vn: "Vietnamese",
  },
  vietnamese: {
    home: "Trang chủ",
    aboutMe: "Giới thiệu",
    contact: "Liên hệ",
    settings: "Cài đặt",
    theme: "Đổi giao diện",
    dark: "Tối",
    light: "Sáng",
    lang: "Chọn ngôn ngữ",
    eng: "Tiếng Anh",
    vn: "Tiếng Việt",
  },
};

export const MenuItems = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { toggleTheme } = useContext(ThemeContext);
  const {
    home,
    aboutMe,
    contact,
    settings,
    theme,
    dark,
    light,
    lang,
    eng,
    vn,
  } = translate[language];
  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      <Item key="/home">
        <NavLink exact to="/" activeStyle={activeMenuStyles}>
          <HomeOutlined />
          {home}
        </NavLink>
      </Item>
      <Item key="/about-me">
        <NavLink to="/about-me" activeStyle={activeMenuStyles}>
          <InfoCircleOutlined />
          {aboutMe}
        </NavLink>
      </Item>
      <Item key="/contact">
        <NavLink to="/contact" activeStyle={activeMenuStyles}>
          <WhatsAppOutlined />
          {contact}
        </NavLink>
      </Item>

      <SubMenu title={settings} icon={<SettingFilled />}>
        <Item key="/user">
          <BulbOutlined />
          {theme}
          <Switch
            defaultChecked
            className="switch-button"
            onChange={toggleTheme}
            checkedChildren={light}
            unCheckedChildren={dark}
          />
        </Item>

        <Item key="/logout">
          <div>
            <GlobalOutlined />
            {lang}
            <Switch
              defaultChecked
              className="switch-button"
              onChange={changeLanguage}
              checkedChildren={eng}
              unCheckedChildren={vn}
            />
          </div>
        </Item>
      </SubMenu>
    </Menu>
  );
};
