import React from "react";
import Layout from "./../components/Layout";
import { PageWrapperDiv } from "./../components/PressStyles/elements";

const NotFoundPage = () => {
  return (
    <Layout
      backgroundColor={"var(--white)"}
      footerColor={"var(--green)"}
      skipHeader
      title="Son Truong"
      SEODescription="Son Truong"
    >
      <PageWrapperDiv>404 - Page Not Found</PageWrapperDiv>
    </Layout>
  );
};

export default NotFoundPage;
