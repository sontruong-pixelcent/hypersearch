import React from "react";
import Layout from "../components/Layout";
import SearchField from "../components/SearchField";
import { SearchMainWrapper } from "../components/SearchField/elements";

const SearchPage = () => {
  return (
    <Layout
      skipHeader
      headerBlack
      backgroundColor={"var(--black)"}
      title={"Alserkal: Search"}
    >
      <SearchMainWrapper>
        <SearchField />
      </SearchMainWrapper>
    </Layout>
  );
};

export default SearchPage;
