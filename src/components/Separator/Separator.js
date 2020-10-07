import React, { Component } from "react";

import Page from "../../Page";
import Text from "../Text";
import * as PageComponents from "./components";

const Separator = (props) => {
  return (
    <PageComponents.ContentContainer
      width={props.width}
      left={props.left}
      right={props.right}
    >
      <Text
        isTitle
        text={props.label}
        size={[36, 25]}
        bold
        lineHeight={[50, 35]}
      />
      <PageComponents.Line lineWidth={props.lineWidth} />
    </PageComponents.ContentContainer>
  );
};

export default Separator;
