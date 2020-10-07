import React, { useState, useEffect } from "react";

import Text from "../Text";
import * as PageComponents from "./components";
import { Button } from "../Button";

const RightNav = (props) => {
  return (
    <>
      <PageComponents.LinksContainer open={props.open}>
        <PageComponents.InitialContainer>
          <Text
            text={"Experience"}
            onClick={() => props.onLinkClick(780)}
            hoverable
            titleTrans
            executionTime="0.2s"
            delayTime="0"
          />
          <Text
            text={"About"}
            onClick={() => props.onLinkClick(1550)}
            hoverable
            titleTrans
            executionTime="0.4s"
            delayTime="50"
          />
          <Text
            text={"Contact"}
            onClick={() => props.onLinkClick(2290)}
            hoverable
            titleTrans
            executionTime="0.6s"
            delayTime="63"
          />
          <Button
            label={"Resume"}
            onClickLink={
              "https://docs.google.com/document/d/1Uw-p6mezaJMEMd9iloV3SmzXoSG-BHZizt6w02sFnY4/edit?usp=sharing"
            }
            padded
            radiusSet={true}
            white
            externalLink
            minWidth={100}
            titleTrans
            executionTime="0.8s"
            delayTime="71"
          />
        </PageComponents.InitialContainer>
      </PageComponents.LinksContainer>
    </>
  );
};

export default RightNav;
