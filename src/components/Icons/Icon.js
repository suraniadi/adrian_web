import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";

import BackgroundSource from "./images/Background.svg";
import { ReactComponent as LogoSource } from "./images/Logo.svg";
import { ReactComponent as FacebookSource } from "./images/Facebook.svg";
import { ReactComponent as GithubSource } from "./images/Github.svg";
import { ReactComponent as InstagramSource } from "./images/Instagram.svg";
import { ReactComponent as LinkedInSource } from "./images/LinkedIn.svg";
import { ReactComponent as MailSource } from "./images/Mail.svg";
import { ReactComponent as TwitterSource } from "./images/Twitter.svg";
import { ReactComponent as ArrowSource } from "./images/Triangle.svg";

const IconStyle = css`
  width: ${(props) => (props.width ? props.width : 30)}px;
  filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.5));
  position: relative;
  height: 100%;

  transition: all 0.2s ease 0.05s;

  g {
    transition: fill 0.05s;
  }

  ${(props) =>
    props.onClick &&
    `
    cursor: pointer;
  `}

  ${(props) =>
    props.marginright &&
    `
    margin-right: ${props.marginright}px;`}

  ${(props) =>
    props.color &&
    `
    g {
      fill: ${props.color};
    }
  `}

  &:hover {
    ${(props) =>
      props.hover &&
      `
    g {
      fill: ${props.hover};
    }

      transform: scale(1.2);
  `}
  }
`;

const Background = styled.div`
  width: 2443px;
  height: 3150px;

  position: absolute;
  top: 0px;
  left: -800px;
  z-index: -1;

  ${down("md")} {
    width: 2800px;
    height: 4000px;
    left: -1200px;
    top: -400px;
  }

  background-image: url(${BackgroundSource});
  background-position: center;
  background-repeat: no-repeat;
`;

const Logo = styled(LogoSource)`
  ${IconStyle}
`;

const Facebook = styled(FacebookSource)`
  ${IconStyle}
`;

const Instagram = styled(InstagramSource)`
  ${IconStyle}
`;

const LinkedIn = styled(LinkedInSource)`
  ${IconStyle}
`;

const Mail = styled(MailSource)`
  ${IconStyle}
`;

const Twitter = styled(TwitterSource)`
  ${IconStyle}
`;

const Github = styled(GithubSource)`
  ${IconStyle}
`;

const Arrow = styled(ArrowSource)`
  ${IconStyle}
`;


export default {
  Background,
  Logo,
  Arrow,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
  Github,
};
