import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { down } from "styled-breakpoints";

import Navbar from "./components/Navbar";
import Text from "./components/Text";

const Container = styled.div`
  /* position: relative;
  top: 0px;
  left: 0px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
  min-height: 100vh;

  ${down("tablet")} {
    padding: 0px 5px;
  }
`;

const BoxSizingStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
`;

const PageSpace = styled.div.attrs((props) => {
  let spaceHeight = {
    desktop: 0,
    tablet: 0,
    mobile: 0,
  };

  let spaceWidth = {
    desktop: 0,
    tablet: 0,
    mobile: 0,
  };

  if (props.height) {
    if (props.height instanceof Array) {
      spaceHeight.desktop = props.height[0];
      spaceHeight.tablet = props.height[1] || props.height[0];
      spaceHeight.mobile =
        props.height[2] || props.height[1] || props.height[0];
    } else {
      spaceHeight.desktop = props.height;
      spaceHeight.tablet = props.height;
      spaceHeight.mobile = props.height;
    }
  }

  if (props.width) {
    if (props.width instanceof Array) {
      spaceWidth.desktop = props.width[0];
      spaceWidth.tablet = props.width[1] || props.width[0];
      spaceWidth.mobile = props.width[2] || props.width[1] || props.width[0];
    } else {
      spaceWidth.desktop = props.width;
      spaceWidth.tablet = props.width;
      spaceWidth.mobile = props.width;
    }
  }

  return {
    spaceHeight,
    spaceWidth,
  };
})`
  flex-shrink: 0;
  width: ${(props) =>
    props.spaceWidth.desktop ? `${props.spaceWidth.desktop}px` : "100%"};
  height: ${(props) =>
    props.spaceHeight.desktop ? `${props.spaceHeight.desktop}px` : "100%"};

  ${down("tablet")} {
    width: ${(props) =>
      props.spaceWidth.tablet ? `${props.spaceWidth.tablet}px` : "100%"};
    height: ${(props) =>
      props.spaceHeight.tablet ? `${props.spaceHeight.tablet}px` : "100%"};
  }
`;

const Page = (props) => {
  const prevScrollY = useRef(0);

  const [hideBar, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop - prevScrollY.current > 10 && !hideBar) setHide(true);
      else if (scrollTop - prevScrollY.current < -10 && hideBar) setHide(false);

      prevScrollY.current = scrollTop;

      //setTop(scrollTop < 50 ? true : false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideBar]);

  return (
    <Container>
      <BoxSizingStyle />
      <Navbar hideBar={hideBar} />
      {props.children}
      <Text
        text={"Inspired by many. Built by Adrian-Petru Surani"}
        size={(14, 12)}
        faded
        maxWidth={300}
        center
      />
      <PageSpace height={30} />
    </Container>
  );
};

export default { Page, PageSpace };

// ${down("mobile")} {
//   width: ${(props) =>
//   props.spaceWidth.mobile ? `${props.spaceWidth.mobile}px` : "100%"};
//   height: ${(props) =>
//   props.spaceHeight.mobile ? `${props.spaceHeight.mobile}px` : "100%"};
// }
