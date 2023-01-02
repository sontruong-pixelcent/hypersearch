import styled from "styled-components";

export const SlidingMenuWrapper = styled.div`
  background-color: var(--black);
  width: 400px;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 45px;
  transition: 1s;
  & > nav {
    display: flex;
    justify-content: space-between;
    & > a:last-child {
      margin-left: auto;
    }
  }
  & > div {
    margin-top: 68px;
    flex: 1;
    & > ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      & li {
        font-size: 24px;
        line-height: 31.2px;
        letter-spacing: 0.24px;
        /* text-transform: lowercase; */
        margin-bottom: 8px;
        color: var(--white);
        & a {
          text-decoration: none;
          transition: 0.25s;
          color: var(--white);
          &:hover {
            color: var(--green);
          }
          &.disabled {
            cursor: default;
            color: var(--green);
            &:hover {
              color: var(--green);
            }
          }
          &.emphasize {
            color: var(--green);
            &:hover {
              color: var(--white);
            }
          }
        }
        & > ul {
          list-style-type: none;
          margin: 8px 0 0 25px;
          padding: 0;
          & a {
            color: var(--red);
            color: rgba(47, 237, 28, 0.45);
            &:hover {
              color: var(--green);
            }
            &.disabled {
              cursor: default;
              color: var(--green);
              &:hover {
                color: var(--green);
              }
            }
          }
        }
      }
      & + ul {
        border-top: 1px solid var(--green);
        margin-top: 10px;
        padding-top: 10px;
      }
    }
    & + nav {
      margin-top: auto;
    }
  }
  & .mobile {
    display: none;
  }
  @media (max-width: 767px) {
    .mobile {
      display: block;
    }
  }
`;
