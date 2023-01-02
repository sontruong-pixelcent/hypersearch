import React from "react";
import Img from "gatsby-image";
import Layout from "./../components/Layout";
import { PageWrapperDiv } from "./../components/PressStyles/elements";
import { HeaderImageWrapper } from "../styles/404";

const NotFoundPage = () => {
  return (
    <Layout
      backgroundColor={"var(--red)"}
      footerColor={"var(--green)"}
      skipHeader
    >
      <PageWrapperDiv>
        <HeaderImageWrapper>
          <Img fixed={{ src: "/bg19.jpg" }} />
          <div>
            <h1>404</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: `<h2>Page Not Found</h2><div>Sorry, the page you are looking for doesn't exist.</div>`,
              }}
            />
          </div>
        </HeaderImageWrapper>
      </PageWrapperDiv>
    </Layout>
  );
};

export default NotFoundPage;
