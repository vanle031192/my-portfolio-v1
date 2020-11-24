import React, { useContext } from "react";
import { LanguageContext } from "../../../../contexts";
import { Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

const translate = {
  english: {
    intro: "Introduction",
    introName: "Name",
    introDoB: "Date of Birth",
    introAddress: "Address",
    introNameValue: "Le Dinh Hoai Van",
    introAddressValue: "Ho Chi Minh City",
    introSummaryTitle: "How I start to become a Developer?",
    introSummaryText:
      "After graduation, I worked for 2 years as a design engineering. But I wasn't suitable for this job and I had a similar time in another job, SEO. In that time, I worked with the website and knew about HTML, CSS and JS. I found it interesting so I learned about them myself. Then, I decided to become a developer for the rest of my journey. I spent about one year to self-study, I learned from the internet, youtube and online courses like TeamTreeHouse, Udemy, Scrimba, Newline, ... and some documentation websites.",
  },
  vietnamese: {
    intro: "Tổng quan",
    introName: "Họ tên",
    introDoB: "Ngày sinh",
    introAddress: "Địa chỉ",
    introNameValue: "Lê Đinh Hoài Văn",
    introAddressValue: "Thành phố Hồ Chí Minh",
    introSummaryTitle: "Tôi bắt đầu trở thành lập trình viên như thế nào?",
    introSummaryText:
      "Sau khi tốt nghiệp, tôi làm kỹ sư thiết kế được 2 năm. Nhưng tôi không phù hợp với công việc này và tôi đã có thời gian tương tự trong một công việc khác, SEO. Trong thời gian đó, tôi làm việc với trang web và biết về HTML, CSS và JS. Tôi thấy thú vị nên đã tự tìm hiểu về chúng. Sau đó, tôi quyết định trở thành một lập trình viên trong suốt chặng đường còn lại của mình. Tôi đã dành khoảng một năm để tự học, tôi học từ internet, youtube và các khóa học trực tuyến như TeamTreeHouse, Udemy, Scrimba, Newline, ... và một số trang web tài liệu.",
  },
};

export const AboutSection = () => {
  console.log("AboutSection rendering!");
  const { language } = useContext(LanguageContext);
  const {
    intro,
    introName,
    introNameValue,
    introDoB,
    introAddress,
    introAddressValue,
    introSummaryTitle,
    introSummaryText,
  } = translate[language];
  return (
    <div className="introduction">
      <Title>{intro}</Title>
      <div className="introduction__content">
        <ul className="introduction__info">
          <li>
            <span>{`${introName}:`}</span>
            <span>{introNameValue}</span>
          </li>
          <Divider />
          <li>
            <span>{`${introDoB}:`}</span>
            <span>03/11/1992</span>
          </li>
          <Divider />
          <li>
            <span>{`${introAddress}:`}</span>
            <span>{introAddressValue}</span>
          </li>
        </ul>
        <Paragraph className="introduction__summary">
          <h4>{introSummaryTitle}</h4>
          {introSummaryText}
        </Paragraph>
      </div>
    </div>
  );
};
