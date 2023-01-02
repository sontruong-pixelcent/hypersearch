import styled from "styled-components";

export const CommunityAboutDiv = styled.div`
  display: flex;
  gap: 50px;
  padding: 0 205px 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: var(--white);
  & .contactdetails {
    overflow-x: auto;

    & h5 {
      white-space: nowrap;
    }
  }
  & .tablet {
    display: none;
  }
  & .desktop {
    display: none;
  }
  & h5 :first-child {
    color: var(--white);
  }
  & > div:nth-child(2) {
    & h5:first-child {
      color: var(--green);
    }
  }

  & .description {
    & div:nth-child(1) {
      & p:nth-child(1) {
        margin-top: 0;
        font-weight: 600;
        font-size: 32px;
        line-height: 125%;
      }
      & p:nth-child(2),
      p:nth-child(4) {
        font-weight: 500;
        font-size: 24px;
        line-height: 31.2px;
        margin: 20px 0;
      }
      & p:nth-child(3),
      p:nth-child(5) {
        color: var(--white);
        font-weight: 400;
        font-size: 18px;
        line-height: 25.2px;
        letter-spacing: 1%;
        margin: 0;
      }
    }
  }

  & > div:nth-child(2) > div {
    display: flex;
    flex-direction: column;
    > div {
      margin-bottom: 20px;
    }
  }
  & a {
    color: var(--white);
    text-decoration: underline;
    max-width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    &.nounderline {
      text-decoration: none;
    }
    &:hover {
      color: var(--red);
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div:first-of-type {
    min-width: 190px;
    margin-right: 20px;
    margin-bottom: 20px;
    & h5 {
      margin-bottom: 10px;
    }
    & + div {
      /* min-width: 820px; */
      & p {
        font-size: 18px;
        line-height: 1.4;
        margin: 0;
        & + p {
          margin-top: 18px;
        }
      }
      & + div > div {
        margin-left: 20px;
        min-width: 295px;
        & > div {
          margin-bottom: 20px;
          & > button {
            display: inline;
          }
          & > div > h5 {
            color: var(--white);
          }
        }
      }
    }
  }
  @media (max-width: 1439px) {
    & > div:first-of-type + div {
      min-width: initial;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    padding: 50px 72px;
    gap: 0;
    & .tablet {
      display: flex;
    }
    & .desktop {
      display: none;
    }
    & > div:first-of-type + div {
      & + div {
        margin-left: 0;
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        & > div:first-of-type {
          margin-left: 0;
        }
        & > div + div {
          display: flex;
          flex-direction: column;
          & h5 {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0;
    padding: 36px 20px;
    & > div:first-of-type {
      margin-right: 0;
      /* margin-bottom: 25px; */

      & + div + div {
        margin-left: 0;
        margin-top: 25px;
      }
    }

    & .description {
      & div:nth-child(1) {
        p:nth-child(1) {
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          margin: 0;
        }
        & p:nth-child(2),
        p:nth-child(4) {
          font-weight: 400;
          font-size: 21px;
          line-height: 27.3px;
          margin: 20px 0;
        }
        & p:nth-child(3),
        p:nth-child(5) {
          color: var(--white);
          font-weight: 400;
          font-size: 16px;
          line-height: 22.4px;
          letter-spacing: 0.01em;
          margin: 0;
        }
      }
    }
  }
`;
