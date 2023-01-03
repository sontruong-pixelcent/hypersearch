import styled from "styled-components";
import AboutBackgroundImage from "./../../assets/images/background-about.jpg";

export const ArticleTitleWrapper = styled.div`
  width: 100%;
  height: 210px;
  padding: 50px 100px;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75) 20.05%,
      rgba(0, 0, 0, 0) 113.33%
    ),
    url(${AboutBackgroundImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  h1 {
    font-weight: 600;
    font-size: 54px;
    line-height: 100%;
    color: var(--turquoise);
    margin: 0px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 767px) {
    padding: 36px 20px;
    gap: 35px;
    width: 100%;
    margin-top: 130px;

    & h1 {
      font-weight: 600;
      font-size: 54px;
      line-height: 100%;
    }
  }
  @media (max-width: 1439px) {
    & h1 {
      font-weight: 600;
      font-size: 54px;
      line-height: 100%;
    }
  }
`;

export const EventBody = styled.div`
  width: 100%;
  padding: 50px 205px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
  & p {
    margin: 0;
    color: white;
    font-size: 18px;
    font-weight: 400px;
    line-height: 140%;
  }
  @media (max-width: 767px) {
    padding: 36px 20px;
    & p {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }
  }
`;

export const QAFMapWrapper = styled.div`
  padding: 50px 50px;
  width: 100%;
  height: 600px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75) 20.05%,
      rgba(0, 0, 0, 0) 113.33%
    ),
    url(${AboutBackgroundImage});
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    height: 372px;
    padding: 36px 20px;
    width: 100%;
    & > div {
      width: 100% !important;
      height: 300px !important;
    }
  }
`;

export const AboutDiv = styled.div`
  width: 1440px;
`;
