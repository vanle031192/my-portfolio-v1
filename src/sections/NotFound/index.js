import React, { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../contexts";
import { Typography, Layout, Empty } from "antd";

const { Title } = Typography;
const { Content } = Layout;

const translate = {
  english: {
    title: "Uh oh! Something went wrong :(",
    description: "The page you're looking for can't be found or no data.",
  },
  vietnamese: {
    title: "Ôi không! Đã xảy ra lỗi gì đó :(",
    description: "Không thể tìm thấy trang bạn đang tìm hoặc không có dữ liệu.",
  },
};

export const NotFound = () => {
  console.log("NotFound rendering!");
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const { title, description } = translate[language];

  return (
    <Content className={isDarkMode ? "notfound--darkMode" : "notfound"}>
      <Title
        style={
          isDarkMode
            ? { color: "rgba(255, 255, 255)" }
            : { color: "rgba(0, 0, 0, 0.85)" }
        }
      >
        {title}
      </Title>

      <Empty description={description} />
    </Content>
  );
};
