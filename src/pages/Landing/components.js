import styled, { createGlobalStyle } from "styled-components";
import { down } from "styled-breakpoints";

export const NoScrollHtmlStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 0px 40px;
  position: relative;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;

  ${down("tablet")} {
    min-height: 700px;
    padding: 0px 25px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;

export const WorkplacesContainer = styled.div`
  width: 800px;

  padding: 0px 40px;

  ${down("tablet")} {
    width: 320px;
    padding: 0px 25px;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderContainer = styled.div`
  width: 680px;
  position: relative;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  ${down("tablet")} {
    width: 300px;
  }
`;

export const HardcoreLine = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  height: 4px;
`;

export const TabLine = styled.div`
  position: absolute;
  top: 35px;
  left: 0px;
  width: 170px;
  background-color: #994bc6;
  border-radius: 2px;
  height: 4px;

  transform: translateX(calc(${(props) => props.selectedTab} * 170px));
  transition: all 0.2s ease-in-out 0.3s;

  ${down("tablet")} {
    width: 75px;
    transform: translateX(calc(${(props) => props.selectedTab} * 75px));
  }
`;

export const TitlesContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const WorktentContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Description = styled.div`
  width: 90%;
  margin-bottom: 15px;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;

  padding: 0px 40px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;

  ${down("tablet")} {
    padding: 0px 25px;
    min-height: 1110px;
    flex-direction: column;
  }
`;

export const AboutTextContainer = styled.div`
  width: 75%;
  min-height: 400px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;

  ${down("tablet")} {
    width: 100%;
    min-height: 680px;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 190px;
`

export const TechnologiesContainer = styled.div`
  max-width: 550px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const TechLine = styled.div`
  min-width: 130px;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContactContainer = styled.div`
  width: 800px;
  min-height: 450px;
  padding: 0px 40px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  ${down("tablet")} {
    width: auto;
    padding: 0px 25px;
  }
`;

export const LogosContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  max-width: 300px;

  ${down("tablet")} {
    max-width: 250px;
  }
`;

export const IconsHandler = styled.div`
  position: relative;

  &:after {
    opacity: 0;
    content: "";
    display: block;
    position: absolute;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 8px solid black;
    z-index: 100;
    top: 25px;
    left: 3px;

    transform: translate3d(0px, 8px, 0);
  }

  &:hover:after {
    opacity: 1;
    transition: opacity 0.2s linear 0.05s, transform 0.2s linear 0.05s;

    transform: translate3d(0, 0, 0);
  }

  ${down("tablet")} {
    pointer-events: none;
  }
`;

export const JobDescription = styled.div`
  width: 100%;

  max-width: 800px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;


export const BgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 2920px;
  overflow: hidden;

  ${down("tablet")} {
  height: 3850px;
  }
`;

export const BlurrEffect = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.burgerOpen &&
    `
    filter : blur(3px);
  `}
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 90px;
`

export const LungsContainer = styled.div`
  width: 300px;
  height: 400px;
  transition: all 0.2s ease-in-out 0.1s;

  &:hover {
    transform : scale(1.1);
  }
`

export const LungsImage = styled.img`
  width: 400px;
  height: 300px;

  ${down("tablet")} {
    width: 300px;
    height: 230px;
  }
`
