import React from "react";
import styled, { keyframes, css } from "styled-components";
import { down } from "styled-breakpoints";
import PortraitSource from "./img/Portrait.png";

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

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.titleTrans &&
    props.executionTime &&
    props.delayTime &&
    css`
      animation: ${(props) => move(props.delayTime)} ${props.executionTime}s
        linear;
    `}
`;

const AvatarPhoto = styled.div`
  background: url(${PortraitSource});
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0px 16px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease 0.1s;

  &:hover {
    &:after {
          opacity: 1;
    }
  }

  width: ${(props) => (props.small ? 100 : 270)}px;
  height: ${(props) => (props.small ? 100 : 270)}px;

  ${(props) => !props.width && down("tablet")} {
    height: ${(props) => (props.small ? 90 : 160)}px;
    width: ${(props) => (props.small ? 90 : 160)}px;
  }

  ${(props) => props.isPortrait && css`
    background-color: #ffffff;

    &:after {
    content: "";
    display: block;
    position: absolute;
    opacity: 0;
    top: 0%;
    left: 0%;
    z-index: 4;
    border-radius: 50%;

    width: ${(props) => (props.small ? 100 : 270)}px;
    height: ${(props) => (props.small ? 100 : 270)}px;

    ${(props) => !props.width && down("tablet")} {
      height: ${(props) => (props.small ? 90 : 160)}px;
      width: ${(props) => (props.small ? 90 : 160)}px;
    }
    
    transition: opacity 0.3s ease 0.1s;
    background: url(${PortraitSource});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(152,75,197,0.2);
    }
  `}
`;

const Avatar = (props) => {
  return (
    <AvatarContainer
      titleTrans={props.titleTrans}
      delayTime={props.delayTime}
      executionTime={props.executionTime}
    >
      <AvatarPhoto small={props.small} isPortrait = {props.isPortrait}></AvatarPhoto>
    </AvatarContainer>
  );
};

export default Avatar;
