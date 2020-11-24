import React, { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../contexts";
import { Typography, Divider, Layout, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const translate = {
  english: {
    contactMe: "Contact Me",
    email: "Email:",
    phone: "Phone:",
    summaryTitle: "Let's Talk",
    summaryText:
      "If you feel I am suitable for the position the company you are looking for. Feel free to get in touch with me for more infomation. Thank you!",
    btnDownload: "Download My CV",
  },
  vietnamese: {
    contactMe: "Thông tin liên hệ",
    email: "Email:",
    phone: "Điện thoại:",
    summaryTitle: "Hãy trò chuyện",
    summaryText:
      "Nếu bạn cảm thấy tôi phù hợp với vị trí mà công ty bạn đang tìm kiếm. Vui lòng liên hệ với tôi để biết thêm thông tin. Cảm ơn bạn!",
    btnDownload: "Tải hồ sơ của tôi",
  },
};

export const Contact = () => {
  console.log("Contact rendering!");
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const {
    contactMe,
    email,
    phone,
    summaryTitle,
    summaryText,
    btnDownload,
  } = translate[language];
  return (
    <Content className={isDarkMode ? "contact--darkMode" : "contact"}>
      <div className="contact__content">
        <Title>{contactMe}</Title>
        <div className="contact__content--flex">
          <ul className="contact__info">
            <li>
              <span>{email}</span>
              <span>hvbk3933@gmail.com</span>
            </li>
            <Divider />
            <li>
              <span>{phone}</span>
              <span>0978459324</span>
            </li>
            <Divider />
            <li>
              <span>Github:</span>
              <span>github.com/vanle031192</span>
            </li>
          </ul>
          <div className="contact__summary">
            <Paragraph>
              <h4>{summaryTitle}</h4>
              {summaryText}
            </Paragraph>
            <a href="/LeDinhHoaiVan-CV.pdf" target="_blank" download="cv.pdf">
              <Button type="primary" shape="round" icon={<DownloadOutlined />}>
                {btnDownload}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Content>
  );
};
