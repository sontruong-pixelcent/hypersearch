import styled from "styled-components";

export const SearchMainWrapper = styled.div`
  background-color: var(--black);
  width: 100%;
  display: flex;
  flex-direction: column;
  & > div {
    width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 1439px) {
    max-width: 100%;
  }
  @media (max-width: 767px) {
    --outerMargin: 20px;
    margin-top: 35px;
  }
`;

export const SeachFieldWrapper = styled.div`
  padding: var(--outerMargin);
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 25px;
  & > div > h3 {
    color: var(--white);
    margin-top: 50px;
    max-width: 800px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 24px !important;
    }
  }
  & > div > h5 {
    margin-bottom: 40px;
    color: var(--white);
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  & > label {
    margin-bottom: 40px;
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 2px solid var(--green);
    display: flex;
    & > input {
      margin-left: 20px;
      width: 100%;
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 32px;
      letter-spacing: 0.32px;
      font-family: var(--headerFont);
      position: relative;
      color: var(--white);
    }
  }
  & > p {
    margin: 0;
    font-size: 18px;
    line-height: 28.8px;
    font-weight: 400;
    letter-spacing: 0.18px;
  }
  @media (max-width: 767px) {
    & h3 {
      margin-top: 100px;
      font-size: 18px;
      line-height: 27px;
    }
  }
`;
