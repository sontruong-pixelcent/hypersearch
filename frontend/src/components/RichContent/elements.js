import styled from "styled-components";

export const RichContextWrapper = styled.div`
  --accentColor: ${(props) => props.accentColor || "var(--green)"};
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  --leftColumnWidth: 163px;
  max-width: calc(
    calc(calc(var(--width) - var(--outerMargin)) - var(--outerMargin)) -
      var(--leftColumnWidth)
  );
  @media (max-width: 767px) {
    max-width: initial;
  }
  & > div + div {
    margin-top: 50px;
  }
`;

export const SpotifyEmbedWrapper = styled.div`
  max-width: 100%;
  max-width: 715px;
  margin-top: 25px;
  margin-bottom: 25px;
  @media (max-width: 767px) {
    & .matterport {
      max-width: 100%;
    }
  }
`;

export const ImageWithCaptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* & .gatsby-image-wrapper {
    max-width: 100% !important;
  } */
  & p {
    text-align: center;
    font-style: italic;
    margin: 25px 0 0 0;
    max-width: 715px;
    color: var(--accentColor);
    color: var(--slate);
  }
  @media (max-width: 1023px) {
    overflow-x: scroll;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    & .gatsby-image-wrapper {
      width: 100% !important;
      height: 320px !important;
    }
  }
`;

export const SlideShowDiv = styled.div`
  display: flex;
  flex-direction: column;
  & ul {
    display: flex;
    overflow-x: scroll;
  }
  & p {
    text-align: center;
  }
`;

export const ImageSliderDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px calc(2 * var(--marginRight));
  max-width: 1440px;
  left: 60px; /* this seems bad! */
  // min-height: ${(props) => (props.height ? props.height + "px" : "530px")};
  & > div > div {
    background-color: ${(props) => props.backgroundColor || "var(--white)"};
    display: flex;
    overflow-x: scroll;
    z-index: 2;
    padding: 20px 0;
    & > div {
      & + div {
        margin-left: 20px;
      }
      & > img {
        height: 460px;
        width: auto;
        margin-bottom: 15px;
      }
      & p {
        color: var(--accentColor);
        text-align: left;
        margin: 0;
        &:first-of-type {
          font-weight: bold;
        }
      }
    }
  }
  & p.slideshowcaption {
    text-align: center;
    color: var(--slate);
    margin: 0 auto;
    font-style: italic;
    max-width: 800px;
  }
  @media (min-width: 1441px) {
    /* background-color: green; */
    /* max-width: 100vw;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0; */
  }
  @media (max-width: 767px) {
    /* max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    left: initial;
    & > div > div {
      flex-direction: column;
      padding: 0;
      &:before {
        min-width: 0;
      }
      & > div > div {
        & > .gatsby-image-wrapper {
          max-width: 100%;
          width: 100% !important;
          height: 320px !important;
        }
        & + div {
          margin-left: 0;
          margin-right: 0;
        }
      }
    } */
  }
`;

export const ImageSliderDivInterior = styled.div`
  // position: ${(props) => (props.top ? "absolute" : "static")};
  top: ${(props) => (props.top ? props.top + "px" : 0)};
  left: ${(props) => (props.left ? props.left + "px" : "initial")};
  width: ${(props) => (props.left ? "100vw" : "initial")};
  background-color: var(--white);
  /* @media (max-width: 767px) {
    position: static;
    top: initial;
    left: initial;
    width: initial;
    max-width: 100%;
  } */
`;

export const RichTextDiv = styled.div`
  color: var(--white);
  max-width: 715px;
  & h1, h2, h3, h4, h5, h6 {
    margin-top : 0;
    line-height: 100%;
  }
  & ul {
    margin-top : 0;
  }
  & a {
    color: var(--accentColor);
  }
  & li {
    color: var(--white);
  }
  & p {
    margin: 0;
    & + p {
      margin-top: 1em;
    }
    & strong {
      color: var(--accentColor);
    }
  }
  & figure {
    margin: 16px 0;
    & img {
      max-width: 100%;
    }
  }
  
`;

export const PhotoWithQuoteDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.photoOnLeft ? "row" : "row-reverse")};
  position: relative;
  margin: 25px calc(0px - var(--outerMargin));
  & > div > p:first-child,
  & > div > h3:first-child {
    margin-top: 0;
  }
  & > img,
  & > .gatsby-image-wrapper {
    height: 440px;
    flex: 1;
    & + div {
      flex: 1;
      margin: ${(props) => (props.photoOnLeft ? "0 0 0 50px" : "0 50px 0 0")};
      & h3 {
        color: var(--accentColor);
        margin-bottom: 50px;
      }
    }
  }
  @media (min-width: 768px) {
    &.empty {
      flex-direction: row;
      margin-left: 0;
      margin-right: 0;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin: 25px 0;
    & > .gatsby-image-wrapper {
      max-width: 100%;
      min-height: 460px;
      width: 100% !important;
      & + div {
        margin: 25px 0 0 0;
        & h3 {
          font-size: 18spx;
          margin-bottom: 24px;
        }
      }
    }
  }
`;

export const VideoWithCaptionDiv = styled.div`
  --marginOverlap: -215px;
  display: flex;
  flex-direction: ${(props) => (props.videoOnLeft ? "row" : "row-reverse")};
  position: relative;
  margin: 25px calc(0px - var(--outerMargin));
  & > div {
    height: 440px;
    & + div {
      margin: ${(props) =>
    props.videoOnLeft
      ? "var(--marginOverlap) 0 0 50px"
      : "0 50px 0 var(--marginOverlap)"};
      & h3 {
        color: var(--accentColor);
        font-size: 27px;
      }
    }
  }
  & .player-wrapper {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    & .react-player {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  & .react-player__preview {
    border: 4px solid #f1f1f1;
  }
  & .credit {
    font-style: italic;
    // color: var(--slate);
    margin-bottom: 0;
    font-weight: normal;
    font-size: 27px;
    font-style: italic;
    line-height: 1.25;
    letter-spacing: 0.32px;
    color: var(--accentColor);
  }
  @media (min-width: 1025px) {
    &.empty {
      flex-direction: column;
      margin-left: 0;
      margin-right: 0;
    }
  }
  @media (max-width: 1024px) {
    --marginOverlap: 0;
    margin: 25px 0;
    flex-direction: column;
    & > div:first-child {
      height: initial;
      margin-bottom: 50px;
      & .player-wrapper {
        max-width: 100%;
      }
      & + div {
        height: initial;
        margin: 0;
      }
    }
  }
  @media (max-width: 767px) {
    & > div:first-child {
      margin-bottom: 10px;
      & + div h3 {
        font-size: 18px;
      }
    }
    & img {
      width: 100px;
      height: 100px;
    }
  }
`;
