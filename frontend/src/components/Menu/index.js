import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import CloseButton from "./../icons/CloseButton";
import Search from "./../icons/Search";
import { SlidingMenuWrapper } from "./elements";

const Menu = ({ onCloseMenu }) => {
  const fireCloseMenu = () => {
    onCloseMenu();
  };

  return (
    <SlidingMenuWrapper>
      <nav>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/`);
            fireCloseMenu();
          }}
          aria-label={"Seach"}
        >
          <Search hoverColor={"var(--green)"} />
        </a>
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            fireCloseMenu();
          }}
          aria-label={"Close menu"}
        >
          <CloseButton />
        </a>
      </nav>
      <div>
        <ul>
          <li>
            <a href="/">Son Truong</a>
          </li>
        </ul>
      </div>
    </SlidingMenuWrapper>
  );
};

export default Menu;

Menu.propTypes = {
  /**
	This expects an array of menu groupings. 
	Each menu grouping is also an array, consisting of entries.
	Each entry consists of a `name`, an `id`, the boolean `emphasize` and possibly `subItems`.
	`subItems` are a list of entries (though they cannot contain their own `subEntries`).
	*/
  menuItems: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        emphasize: PropTypes.bool,
        subItems: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
            emphasize: PropTypes.bool,
          })
        ),
      })
    )
  ),
  /**
	This function is fired if the menu is closed. Maybe this works differently?
	*/
  onCloseMenu: PropTypes.func,
};
