import React from "react";
import styled, { keyframes, css } from "styled-components";
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

const Content = styled.div`
  width: 100%;
  font-family: Josefin Sans;
  color: #000000;
  width: fit-content;
  word-break: break-word;
  text-align: left;

  line-height: ${(props) => props.lineHeight.desktop}px;

  font-size: ${(props) => props.bodySize.desktop}px;
  font-weight: ${(props) => props.bodyWeight};

  ${(props) =>
    props.onClick &&
    `
    cursor: pointer;
    user-select: none;
  `}

  ${(props) =>
    props.center &&
    `
    text-align: center;
  `}

  ${(props) =>
    props.isTitle &&
    `
    font-family: Yeseva One;
  `}

  ${(props) =>
    props.maxWidth &&
    `
        max-width: ${props.maxWidth}px;
    `}


  ${(props) =>
    props.faded &&
    `
        color: rgba(0, 0, 0, 0.6);
    `}

    ${(props) =>
    props.semifaded &&
    `
        color: rgba(0, 0, 0, 0.7);
    `}
    

  ${(props) =>
    props.hoverable &&
    `
        &:hover {
         color: #984BC5; 
      }
    `}
    
    ${(props) =>
    props.selected ||
    (props.purple &&
      `
        color: #984BC5; 
    `)}

    ${(props) =>
    props.centerMargin &&
    `
        margin: auto; 
    `}

    ${(props) =>
    props.titleTrans &&
    props.executionTime &&
    props.delayTime &&
    css`
      animation: ${(props) => move(props.delayTime)} ${props.executionTime}s
        linear;
    `}

    ${down("md")} {
    font-size: ${(props) => props.bodySize.tablet}px;
    line-height: ${(props) => props.lineHeight.tablet}px;

    ${(props) =>
      props.titleTrans &&
      props.executionTime &&
      props.delayTime &&
      css`
        animation: ${(props) => move(props.delayTime * 0.7)}
          ${props.executionTime * 1.2}s linear;
      `}
  }

  .highlight {
    color: #984bc5;
    font-weight: 700;
  }
`;

const Text = (props) => {
  let text = props.text;

  text = text.replace(/[*][\S\s]*[*]/g, (word) => {
    const str = word.replace(/[*]/g, "");
    return `<span class="highlight">${str}</span>`;
  });

  let bodySize = {
    desktop: 18,
    tablet: 16,
  };

  let lineHeight = {
    desktop: 25,
    tablet: 23,
  };

  if (props.lineHeight) {
    if (props.lineHeight instanceof Array) {
      lineHeight.desktop = props.lineHeight[0];
      lineHeight.tablet = props.lineHeight[1] || props.lineHeight[0];
    } else {
      lineHeight.desktop = props.lineHeight;
      lineHeight.tablet = props.lineHeight;
    }
  }

  if (props.size) {
    if (props.size instanceof Array) {
      bodySize.desktop = props.size[0];
      bodySize.tablet = props.size[1] || props.size[0];
    } else {
      bodySize.desktop = props.size;
      bodySize.tablet = props.size;
    }
  } else {
    if (props.small) {
      bodySize.desktop = 16;
      bodySize.tablet = 14;
    }

    if (props.large) {
      bodySize.desktop = 20;
      bodySize.tablet = 18;
    }

    if (props.extraLarge) {
      bodySize.desktop = 24;
      bodySize.tablet = 22;
    }
  }

  let bodyWeight = 600;

  if (props.thin) {
    bodyWeight = 400;
  }

  if (props.bold) {
    bodyWeight = 700;
  }

  if (props.extraBold) {
    bodyWeight = 800;
  }

  return (
    <Content
      onClick={props.onClick}
      faded={props.faded}
      semifaded={props.semifaded}
      center={props.center}
      bodySize={bodySize}
      bodyWeight={bodyWeight}
      lineHeight={lineHeight}
      dangerouslySetInnerHTML={{ __html: text }}
      maxWidth={props.maxWidth}
      hoverable={props.hoverable}
      selected={props.selected}
      centerMargin={props.centerMargin}
      isTitle={props.isTitle}
      purple={props.purple}
      titleTrans={props.titleTrans}
      delayTime={props.delayTime}
      executionTime={props.executionTime}
    />
  );
};

export default Text;
