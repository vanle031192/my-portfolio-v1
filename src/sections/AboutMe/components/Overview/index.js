import React, { useContext } from "react";
import { Typography, Divider, Anchor, Tag, List, Card } from "antd";
import { LanguageContext } from "../../../../contexts";

import img from "../../../../assets/img/img-bg.png";

const { Title, Paragraph } = Typography;
const { Link } = Anchor;

const translate = {
  english: {
    info: "Infomation",
    eduAnchor: "Education",
    actiAnchor: "Activities",
    skillsAnchor: "Skills",
    coursesAnchor: "Courses",
    projectAnchor: "Projects",
    resourcesAnchor: "Resources",
    eduTitle: "Education",
    actiTitle: "My Journey",
    skillsTitle: "Skills I have learned",
    coursesTitle: "Courses that I have learned from:",
    projectTitle: "Projects",
    resourcesTitle: "Resources that I have researched from:",
    university: "UNIVERSITY OF TECHNOLOGY HCMC",
    major: "Automotive Engineering",
    firstCompany: "TAN THANH CONTAINER CORP",
    firstCompanyJob: "Design Engineering",
    secondCompany: "CALIFORNIA FITNESS & YOGA",
    secondCompanyJob: "SEO Executive",
    study: "SELF-STUDY",
    studyJob: "Web Developer",
    resourcesTextOne:
      "Social networks for developers Github, Stackoverflow, Medium, Youtube,…",
    resourcesTextTwo: "Some library/framework documentation websites.",
    books: "Books",
    current: "Current",
    coming: "Coming Soon",
    project: "Project Title",
  },
  vietnamese: {
    info: "Thông tin",
    eduAnchor: "Học vấn",
    actiAnchor: "Hành trình",
    skillsAnchor: "Kỹ năng",
    coursesAnchor: "Khóa học",
    projectAnchor: "Dự án",
    resourcesAnchor: "Nguồn tài liệu",
    eduTitle: "Học vấn",
    actiTitle: "Hành trình",
    skillsTitle: "Các kỹ năng tôi đã học:",
    coursesTitle: "Các khóa học tôi đã học:",
    projectTitle: "Dự án",
    resourcesTitle: "Nguồn tài liệu tôi tra cứu:",
    university: "Đại học Bách Khoa Hồ Chí Minh",
    major: "Kỹ sư Ô tô",
    firstCompany: "Công Ty Cổ Phần Thương Mại Cơ Khí Tân Thanh",
    firstCompanyJob: "Kỹ sư Thiết kế",
    secondCompany: "Công Ty TNHH Thể Hình & Yoga California",
    secondCompanyJob: "Nhân viên SEO",
    study: "Tự Học",
    studyJob: "Lập trình viên Website",
    resourcesTextOne:
      "Các mạng xã hội cho lập trình viên như Github, StackOverFlow, Medium, Youtube,..",
    resourcesTextTwo: "Các trang web tài liệu của thư viện",
    books: "Sách",
    current: "Hiện tại",
    coming: "Đang tiến hành",
    project: "Dự án",
  },
};

