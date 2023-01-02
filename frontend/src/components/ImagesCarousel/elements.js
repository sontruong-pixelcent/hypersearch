import styled from "styled-components";

export const ImagesCarouselDiv = styled.div`
  z-index: 2;
  & > div > div > div > div > a {
    width: 100%;
    height: 100%;
    overflow: hidden;
    & > img {
      width: 100% !important;
      height: 100% !important;
    }
  }
  & nav {
    bottom: 0;
  }
`;
