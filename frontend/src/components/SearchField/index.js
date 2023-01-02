import React, { useEffect, useState } from "react";
import { Info, Item, ResultContainer, SeachFieldWrapper } from "./elements";
import {
  H3,
  H4Strong,
  H5Big,
  H5BigStrong,
  H5SmallMedium,
} from "./../Typography";
import Search from "./../icons/Search";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
import { navigate } from "gatsby";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isPristine, setIsPristine] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (searchValue) {
      axios
        .get(
          `http://localhost:9000/v1/search?q=${searchValue}`
          // `http://django-env.eba-y2pfmr6x.us-west-2.elasticbeanstalk.com/v1/search?q=${searchValue}`
        )
        .then((res) => {
          setData(JSON.parse(res?.data?.packages));
        })
        .catch((err) => {
          console.log(err);
        });
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
          {data
            ? `${data.length} search results`
            : "No results. Try changing what you're searching for."}
        </p>
      )}
      <ResultContainer>
        {data?.length > 0
          ? data.map((item) => {
              console.log(item);
              return (
                <Item onClick={() => navigate(`/detail/${item?.pk}`)}>
                  <H4Strong>{item?.fields?.name}</H4Strong>
                  <H5BigStrong style={{ marginBottom: "10px" }}>
                    {item?.fields?.author}
                  </H5BigStrong>
                  <H5SmallMedium
                    style={{
                      marginBottom: "10px",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "3",
                      "-webkit-box-orient": "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item?.fields?.description}
                  </H5SmallMedium>
                  <Info>
                    <H5SmallMedium>
                      Stars: {item?.fields?.stargazers_count}
                    </H5SmallMedium>
                    <H5SmallMedium>
                      Forks: {item?.fields?.forks_count}
                    </H5SmallMedium>
                    <H5SmallMedium>
                      Watchers: {item?.fields?.watchers_count}
                    </H5SmallMedium>
                  </Info>
                </Item>
              );
            })
          : null}
      </ResultContainer>
    </SeachFieldWrapper>
  );
};

export default SearchField;
