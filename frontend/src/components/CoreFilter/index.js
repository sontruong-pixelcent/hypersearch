import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CoreFilterDiv, FilterItem, DropDownSelectorNav } from "./elements";

const DropDownSelector = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPristine, setIsPristine] = React.useState(true);
  const [currentPlaceholder, setCurrentPlaceholder] =
    React.useState(placeholder);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate < selectedDate;
  };

  return (
    <DropDownSelectorNav>
      <span
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(() => !isOpen);
        }}
        className={isPristine ? "default" : ""}
      >
        {currentPlaceholder}
        <span className={isOpen ? "open" : "closed"}>
          <svg fill="currentColor" viewBox="0 0 40 40">
            <path d="M31 26.4q0 .3-.2.5l-1.1 1.2q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.2q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z"></path>
          </svg>
        </span>
      </span>
      {isOpen ? (
        <div>
          <ul>
            {options.map((option, index) => (
              <li key={`dropdown_${index}`}>
                <a
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPristine(false);
                    setCurrentPlaceholder(option.label);
                    setIsOpen(false);
                    console.log(option.value);
                    onChange({ type: "option", value: option.value });
                  }}
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
          <DatePicker
            selected={selectedDate}
            dateFormat="d MMMM yyyy"
            filterDate={filterPassedTime}
            placeholderText="Select a date"
            onChange={(e) => {
              setSelectedDate(e);
              setIsPristine(false);
              setCurrentPlaceholder(
                e.toLocaleDateString("en-gb", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              );
              onChange({ type: "datePicker", value: e });
              setIsOpen(false);
            }}
            popperPlacement="right"
          />
        </div>
      ) : null}
    </DropDownSelectorNav>
  );
};

/** This could be expanded by adding a prop for the "Select" and "Clear Selection" texts  */

// TODO: Is there a way to filter the filterlist to deal with no objects being in that category?

const CoreFilter = ({
  filterList,
  selected,
  isEvents,
  timeList,
  timeSelected,
  useColor,
  modal,
  selectLocation,
}) => {
  // console.log({ selected });
  const [selectedTypes, setSelectedTypes] = useState([selectLocation]);
  const addType = (myType) => {
    const newTypes = modal ? [myType] : [myType, ...selectedTypes];
    setSelectedTypes(newTypes);
    selected(newTypes);
  };

  const isTimeList = isEvents && timeList && timeList.length;

  const removeType = (myType) => {
    const newTypes = selectedTypes.filter((x) => x !== myType);
    // console.log("Remove", newTypes);
    setSelectedTypes(newTypes);
    selected(newTypes);
  };

  const [theTimeList, setTheTimeList] = React.useState(timeList);
  const [flip, setFlip] = React.useState(false);

  React.useEffect(() => {
    if (!flip) {
      setTheTimeList(timeList);
      setFlip(true);
    }
  }, [flip]);

  React.useEffect(()=>{
    // console.log(selectedTypes);
    selected(selectLocation)
  },[])

  return (
    <CoreFilterDiv>
      <div>
        <strong>{isTimeList ? "I’m arriving" : "Select"}</strong>
        {/*isTimeList && flip ? (
          <Select
            dropdownGap={0}
            placeholder={"Select Date"}
            onChange={(e) => {
              console.log(e);
              // console.log("onchange fired");
              timeSelected(e[0].value);
            }}
            options={theTimeList}
          />
					) : null*/}
        {isTimeList && flip ? (
          <DropDownSelector
            placeholder={"Select Date"}
            onChange={(e) => {
              // console.log("onchange fired");
              if (e.type !== "datePicker") {
                timeSelected(e.value);
              } else {
                // we're using the date picker
                // console.log("pick a date!");
                timeSelected("thisDate", e.value);
                // console.log(e.value);
              }
            }}
            options={theTimeList}
          />
        ) : null}

        {filterList.map((type, index) => (
          <FilterItem
            href="/#"
            key={index}
            className={selectedTypes.indexOf(type.id) > -1 ? "selected" : ""}
            // selectedColor="var(--red)"
            selectedColor={useColor && type.color ? type.color : null}
            onClick={(e) => {
              e.preventDefault();
              selectedTypes.indexOf(type.id) > -1
                ? removeType(type.id)
                : addType(type.id);
            }}
          >
            {/* {console.log(selectedTypes)} */}
            {type.name}
          </FilterItem>
        ))}
      </div>
      <a
        href="/#"
        onClick={(e) => {
          e.preventDefault();
          setSelectedTypes([]);
          selected([]);
          setFlip(false);
        }}
        className={selectedTypes.length ? "" : "disabled"}
      >
        Clear Selection
      </a>
    </CoreFilterDiv>
  );
};

export default CoreFilter;

CoreFilter.propTypes = {
  /** This is a list of names and values for the filter. `id` gets passed back */
  filterList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  ),
  /** This is the function that passes back a list of values as defined in `filterList` */
  selected: PropTypes.func,
  /** If this is set to `true`, a time selector is shown */
  isEvents: PropTypes.bool,
  /** This is a list of values for times, if `isEvents` is set to `true` */
  timeList: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ),
  /** This is the function that passes back the selected time value, if `isEvents` is `true` */
  timeSelected: PropTypes.func,
};

CoreFilter.defaultProps = {
  isEvents: false,
  timeSelected: () => null,
};
