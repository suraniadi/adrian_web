import React from "react";

import * as PageComponents from "./components";
import Icon from "../Icons";
import Burger from "./Burger";

function Navbar(props) {
  return (
    <>
      <PageComponents.BlurredNav hide={props.hideBar} />
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
            props.onLinkScrollClick(0);
          }}
        />
        <Burger
          burgerOpen={props.burgerOpen}
          burgerToggle={props.burgerToggle}
          onLinkScrollClick={props.onLinkScrollClick}
        />
      </PageComponents.NavbarContainer>
    </>
  );
}

export default Navbar;
