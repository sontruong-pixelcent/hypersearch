import styled from "styled-components";

export const CoreFilterDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--width);
  padding-left: var(--outerMargin);
  padding-right: var(--outerMargin);
  margin-left: auto;
  margin-right: auto;
  & strong {
    font-weight: 700 !important;
  }
  & > div {
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    justify-content: flex-start;
    & strong {
      margin-right: 8px;
      padding: 5px 0;
      font-size: 12px;
      letter-spacing: 0.24px;
      font-weight: bold;
      user-select: none;
      color: var(--white);
    }
    & + a {
      /* --clearColor: #cfcecb; */
      color: var(--mid);
      text-decoration: underline;
      font-size: 12px;
      padding: 5px 0;
      letter-spacing: 0.03em;
      font-weight: normal;
      white-space: nowrap;
      user-select: none;
      margin-left: 8px;
      transition: 0.5s;
      &.disabled {
        color: var(--mid);
      }
    }
  }
  & .react-dropdown-select {
    width: 135px;
    background-color: var(--light);
    color: var(--black);
    margin-right: 15px;
    height: 28px;
    font-size: 12px;
    min-height: 25px;
    outline: none;
    appearance: none;
    border: none;
    & input {
      font-family: var(--headerFont);
      font-size: 12px;
      color: var(--black);
      font-weight: 500;
    }
    &:active,
    &:focus {
      outline: none;
      appearance: none;
      border: none;
      box-shadow: none;
    }
    &:focus-within {
      border: none;
    }
    & .react-dropdown-select-dropdown {
      top: 25px;
      border: none;
      left: 0;
    }
    & .react-dropdown-select-item {
      border-bottom: none;
      background-color: var(--slate);
      color: var(--white);
      height: 25px;
      font-weight: 500;
    }
  }

  @media (min-width: 1441px) {
    /* max-width: initial; */
    /* padding-right: 0; */
  }
  @media (max-width: 767px) {
    /* padding: 0 25px; */
    margin-top: 31px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    & div {
      strong {
        margin-left: 15px;
      }
      a {
        font-weight: 400 !important;
        line-height: 150%;
        letter-spacing: 0.02em;
      }
    }
  }
  @media (max-width: 412px) {
    & > div + a:last-child {
      color: var(--mid);
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    & div {
      a {
        &:nth-of-type(7) {
          margin-left: 124px;
        }
      }
    }
  }
  @media (max-width: 360px) {
    & div {
      a {
        &:nth-of-type(7) {
          margin-left: 108px;
        }
      }
    }
  }
`;

export const FilterItem = styled.a`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.24;
  padding: 5px 12px;
  background-blend-mode: multiply;
  background-color: var(--slate);
  margin-bottom: 8px;
  color: var(--white);
  transition: 0.5s;
  white-space: nowrap;
  user-select: none;
  &.selected {
    background-color: ${(props) =>
      props.selectedColor ? props.selectedColor : "var(--red)"};
    color: ${(props) =>
      props.selectedColor ? "var(--black)" : "var(--white)"};
  }
  margin-right: 8px;
  /* & + a {
    margin-left: 8px;
  } */
`;

export const DropDownSelectorNav = styled.nav`
  width: 135px;
  background-color: var(--light);
  color: var(--black);
  margin-right: 15px;
  position: relative;
  height: 28px;
  font-size: 12px;
  user-select: none;
  cursor: pointer;
  & > span {
    padding: 2px 5px;
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
    color: var(--black);
    &.default {
      color: rgba(0, 0, 0, 0.5);
    }
    & > span {
      color: var(--black);
      position: absolute;
      right: 6px;
      align-self: center;
      margin-left: auto;
      justify-self: flex-end;
      transform: rotate(180deg) translateY(-2px);
      transition: 0.25s;
      &.open {
        transform: rotate(0deg) translateY(-1px);
      }
      & > svg {
        width: 15px;
        height: 15px;
      }
    }
  }
  & > div {
    position: absolute;
    background-color: var(--light);
    color: var(--black);
    width: 135px;
    z-index: 2;
    & li {
      height: 28px;
      padding: 2px 5px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      & a {
        color: var(--black);
      }
    }
  }
  & .react-datepicker__input-container {
    width: 135px;
    & > input {
      width: 135px;
      height: 28px;
      border: none;
      outline: none;
      appearance: none;
      background-color: var(--light);
      padding: 2px 5px;
      font-size: 12px;
      color: var(--black);
      font-family: var(--headerFont);
    }
  }
  & .react-datepicker {
    font-family: var(--headerFont);
    & .react-datepicker__day--selected {
      background-color: var(--red);
    }
  }
`;