export const Overview = () => {
  console.log("Overview rendering!");
  const { language } = useContext(LanguageContext);
  const { ...rest } = translate[language];
  const data = [
    {
      title: "Logicle",
      image: img,
      description: "HTML, CSS",
      url: "https://vanle031192.github.io/logicle-homepage/",
    },
    {
      title: "Natour",
      image: img,
      description: "HTML, CSS",
      url: "https://vanle031192.github.io/natour-learning-project/",
    },
    {
      title: "Forkify",
      image: img,
      description: "JavaScript",
      url: "https://vanle031192.github.io/forkify-learning-project/",
    },
    {
      title: "TinyHouse",
      image: img,
      description: "React, Node",
      url: "https://www.tinyhouse.app/",
    },
    {
      title: translate[language].project,
      image: img,
      description: translate[language].coming,
      url: "https://google.com",
    },
    {
      title: translate[language].project,
      image: img,
      description: translate[language].coming,
      url: "https://google.com",
    },
  ];
  return (
    <div className="infomation">
      <Title>Infomation</Title>

      <div className="infomation__content">
        <div className="infomation__anchor">
          <Anchor offsetTop={150}>
            <Link href="#infomation__education" title={rest.eduAnchor} />
            <Link href="#infomation__activities" title={rest.actiAnchor} />
            <Link href="#infomation__skills" title={rest.skillsAnchor} />
            <Link href="#infomation__courses" title={rest.coursesAnchor} />
            <Link href="#infomation__projects" title={rest.projectAnchor} />
            <Link href="#infomation__resources" title={rest.resourcesAnchor} />
          </Anchor>
        </div>

        <div className="infomation__overview">
          <div id="infomation__education">
            <h2>{rest.eduTitle}</h2>
            <Paragraph>
              <div className="infomation--flex">
                <p>{rest.university}</p>
                <p>9/2010 - 3/2015</p>
              </div>

              <p>{rest.major}</p>
            </Paragraph>
          </div>
          <Divider />
          <div id="infomation__activities">
            <h2>{rest.actiTitle}</h2>
            <Paragraph>
              <div className="infomation--flex">
                <p>{rest.firstCompany}</p>
                <p>2015 - 2017</p>
              </div>
              <p>{rest.firstCompanyJob}</p>
            </Paragraph>
            <Paragraph>
              <div className="infomation--flex">
                <p>{rest.secondCompany}</p>
                <p>2017 - 2019</p>
              </div>
              <p>{rest.secondCompanyJob}</p>
            </Paragraph>

            <Paragraph>
              <div className="infomation--flex">
                <p>{rest.study}</p>
                <p>9/2019 - {rest.current}</p>
              </div>
              <p>{rest.studyJob}</p>
            </Paragraph>
          </div>
          <Divider />
          <div id="infomation__skills">
            <h2>{rest.skillsTitle}</h2>
            <ul>
              <Tag color="blue">
                <li>HTML / CSS / SCSS</li>
              </Tag>
              <Tag color="blue">
                <li>JavaScript (ES5, ES6)</li>
              </Tag>
              <Tag color="blue">
                <li>NodeJs / Express / MongoDB / RESTful Api</li>
              </Tag>
              <Tag color="blue">
                <li>Apollo / GraphQL</li>
              </Tag>
              <Tag color="blue">
                <li>ReactJs / NextJs / Apollo Client</li>
              </Tag>
              <Tag color="blue">
                <li>Typescript / Webpack</li>
              </Tag>
              <Tag color="blue">
                <li>Design Patterns / Algorithms / Data-Structures / OOP</li>
              </Tag>
              <Tag color="blue">
                <li>Git / Github</li>
              </Tag>
            </ul>
          </div>
          <Divider />
          <div id="infomation__courses">
            <h2>{rest.coursesTitle}</h2>

            <div>
              <a
                href="https://teamtreehouse.com/library/html-basics-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML Basics
              </a>
              - Guil Hernandez
            </div>
            <div>
              <a
                href="https://teamtreehouse.com/library/css-basics"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Basics
              </a>
              - Guil Hernandez
            </div>
            <div>
              <a
                href="https://teamtreehouse.com/library/css-layout-basics"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Layout Basics
              </a>
              - Guil Hernandez
            </div>
            <div>
              <a
                href="https://teamtreehouse.com/library/css-flexbox-layout"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Flexbox Layout
              </a>
              - Guil Hernandez
            </div>
            <div>
              <a
                href="https://scrimba.com/learn/responsive"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Responsive Web Design Bootcamp
              </a>
              - Kevin Powell
            </div>
            <div>
              <a
                href="https://www.udemy.com/course/advanced-css-and-sass/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced CSS and Sass: Flexbox, Grid, Animations and More!
              </a>
              - Jonas Schmedtmann
            </div>
            <div>
              <a
                href="https://www.udemy.com/course/the-complete-javascript-course/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Complete JavaScript Course 2019
              </a>
              - Jonas Schmedtmann
            </div>
            <div>
              <a
                href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js, Express, MongoDB & More: The Complete Bootcamp 2019
              </a>
              - Jonas Schmedtmann
            </div>
            <div>
              <a
                href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript Algorithms and Data Structures Masterclass
              </a>
              - Colt Steele
            </div>
            <div>
              <a
                href="https://www.udemy.com/course/modern-react-bootcamp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Modern React Bootcamp (Hooks, Context, NextJS, Router)
              </a>
              - Colt Steele
            </div>
            <div>
              <a
                href="https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Programming Foundations: Object-Oriented Design
              </a>
              - Barron Stone & Olivia Stone
            </div>
            <div>
              <a
                href="https://www.newline.co/tinyhouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Fullstack React Masterclass with Typescript and Graphql
              </a>
              - Hassan Djirdeh & Jing Chen
            </div>
          </div>
          <Divider />
          <div id="infomation__projects">
            <h2>{rest.projectTitle}</h2>
            <div className="infomation__projects--list-card">
              <List
                grid={{
                  gutter: 8,
                  column: 3,
                  xs: 1,
                  sm: 2,
                  md: 3,
                }}
                dataSource={data}
                renderItem={(data) => (
                  <List.Item>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        title={data.title}
                        hoverable
                        size="small"
                        style={{ width: "80%" }}
                        cover={
                          <img
                            id="img-project"
                            alt="example"
                            src={data.image}
                          />
                        }
                      >
                        <div className="text-hover">{data.description}</div>
                      </Card>
                    </a>
                  </List.Item>
                )}
              />
            </div>
            <div className="infomation__projects--list-card--onlyMobile">
              <List
                grid={{
                  gutter: 8,
                  column: 3,
                  xs: 1,
                  sm: 2,
                  md: 3,
                }}
                pagination={{
                  pageSize: 2,
                }}
                dataSource={data}
                renderItem={(data) => (
                  <List.Item>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card
                        title={data.title}
                        hoverable
                        size="small"
                        style={{ width: "80%" }}
                        cover={<img alt="example" src={data.image} />}
                      ></Card>
                    </a>
                    ,
                  </List.Item>
                )}
              />
            </div>
          </div>

          <Divider />
          <div id="infomation__resources">
            <h2>{rest.resourcesTitle}</h2>
            <p>{rest.resourcesTextOne}</p>
            <p>{rest.resourcesTextTwo}</p>
            <div>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML "
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML: HyperText Markup Language | MDN{" "}
              </a>
            </div>
            <div>
              <a
                href="https://css-tricks.com/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS-Tricks
              </a>
            </div>

            <div>
              <a
                href="https://www.w3.org/TR/CSS22/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                Cascading Style Sheets Level 2 Revision 2 (CSS 2.2)
                Specification
              </a>
            </div>
            <div>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript | MDN
              </a>
            </div>
            <div>
              {rest.books}
              <div>
                <a
                  href="https://github.com/WebHero0544/books/blob/master/Professional.JavaScript.for.Web.Developers.4th.Edition.2019.10.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Professional JavaScript for Web Developers 4th edition
                </a>
                – Matt frisbie/ Nicolas C.ZaKas
              </div>
              <div>
                <a
                  href="https://www.goodreads.com/en/book/show/43125355-dive-into-design-patterns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dive Into Design Patterns 2019
                </a>
                - Alexander Shvets
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
