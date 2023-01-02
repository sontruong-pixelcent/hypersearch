import styled from "styled-components";


export const AboutSmallButtonDiv = styled.button`
  --color: ${props => props.color};
  --colorDisabled: "var(--mid)";
  --backgroundColorDisabled: "transparent";
  --backgroundColor: ${props => props.backgroundColor};
  --hoverColor: "var(--red)";
  --hoverColorDisabled: "var(--mid)";

  display: inline-block;
  min-width: 65px;
  min-height: 28px;
  padding: 5px 20px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.24px;
  font-family: var(--headerFont);
  font-weight: 500;
  align-items: center;
  justify-content: center;
  display: flex;
  user-select: none;
  /* border:  */

  color: var(--color);
  border: 1.5px solid var(--color);
 
  background-color: var(--backgroundColor);
 
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
  &:focus {
    appearance: none;
    outline: none;
  }
  & a{
    color: var(--color) !important;
  }
`;

export const SmallButtonDiv = styled.button`
  --color: ${props => props.color || "var(--slate)"};
  --colorDisabled: "var(--mid)";
  --backgroundColorDisabled: "transparent";
  --backgroundColor: ${props => props.backgroundColor || "var(--white)"};
  --hoverColor: "var(--red)";
  --hoverColorDisabled: "var(--mid)";

  --cyborg: #ff644e;
  --childhood: #8e69ee;
  --nature: #ffc327;
  display: inline-block;
  min-width: 65px;
  min-height: 28px;
  padding: 5px 20px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.24px;
  font-family: var(--headerFont);
  font-weight: 500;
  align-items: center;
  justify-content: center;
  display: flex;
  user-select: none;
  /* border:  */

  color: ${props => {
    if (props.disabled) {
      return "var(--colorDisabled)";
    } else if (props.randomNumber) {
      // props.disabled ? "var(--colorDisabled)" : "var(--color)"
      if (props.theme === "nature" || props.theme === "childhood") {
        return "var(--black)";
      } else if (props.theme === "notheme") {
        return "var(--color)";
      } else if (props.theme === "cyborg") {
        return "var(--white)";
      }
    } else {
      return "var(--color)";
    }
  }};
  border: 1.5px solid
    ${props => {
      if (props.disabled) {
        return "var(--colorDisabled)";
      } else if (props.randomNumber) {
        // props.disabled ? "var(--colorDisabled)" : "var(--color)"
        if (props.randomNumber === -1) {
          return "var(--color)";
        } else if (props.randomNumber === 1) {
          return "var(--purple)";
        } else if (props.randomNumber === 3) {
          return "var(--green2)";
        } else if (props.randomNumber === 2) {
          return "var(--pink)";
        }
      } else {
        return "var(--color)";
      }
    }};
  /* background-color: ${props =>
    props.disabled
      ? "var(--backgroundColorDisabled)"
      : "var(--backgroundColor)"}; */
  background-color: ${props => {
    if (props.disabled) {
      return "var(--backgroundColorDisabled)";
    } else if (props.randomNumber) {
      // props.disabled ? "var(--colorDisabled)" : "var(--color)"
      if (props.randomNumber === -1) {
        return "transparent";
      } else if (props.theme === "cyborg") {
        return "var(--blue)";
      } else if (props.theme === "nature") {
        return "var(--green2)";
      } else if (props.theme === "childhood") {
        return "var(--pink)";
      } else {
        return "var(--green2)";
      }
    } else {
      return "var(--backgroundColor)";
    }
  }};
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
  &:hover {
    color: ${props =>
      props.disabled ? "var(--hoverColorDisabled)" : "var(--hoverColor)"};
    border-color: ${props =>
      props.disabled ? "var(--hoverColorDisabled)" : "var(--hoverColor)"};
  }
  &:focus {
    appearance: none;
    outline: none;
  }
`;

export const BigButtonDiv = styled.button`
  --color: ${props => props.color || "var(--slate)"};
  --colorDisabled: "var(--mid)";
  --backgroundColorDisabled: "transparent";
  --backgroundColor: ${props => props.backgroundColor || "transparent"};
  --hoverColor: "var(--red)";
  --hoverColorDisabled: "var(--mid)";
  display: inline-block;
  min-width: 65px;
  max-height: 42px;
  padding: 5px 24px;
  margin: auto;
  margin-bottom: 30px;
  font-size: 21px;
  font-weight: 500;
  /* font-style: italic; */
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 150%;
  letter-spacing: 0.06em;
  font-family: var(--headerFont);
  text-transform: uppercase;
  font-weight: 500;
  user-select: none;
  border: none;
  color: ${props => (props.disabled ? "var(--colorDisabled)" : "var(--color)")};
  /* border: solid 1.5px
    ${props => (props.disabled ? "var(--colorDisabled)" : "var(--color)")}; */
  background-color: ${props =>
    props.disabled
      ? "var(--backgroundColorDisabled)"
      : "var(--backgroundColor)"};
  cursor: ${props => (props.disabled ? "initial" : "pointer")};
  &:hover {
    color: ${props =>
      props.disabled
        ? "var(--hoverColorDisabled, var(--mid))"
        : "var(--hoverColor,var(--red))"};
    /* border-color: ${props =>
      props.disabled
        ? "var(--hoverColorDisabled, var(--mid))"
        : "var(--hoverColor),var(--red)"}; */
  }
  &:focus {
    appearance: none;
    outline: none;
  }
`;
