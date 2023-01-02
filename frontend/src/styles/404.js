import styled from "styled-components";

export const HeaderImageWrapper = styled.div`
  position: relative;
  height: 610px;
  width: var(--width);
  z-index: 1;
  & > div:first-of-type {
    pointer-events: none;
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
    & + div {
      display: flex;
      padding: var(--outerMargin);
      position: absolute;
      bottom: 20px;
      color: var(--white);
      z-index: 3;
      & h1 {
        color: var(--green);
        font-size: 180px;
        font-weight: normal;
        margin: 0;
        white-space: nowrap;
        & + div {
          margin-left: 86px;
          & h2 {
            color: var(--green);
            margin: 60px 0 0 0;
            font-size: 62px;
            line-height: 68.2px;
            font-weight: 300;
            margin-bottom: 35px;
          }
          & p {
            margin: 0;
            font-size: 32px;
            line-height: 40px;
            letter-spacing: 0.32px;
            & a {
              color: var(--white);
              border-bottom: 2px solid var(--white);
            }
          }
        }
      }
    }
  }
  @media (max-width: 1439px) {
    --outerMargin: 50px;
  }
  @media (max-width: 1023px) {
    --outerMargin: 25px;
    & > div:first-of-type + div {
      flex-direction: column;
      bottom: 0;
      & h1 {
        font-size: 120px;
        line-height: 120px;
        & + div {
          margin-left: 0;
          & h2 {
            margin-top: 0;
          }
        }
      }
    }
  }
  @media (max-width: 1023px) {
    --outerMargin: 25px;
    & > div:first-of-type + div {
      & h1 {
        font-size: 72px;
        line-height: 72px;
        & + div {
          & h2 {
            font-size: 36px;
            line-height: 42px;
            & + div p {
              font-size: 18px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
`;
