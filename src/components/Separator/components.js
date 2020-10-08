import styled from "styled-components";
import { down } from "styled-breakpoints";

export const ContentContainer = styled.div`
  width: ${(props) => (props.width ? props.width : 750)}px;
  padding: 0px 40px;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.left &&
    `
        margin-right: auto;
    `}

  ${(props) =>
    props.right &&
    `
        margin-left: auto;
    `}

    ${down("tablet")} {
    width: auto;
    padding: 0px 25px;
  }
`;

export const Line = styled.div`
  height: 1px;
  margin-left: 20px;
  border-radius: 1.5px;
  background-color: rgba(152, 75, 197, 0.6);
  width: 400px;

  ${(props) =>
    props.lineWidth &&
    `
        width: ${props.lineWidth}px;
    `}

  ${down("tablet")} {
    width: 140px;
    margin-left: 10px;
  }
`;
