import React from "react";
import PropTypes from "prop-types";
import { H2, H4BigStrong } from "./../Typography";
import { ScrollSelectorDiv } from "./elements";

const CoreScrollSelector = ({
  menuItems,
  returnLink,
  selectedMode,
  selection,
  venue,
  titleIsBig,
}) => {
  const [selected, setSelected] = React.useState(selectedMode ? selection : 0);
  return (
    <ScrollSelectorDiv
      venue={venue}
      selectedMode={selectedMode}
      className={titleIsBig ? "titleIsBig" : ""}
    >
      <ul>
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            className={selected === index ? "selected" : ""}
            onMouseEnter={() => {
              if (!selectedMode) {
                setSelected(index);
              }
              // console.log("Selected: ", index);
            }}
            onClick={() => {
              returnLink(menuItem.link);
            }}
          >
            <div>{menuItem.image ? menuItem.image : null}</div>
            {selected === index ? (
              <H2>{menuItem.title}</H2>
            ) : (
              <H4BigStrong>{menuItem.title}</H4BigStrong>
            )}
          </li>
        ))}
      </ul>
    </ScrollSelectorDiv>
  );
};

export default CoreScrollSelector;

CoreScrollSelector.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node,
      link: PropTypes.string,
      title: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  returnLink: PropTypes.func,
  selectedMode: PropTypes.bool,
};
