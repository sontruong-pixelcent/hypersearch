import React from "react";
import PropTypes from "prop-types";
import { AboutSmallButtonDiv, SmallButtonDiv, BigButtonDiv } from "./elements";

export const AboutSmallButton = ({
  children,
  disabled,
  color,
  backgroundColor,
  randomNumber,
  ...props
}) => (
  <AboutSmallButtonDiv
    color={color}
    disabled={disabled}
    backgroundColor={backgroundColor}
    randomNumber={randomNumber}
    {...props}
  >
    {children}
  </AboutSmallButtonDiv>
);

export const SmallButton = ({
  children,
  disabled,
  color,
  backgroundColor,
  randomNumber,
  ...props
}) => (
  <SmallButtonDiv
    color={color}
    disabled={disabled}
    backgroundColor={backgroundColor}
    randomNumber={randomNumber}
    {...props}
  >
    {children}
  </SmallButtonDiv>
);

export const BigButton = ({ children, disabled, color, ...props }) => (
  <BigButtonDiv color={color} disabled={disabled} {...props}>
    {children}
  </BigButtonDiv>
);

SmallButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

SmallButton.defaultProps = {
  disabled: false,
};
