import React from "react";
import { MainWrapperDiv } from "./elements";

const MainWrapper = ({ children, backgroundColor, fullWidth, isFixed }) => (
  <MainWrapperDiv
    backgroundColor={backgroundColor}
    fullWidth={fullWidth}
    isFixed={isFixed}
  >
    {children}
  </MainWrapperDiv>
);

export default MainWrapper;
