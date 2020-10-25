import React from "react";
import { BreakpointsProvider } from "react-with-breakpoints";
import { ShowAt } from "react-with-breakpoints";

import Text from "../Text";
import * as PageComponents from "./components";
import { Button } from "../Button";

const RightNav = (props) => {
  return (
    <BreakpointsProvider>
      <PageComponents.LinksContainer open={props.open}>
        <PageComponents.InitialContainer>
          <ShowAt breakpoint="mediumAndAbove">
            <Text
              text={"Experience"}
              onClick={() => {
                props.onLinkScrollClick(690);
              }}
              hoverable
              titleTrans
              executionTime={0.2}
              delayTime={0}
            />
            <Text
              text={"About"}
              onClick={() => {
                props.onLinkScrollClick(1440);
              }}
              hoverable
              titleTrans
              executionTime={0.4}
              delayTime={50}
            />
            <Text
              text={"Contact"}
              onClick={() => {
                props.onLinkScrollClick(2210);
              }}
              hoverable
              titleTrans
              executionTime={0.6}
              delayTime={63}
            />
          </ShowAt>
          <ShowAt breakpoint="small">
            <Text
              text={"Experience"}
              onClick={() => {
                props.onLinkScrollClick(1020);
                props.burgerToggle();
              }}
              hoverable
              titleTrans
              executionTime={0.2}
              delayTime={0}
            />
            <Text
              text={"About"}
              onClick={() => {
                props.onLinkScrollClick(1850);
                props.burgerToggle();
              }}
              hoverable
              titleTrans
              executionTime={0.4}
              delayTime={50}
            />
            <Text
              text={"Contact"}
              onClick={() => {
                props.onLinkScrollClick(3190);
                props.burgerToggle();
              }}
              hoverable
              titleTrans
              executionTime={0.6}
              delayTime={63}
            />
          </ShowAt>
          <Button
            label={"Resume"}
            onClickLink={
              "https://docs.google.com/document/d/1bkrS6fmKnO6RoFMbdGtK0GzhHII3gawhpZcyokpWzDs/edit?usp=sharing"
            }
            padded
            radiusSet={true}
            white
            externalLink
            minWidth={100}
            titleTrans
            executionTime={0.8}
            delayTime={71}
          />
        </PageComponents.InitialContainer>
      </PageComponents.LinksContainer>
    </BreakpointsProvider>
  );
};

export default RightNav;
