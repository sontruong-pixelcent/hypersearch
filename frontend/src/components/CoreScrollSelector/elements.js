import styled from "styled-components";

export const ScrollSelectorDiv = styled.div`
  overflow-x: hidden;
  max-width: 100%;
  --textColor: ${(props) => (props.venue ? "var(--green)" : "var(--pink)")};
  --selectedColor: ${(props) =>
    props.venue ? "var(--white)" : "var(--white)"};
  --normalSize: 24px;
  --selectedSize: 54px;
  --backgroundGradient: ${(props) =>
    props.venue
      ? "linear-gradient(0deg, rgba(81, 87, 246, 0.66), rgba(81, 87, 246, 0.66))"
      : "linear-gradient(0deg, #FF644E, #FF644E)"};
  & > ul {
    height: 100%;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    & > li {
      background-color: var(--purple);
      transition: 0.5s;
      margin: 0;
      padding: 0;
      display: inline-flex;
      width: 420px;
      min-width: initial;
      height: 420px;
      transition: 0.5s;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      flex: 1;
      overflow: hidden;
      & + li {
        margin-left: 20px;
      }
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        cursor: pointer;
        z-index: 2;
        mix-blend-mode: multiply;
        background: ${(props) =>
          props.venue
            ? "linear-gradient(0deg, rgba(81, 87, 246, 0.8), rgba(81, 87, 246, 0.8))"
            : "linear-gradient(0deg, rgba(255, 100, 78, 1), rgba(255, 100, 78, 1))"};
      }
      &.selected {
        flex: 2;
        & h2 {
          font-size: var(--selectedSize);
          display: ${(props) =>
            !props.venue && props.selectedMode ? "none" : "flex"};
        }
        &:after {
          background: none;
        }
        /* cursor: initial; */
      }
      & > div {
        width: 100%;
        height: 100%;
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        & > div {
          width: 100%;
          height: 100%;
        }
      }
      & h2,
      & h4 {
        color: var(--textColor);
        text-align: center;
        z-index: 3;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        user-select: none;
      }
      &.selected {
        & h2,
        & h4 {
          color: var(--selectedColor);
        }
      }
      & + li {
        margin-left: 30px;
      }
    }
  }
  @media (max-width: 1023px) {
    --selectedSize: 48px;
  }
  @media (max-width: 767px) {
    & ul {
      flex-direction: column;
      justify-content: center;
      & > li {
        max-width: 100vw;
        margin-left: auto;
        margin-right: auto;
        & + li {
          margin-left: auto;
        }
      }
    }
  }
`;
