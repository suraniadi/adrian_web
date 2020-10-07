import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as PageComponents from "./components";
import Icon from "../Icons";
import Burger from "./Burger";

function Navbar(props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scroll({ left: 0, top: scrollY, behavior: "smooth" });
    // window.addEventListener("scroll", () => {
    //   console.log(window.pageYOffset);
    // });
  }, [scrollY]);

  const onLinkClick = (positionY) => {
    setScrollY(positionY);
  };

  const history = useHistory();

  return (
    <PageComponents.NavbarContainer
      hide={props.hideBar}
      topPage={props.topPage}
    >
      <Icon.Logo
        width={50}
        height={50}
        hover={`rgba(152,75,197, 0.3)`}
        color={`none`}
        onClick={() => {
          history.push("/");
          onLinkClick(0);
        }}
      />
      <Burger onLinkClick={onLinkClick} />
    </PageComponents.NavbarContainer>
  );
}

export default Navbar;
