import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { HeaderWrapper, HeaderDiv } from "./elements";
import Search from "./../icons/Search";
import MenuOpen from "./../icons/MenuOpen";
import Logo from "../Logo";

const Header = ({
  loggedIn,
  openStore,
  openUser,
  openSearch,
  openMenu,
  hideUser,
  hideSearch,
  darkMode,
  skipHeader,
  headerColor,
  headerBlack,
  ticketButtonText,
  ticketButtonLink,
}) => {
  const [menuColor, setMenuColor] = React.useState(
    headerColor ? headerColor : darkMode ? "#eee" : "#111"
  );

  return (
    <HeaderWrapper skipHeader={skipHeader} headerBlack={headerBlack}>
      <HeaderDiv>
        <Link to={"/"}>
          <Logo color="#ffffff" alt="Hypersearch" />
        </Link>
        <ul>
          <li>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                openMenu(true);
              }}
            >
              <MenuOpen color={menuColor} alt="Menu" />
            </a>
          </li>
        </ul>
      </HeaderDiv>
    </HeaderWrapper>
  );
};

export default Header;

Header.propTypes = {
  /**
	Assuming that this is coming from somewhere else, though it could be set here?
	*/
  loggedIn: PropTypes.bool,
  /**
	These functions are fired if the button is clicked.
	*/
  openUser: PropTypes.func,
  /**
	These functions are fired if the button is clicked.
	*/
  openStore: PropTypes.func,
  /**
	These functions are fired if the button is clicked.
	*/
  openMenu: PropTypes.func,
  /**
	These functions are fired if the button is clicked.
	*/
  openSearch: PropTypes.func,
  hideStore: PropTypes.bool,
  hideUser: PropTypes.bool,
  hideSearch: PropTypes.bool,
  darkMode: PropTypes.bool,
};
