import styled from "styled-components";

export const SlideWrapper = styled.div`
  width: 100%;
  height: var(--slideShowHeight);
  position: relative;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
  --slideWidth: 820px;
  --slideHeight: 540px;
  --leftRightSlideTop: 0;
  --imageMargin: 20px;
  --imageReduction: calc(440 / 540);
  --slideShowHeight: calc(var(--slideHeight) + 40px);
  @media (max-width: 900px) {
    --slideWidth: 295px;
    --slideHeight: 180px;
    --slideShowHeight: calc(var(--slideHeight) + 33px);
  }

  & > div {
    & > div {
      display: flex;
      transition: 1s;
      /* overflow-x: scroll;
      scroll-snap-type: x mandatory; */
      height: calc(var(--slideHeight) + 20px);
      position: relative;
      margin-top: 0px;
      & > div {
        /* this is the individual slide holder */
        width: var(--slideWidth);
        height: var(--slideHeight);
        position: absolute;
        transition: 0.5s;
        /* transform-origin: center center; */
        &.on {
          min-width: var(--slideWidth);
          left: calc(50% - calc(var(--slideWidth) / 2));
          z-index: 4;
          box-shadow: ${(props) =>
            props.shadow ? "0 0 20px var(--black)" : "none"};
        }
        &.left {
          transform: scale(var(--imageReduction));
          transform-origin: top right;
          z-index: 2;
          top: var(--leftRightSlideTop);
          opacity: 1;
          /* left: 0; */
          right: calc(
            calc(calc(100% - var(--slideWidth)) / 2) + var(--slideWidth) +
              var(--imageMargin)
          );
        }
        &.right {
          transform: scale(var(--imageReduction));
          right: 0;
          transform-origin: top left;
          z-index: 2;
          top: var(--leftRightSlideTop);
          opacity: 1;
          left: calc(
            calc(calc(100% - var(--slideWidth)) / 2) + var(--slideWidth) +
              var(--imageMargin)
          );
        }
        &.hidden {
          transform: scale(0.001);
          opacity: 0;
          z-index: 1;
        }
        & > a {
          transition: all 0.3s;
          &:hover {
            cursor: pointer;
            transform: scale(1.05);
            transition: all 0.3s;
          }
        }
        & > a > div:first-of-type {
          position: absolute !important;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 1;
          /* & + div {
            user-select: none;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            padding: 200px var(--outerMargin) 0 var(--outerMargin);
            background-blend-mode: multiply;
            background-image: linear-gradient(
              to top,
              rgba(16, 24, 32, 0.25),
              rgba(16, 24, 32, 0)
            );
            & h1 {
              margin-top: 30px;
              margin-bottom: 20px;
            }
          } */
        }
      }
    }
  }
  & > nav {
    z-index: 2;
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    & ul {
      list-style-type: none;
      display: inline-flex;
      margin: 0;
      padding: 0;
      & li {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        transition: 0.5s;
        background-color: ${(props) =>
          props.controlColor ? props.controlColor : "var(--white)"};
        &.selected {
          width: 36px;
        }
        & + li {
          margin-left: 10px;
        }
        & a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: transparent;
          position: relative;
        }
      }
    }
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  left: 39px;
  bottom: 32px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  align-items: flex-start !important;
  width: unset !important;
  min-width: unset !important;
`;
