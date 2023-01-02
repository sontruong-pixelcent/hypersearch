import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  width: 100%;
  height: var(--headerHeight);
  align-items: center;
  padding: 0 20px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.5s;
  pointer-events: none;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
  & > a > svg {
    transition: 0.5s;
  }
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8;
    max-width: 100%;
    padding: 0 100px;
    & > a {
      position: relative;
      & > svg {
        transform: scale(0.72) translateX(-20px);
      }
    }
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
  & > ul {
    display: inline-flex;
    list-style-type: none;
    margin-left: auto;
    & > li {
      display: inline-block;
      margin-left: 50px;
    }
  }
  & a {
    pointer-events: initial;
  }
  @media (max-width: 767px) {
    & > ul {
      padding-left: 0;
    }
    & > ul > li {
      display: inline-block;
    }
  }
`;

export const HeaderWrapper = styled.div`
  --headerHeight: 110px;
  position: ${(props) => (props.skipHeader ? "absolute" : "relative")};
  z-index: 2;
  left: 0;
  right: 0;
  mix-blend-mode: ${(props) => (props.headerBlack ? "initial" : "difference")};
  & > header + div {
    position: absolute;
    top: var(--headerHeight);
  }
`;
