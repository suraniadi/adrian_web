import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";

const move = (perc) => keyframes`
    0% { 
    transform: translateY(-50px);
    opacity: 0; 
    }
    ${perc}% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% { 
    transform: translateY(0px);
    opacity: 1; 
    }
`;

const ButtonLabel = styled.p`
  white-space: nowrap;
  font-family: Josefin Sans;
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  font-weight: 600;

  ${(props) =>
    props.faded &&
    `
    color: rgba(0, 0, 0, 0.6);    
    `}

  ${(props) =>
    props.purple &&
    `
    color: #FFFFFF;
    `}

    ${(props) =>
    props.isLarge &&
    `
    font-size: 22px;
    `}

    ${(props) =>
    props.selected &&
    `
    color: #984bc5;
    `}

    ${(props) =>
    props.white &&
    `
    color: #984bc5;
    `}
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-radius: 2px;
  transition: all 0.2s ease;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(152, 75, 197, 0.2);
    transform: scale(1.05);
  }

  &:hover ${ButtonLabel} {
    color: #984bc5;
  }

  ${(props) =>
    props.padded &&
    `
    padding: 10px;
    `}

  ${(props) =>
    props.radiusSet &&
    `
    border: 2px solid #984bc5;
    `}

  ${(props) =>
    props.workplace &&
    `
    padding: 5px 0px;
    box-shadow: 0px 0px 0px;
    
    &:hover {
    transform: scale(1);
     }
    `}

  ${(props) =>
    props.rectangle &&
    `
    padding: 15px 25px;
    `}

    ${(props) =>
    props.selected &&
    `
    background: rgba(152, 75, 197, 0.2);
    `}

  ${(props) =>
    props.minWidth > 0 &&
    `
    min-width: ${props.minWidth}px;
  `}

  ${(props) =>
    props.minWidthMobile > 0 &&
    css`
      ${down("tablet")} {
        min-width: ${props.minWidthMobile}px;
      }
    `}

  ${(props) =>
    props.purple &&
    `
    background: #984bc5;

    &:hover {
    background: #ffffff;
    }
    `}

    ${(props) =>
    props.titleTrans &&
    props.executionTime &&
    props.delayTime &&
    css`
      animation: ${(props) => move(props.delayTime)} ${props.executionTime}
        linear;
    `}
`;

export const Button = (props) => {
  const content = (
    <ButtonContainer
      radiusSet={props.radiusSet}
      rectangle={props.rectangle}
      workplace={props.workplace}
      minWidth={props.minWidth}
      minWidthMobile={props.minWidthMobile}
      onClick={props.onClick}
      padded={props.padded}
      selected={props.selected}
      purple={props.purple}
      titleTrans={props.titleTrans}
      delayTime={props.delayTime}
      executionTime={props.executionTime}
    >
      <ButtonLabel
        selected={props.selected}
        coloured={props.coloured}
        faded={props.faded}
        white={props.white}
        purple={props.purple}
        isLarge={props.isLarge}
      >
        {props.label}
      </ButtonLabel>
    </ButtonContainer>
  );

  if (props.onClickLink) {
    return props.externalLink ? (
      <a
        target="_blank"
        style={{ textDecoration: "none" }}
        rel="noopener noreferrer"
        href={props.onClickLink}
      >
        {content}
      </a>
    ) : props.mailToLink ? (
      <a
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        href="mailto:surani.adi7@gmail.com"
      >
        {content}
      </a>
    ) : (
      <Link to={props.onClickLink}>{content}</Link>
    );
  } else {
    return content;
  }
};
