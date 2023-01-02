import styled from "styled-components";

export const MainWrapperDiv = styled.main`
  --backgroundColor: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--white)"};
  background-color: var(--backgroundColor);
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.fullWidth ? 0 : "25px")};
  width: 100%;
  max-width: ${(props) => (props.fullWidth ? "initial" : "1280px")};
  margin-left: auto;
  margin-right: auto;
  overflow: ${(props) => (props.isFixed ? "hidden" : "initial")};
  position: relative;
`;
