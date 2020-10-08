import styled, { createGlobalStyle } from "styled-components";
import { down } from "styled-breakpoints";

export const BackgroundContainer = styled.div`
  position: absolute;
  top: -600px;
  left: -800px;
  z-index: -1;

  ${down("tablet")} {
    left: -1200px;
    top: -400px;
  }
`;

export const NoScrollHtmlStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 650px;
  padding: 0px 40px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;

  ${down("tablet")} {
    padding: 0px 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;

export const WorkplacesContainer = styled.div`
  width: auto;

  padding: 0px 20px;

  ${down("tablet")} {
    padding: 0px 10px;
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
  transition: all 0.5s ease-out 0.4s;

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
  width: 700px;
  margin-right: auto;
  min-height: 350px;

  padding: 0px 40px;

  ${down("tablet")} {
    width: auto;
    padding: 0px 30px;
    min-height: 400px;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;

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
  width: 600px;
  min-height: 400px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  ${down("tablet")} {
    width: auto;
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

export const JobTitle = styled.div`
  margin-left: 23.25px;
`;
