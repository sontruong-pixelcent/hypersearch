import React, { useEffect, useState } from "react";
import { SeachFieldWrapper } from "./elements";
import { H3, H5Big } from "./../Typography";
import Search from "./../icons/Search";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import axios from "axios";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isPristine, setIsPristine] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (searchValue) {
      // axios.get() ...
      console.log(searchValue);
    }
  }, [searchValue]);

  return (
    <SeachFieldWrapper>
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        animateOnce
        offset={50}
      >
        <H3>Son Truong</H3>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInRight"
        animateOnce
        offset={50}
      >
        <H5Big>Son Truong</H5Big>
      </AnimationOnScroll>
      <label>
        <Search color={"var(--white)"} />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setIsPristine(false);
            setSearchValue(e.target.value);
          }}
        />
      </label>
      {isPristine ? null : (
        <p style={{ color: "var(--white)" }}>
          {totalResults
            ? `${totalResults} search results`
            : "No results. Try changing what you're searching for."}
        </p>
      )}
    </SeachFieldWrapper>
  );
};

export default SearchField;
