import styled from "styled-components";

export const EventBodyDiv = styled.div`
  width: var(--width);
  max-width: var(--width);
  padding: 0 var(--outerMargin);
  margin: 25px auto 50px auto;
  position: relative;
  --eventColor: ${(props) => (props.color ? props.color : "var(--red)")};
  & p {
    color: var(--white);
    font-size: 18px;
  }
  & > h2 {
    color: var(--eventColor);
    margin-bottom: 50px;
    font-size: ${(props) => (props.isSmallTitle ? "32px" : "42px")};
  }
  & > h5 {
    margin-bottom: 35px;
    & a {
      color: var(--black);
    }
  }
  & > div {
    display: flex;
    & > h5 {
      color: var(--white);
      font-size: 21px;
      margin-right: 25px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    & > span {
      font-size: 24px;
      color: ${(props) => props.color || "var(--white)"};
      margin-right: 25px;
      text-decoration: underline;
      cursor: pointer;
      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
    & > div:first-of-type {
      min-width: 195px;
      max-width: 195px;
      margin-right: 25px;
      & p {
        font-size: 15px;
        line-height: 21px;
        margin: 0;
        letter-spacing: 0.3px;
        & strong {
          display: inline-block; 
          min-width: 75px;
        }
        & a {
          color: var(--black);
        }
      }
      & h5 {
        color: var(--eventColor);
        margin: 20px 0 10px 0;
      }
      & + div {
        --marginLeft: calc(0px - calc(315px + var(--outerMargin)));
        --marginRight: calc(0px - var(--outerMargin));
        --leftColumnWidth: 190px;
        @media (max-width: 768px) {
          max-width: 100%;
        }
      }
    }
    & > ul:last-of-type {
      min-width: 295px;
      padding: 0;
      margin: 0 0 0 20px;
      list-style: none;
      & p {
        font-size: 18px;
        line-height: 21px;
        margin: 0;
        letter-spacing: 0.3px;
        & strong {
          display: inline-block;
          width: 75px;
        }
        & a {
          color: var(--black);
        }
      }
      & h5 {
        color: var(--eventColor);
      }
      & > li + li {
        margin-top: 20px;
      }
      @media (max-width: 1023px) {
        margin: 0;
      }
      @media (max-width: 768px) {
        & > li {
          & > p, h5 {
            font-size: 14px;
          }
        }
      }
    }
  }
  & .react-add-to-calendar {
    width: 120px;
    & .react-add-to-calendar__dropdown ul {
      margin: 8px 0 0 0;
      padding: 0;
      list-style-type: none;
      & li {
        display: inline;
        margin: 0 6px;
        white-space: nowrap;

        & a {
          color: var(--text);
          &:hover {
            color: var(--red) !important;
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    & > div {
      flex-wrap: wrap;
      & > div {
        margin-bottom: 36px;
      }
    }
  }

  @media (max-width: 767px) {
    --outerMargin: 25px;
    & h2 {
      font-size: 24px;
    }
    & > div {
      flex-direction: column;
      align-items: start;
      -webkit-align-items: start;
      & > div {
        margin-bottom: 36px;
      }
      & > div:first-of-type {
        margin-bottom: 25px;
        padding-right: 0;
      }
    }
    & > div:last-of-type {
      & > div:first-of-type {
        order: ${(props) => props?.bodyType !== "foodDrink" ? "1" : "0"};
      }
    }
  }
  p a.btn_a {
    min-width: 65px;
    min-height: 28px;
    padding: 5px 20px;
    font-size: 12px;
    font-weight: 500;
     width:165px;
    line-height: 1.5;
    text-align:center;
    border: 1px solid #75848c !important;
    display: inline-block;
    margin: 10px 0 !important;    
    color: #75848c !important;
  }
  .btn_a:hover,  .btn_a:focus, .btn_a:active {
    color: #000 !important;
    border: 1px solid #000 !important;
  }

  @media (max-width: 767px) {
    & p, li {
      font-size: 16px;
    }
  }
`;
