import styled from "styled-components";

export const PageWrapperDiv = styled.div`
  width: var(--width);
  margin-left: auto;
  margin-right: auto;
  top: 0;
`;

export const HeaderImageWrapper = styled.div`
  position: relative;
  height: 610px;
  width: var(--width);
  & > div {
    width: 100% !important;
    height: 100% !important;
    z-index: 1;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: var(--red);
      mix-blend-mode: multiply;
    }
  }
  & > h1 {
    padding: var(--outerMargin);
    font-size: 56px;
    position: absolute;
    bottom: 0;
    color: var(--white);
    z-index: 3;
  }
  @media (max-width: 767px) {
    & > h1 {
      padding: 10px;
      font-size: 42px;
    }
  }
`;
