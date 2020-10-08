import React from "react";
import Fade from "react-reveal/Fade";

import * as PageComponents from "./components";
import Icon from "../../components/Icons";
import Page from "../../Page";
import Text from "../../components/Text";
import Avatar from "../../components/Avatar";
import Separator from "../../components/Separator";
import { Button } from "../../components/Button";

class Landing extends React.Component {
  state = {
    selectedTab: 0,
    scrollTop: 800,
  };

  updateTab(index) {
    this.setState({
      selectedTab: index,
    });
  }

  render() {
    const workplaces = ["Gravity", "BlueShift", "Spring", "Projects"];

    const content = [
      {
        name: "Human Gravity",
        jobName: "Front-End Engineer @ Human Gravity Ltd.",
        descriptions: [
          "Developed multiple responsive pages using React’s styled components & Redux, improved CSS & HTML skills",
          "Exposed to a lot of technologies such as: UI & UX in Sketch & plugins, MySQL Workbench, Node.js, Docker, Handlebars",
          "Involved in decision making regarding the product, researching ways to market and launch, communicated with a multi-disciplinary team",
        ],
        link: "https://gravityaround.com/",
      },
      {
        name: "Blueshift Coding",
        jobName: "Tutor @ Blueshift Coding",
        descriptions: [
          "Teaching in-person class and private lessons to students aging 6-14 during the school year and online during the Pandemic using Zoom",
          "Taught subjects include: HTML & CSS, Scratch, Bitsbox.js , P5.js, Python & Logic, Algorithms, Adobe Photoshop, Game Development in Unity with C#, Animations",
          "Accessories such as: Drag & Drop, Multilingual & Typing Club, Logic Development, Kahoot, Padlets",
        ],
        link: "https://blueshiftcoding.com/",
      },
      {
        name: "Spring Weeks",
        jobName: "Programmes attended during 1st Year",
        descriptions: [
          "*Facebook:* Mentored programme, learned about development lifecycle, web architecture, developed an application for linking hosts & travellers to “Bring communities together”",
          "*Citadel & Citadel Securities:* Spring Programme, using Technology to build Financial Systems. Have gotten an insight into the financial sector and how technology is one of the driving forces behind progress",
          "*Credit Suisse:* Financial Services and Tech, explored Cybersecurity threats & how shall we approach them when looking for a solution",
        ],
      },
      {
        name: "Projects",
        jobName:
          "Side-projects built to experiment with different technologies",
        descriptions: [
          "*Webcal:* Scheduling application built for a freelancing client contracted on Upwork. Single-page application using JavaScript, custom CSS, functional components & state hooks from React.js, interacting with a Django backend and a SQLite database",
          "*Contact Keeper:* Contacts application that allows users CRUD & filter functionality to learn Express, MongoDB, React Component-based development, JWT authentication, testing using Postman, Context API vs Redux",
          "*Github Finder:* One of the first applications with React(state management & hooks including Context), Github API, deployed using Netlify",
        ],
      },
    ];

    const filteredWorkspace = content[this.state.selectedTab];

    const selectedWorkspace = filteredWorkspace ? filteredWorkspace : null;

    const technologies = [
      "Javascript",
      "HTML & CSS",
      "Node.js",
      "React",
      "Redux",
      "SQL",
      "Java",
      "C++",
      "Express",
      "Bash",
      "C#",
      "Python",
    ];

    return (
      <Page.Page>
        <PageComponents.BlurrEffect>
          <PageComponents.NoScrollHtmlStyle />
          <Page.PageSpace height={120} />

          <PageComponents.BgWrapper>
            <Icon.Background />
          </PageComponents.BgWrapper>

          <Page.PageSpace height={60} />

          <PageComponents.ContentContainer>
            <PageComponents.TextContainer>
              <Text
                text={`Adrian-Petru Surani`}
                isTitle
                bold
                size={[60, 40]}
                lineHeight={[70, 50]}
                titleTrans
                executionTime={1.2}
                delayTime={80}
              />
              <Page.PageSpace height={25} />
              <Text
                text={`Building experience through experimentation.`}
                isTitle
                size={[34, 24]}
                semifaded
                lineHeight={[50, 35]}
                titleTrans
                executionTime={1.4}
                delayTime={86}
              />
              <Page.PageSpace height={25} />
              <Text
                text={`I'm a London-based Software Engineer passionate about impactful technology, specialising in custom web design and development.`}
                size={[20, 16]}
                lineHeight={[24, 22]}
                maxWidth={500}
                faded
                thin
                titleTrans
                executionTime={1.6}
                delayTime={90}
              />
              <Page.PageSpace height={40} />

              <Button
                mailToLink
                onClickLink
                rectangle
                label={"Get In Touch"}
                white
                radiusSet
                titleTrans
                executionTime={1.8}
                delayTime={91}
              />
            </PageComponents.TextContainer>

            <Avatar titleTrans executionTime={2} delayTime={90} />
          </PageComponents.ContentContainer>

          <Page.PageSpace height={300} />

          <Fade duration={1200} distance="100px" bottom>
            <>
              <Separator label={"Experience."} lineWidth={300} width={800} />

              <Page.PageSpace height={40} />

              <PageComponents.WorkplacesContainer>
                <PageComponents.HeaderContainer>
                  <PageComponents.TitlesContainer>
                    {workplaces.map((workplace, idx) => (
                      <Button
                        key={idx}
                        label={workplace}
                        selected={idx === this.state.selectedTab}
                        workplace
                        minWidth={170}
                        minWidthMobile={75}
                        onClick={() => this.updateTab(idx)}
                      />
                    ))}
                  </PageComponents.TitlesContainer>
                  <PageComponents.TabLine
                    selectedTab={this.state.selectedTab}
                  />
                  <PageComponents.HardcoreLine />
                </PageComponents.HeaderContainer>
                <Page.PageSpace height={30} />
                <PageComponents.WorktentContainer>
                  <PageComponents.JobDescription>
                    <PageComponents.JobTitle>
                      <Text
                        text={selectedWorkspace.jobName}
                        extraLarge
                        isTitle
                        purple
                      />
                    </PageComponents.JobTitle>
                    <Page.PageSpace height={20} />
                    {selectedWorkspace.descriptions.map((desc, idx) => (
                      <PageComponents.Description key={idx}>
                        <Icon.Arrow width={14} height={21} marginright="10" />
                        <Text text={desc} large />
                      </PageComponents.Description>
                    ))}
                  </PageComponents.JobDescription>
                  {selectedWorkspace.link ? (
                    <>
                      <Page.PageSpace height={30} />
                      <Button
                        onClickLink={selectedWorkspace.link}
                        externalLink
                        label="Check them out"
                        rectangle
                        white
                        radiusSet
                      />
                    </>
                  ) : (
                    ""
                  )}
                </PageComponents.WorktentContainer>
              </PageComponents.WorkplacesContainer>
            </>
          </Fade>

          <Page.PageSpace height={300} />

          <Fade duration={1200} distance="100px" bottom>
            <>
              <Separator label={"About me."} lineWidth={300} left />

              <Page.PageSpace height={40} />

              <PageComponents.AboutContainer>
                <Text
                  text={
                    "Hello! I’m Adrian, a Software Engineer studying in London, UK."
                  }
                  large
                />
                <Text
                  text={
                    "Learning about what makes a great engineer, understanding the underlying principles and experimenting are paramount to me!"
                  }
                  large
                />
                <Text
                  text={
                    "I started out with logic puzzles as a kid, moved on to algorithms and data structures during high-school and soon discovered that I really enjoy building and analyzing well-designed websites and applications."
                  }
                  large
                />
                <PageComponents.TechStack>
                  <Text
                    text={
                      "Some of the technologies that I've been working with are:"
                    }
                    large
                  />

                  <Page.PageSpace height={25} />

                  <PageComponents.TechnologiesContainer>
                    {technologies.map((tech, idx) => (
                      <PageComponents.TechLine key={idx}>
                        <Icon.Arrow width={14} height={21} />
                        <Text text={tech} small />
                      </PageComponents.TechLine>
                    ))}
                  </PageComponents.TechnologiesContainer>
                </PageComponents.TechStack>
              </PageComponents.AboutContainer>
            </>
          </Fade>
          <Page.PageSpace height={300} />

          <Fade duration={1200} distance="100px" bottom>
            <>
              <Separator label={"Contact me."} width={600} lineWidth={250} />

              <Page.PageSpace height={40} />

              <PageComponents.ContactContainer>
                <Text
                  text=" I am looking forward to new challenges and oportunities to explore the tech world! If you need any help with building a website or mobile app or you just want to ask me a question, please do email me!"
                  center
                  maxWidth={700}
                  size={[20, 16]}
                  lineHeight={[25, 18]}
                />

                <Avatar />

                <PageComponents.LogosContainer>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/adi.surani.3/"
                  >
                    <PageComponents.IconsHandler>
                      <Icon.Facebook
                        width={20}
                        height={20}
                        hover={`rgba(152,75,197,1)`}
                        color={`black`}
                      />
                    </PageComponents.IconsHandler>
                  </a>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    href="https://github.com/suraniadi"
                  >
                    <PageComponents.IconsHandler>
                      <Icon.Github
                        width={20}
                        height={20}
                        hover={`rgba(152,75,197, 1)`}
                        color={`black`}
                      />
                    </PageComponents.IconsHandler>
                  </a>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/suraniadi/"
                  >
                    <PageComponents.IconsHandler>
                      <Icon.Instagram
                        width={20}
                        height={20}
                        hover={`rgba(152,75,197, 1)`}
                        color={`black`}
                      />
                    </PageComponents.IconsHandler>
                  </a>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    href="https://twitter.com/Adrian35187406"
                  >
                    <PageComponents.IconsHandler>
                      <Icon.Twitter
                        width={20}
                        height={20}
                        hover={`rgba(152,75,197, 1)`}
                        color={`black`}
                      />
                    </PageComponents.IconsHandler>
                  </a>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    href="mailto:surani.adi7@gmail.com"
                  >
                    <PageComponents.IconsHandler>
                      <Icon.Mail
                        width={20}
                        height={20}
                        hover={`rgba(152,75,197, 1)`}
                        color={`black`}
                      />
                    </PageComponents.IconsHandler>
                  </a>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/adrian-surani-b96622104/"
                  >
                    <PageComponents.IconsHandler>
                      <Icon.LinkedIn
                        width={20}
                        height={20}
                        hover={`rgba(152,75,197, 1)`}
                        color={`black`}
                      />
                    </PageComponents.IconsHandler>
                  </a>
                </PageComponents.LogosContainer>
              </PageComponents.ContactContainer>
            </>
          </Fade>

          <Page.PageSpace height={50} />
        </PageComponents.BlurrEffect>
      </Page.Page>
    );
  }
}

export default Landing;
