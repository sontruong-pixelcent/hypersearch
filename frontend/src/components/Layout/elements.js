import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  min-height: 100vh;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
  & > nav {
    position: fixed;
    top: 0;
    right: 0;
    transition: 1s;
    z-index: 100;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.25);
    &.hidden {
      transform: translateX(100%);
    }
    &.shown {
      transform: translateX(0);
    }
  }
`;

export const Wrapper = styled.div`
  --width: 1440px;
  --outerMargin: 100px;
  --backgroundColor: ${(props) => props.backgroundColor || "var(--black)"};
  background-color: var(--backgroundColor);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-height: 100vh;
  @media (max-width: 1439px) {
    --width: 1024px;
  }
  @media (max-width: 1023px) {
    --width: 768px;
  }
  @media (max-width: 767px) {
    --width: 375px;
    --width: 100vw;
  }
`;
