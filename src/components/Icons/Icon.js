import styled, { css } from "styled-components";
import { down } from "styled-breakpoints";

import { ReactComponent as BackgroundSource } from "./images/Background.svg";
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
    margin-right: ${props.marginright};`}

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

const BgStyle = css`
  width: ${(props) => (props.width ? props.width : 30)}px;
  height: ${(props) =>
    props.height ? props.height : props.width ? props.width : 30}px;

  ${down("tablet")} {
    width: ${(props) => (props.tabwidth ? props.tabwidth : 600)}px;
    height: ${(props) =>
      props.tabheight
        ? props.tabheight
        : props.tabwidth
        ? props.tabwidth
        : 1500}px;
  }
`;

const Background = styled(BackgroundSource)`
  ${BgStyle}
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
