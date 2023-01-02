import React from "react";
import Layout from "../components/Layout";
import {
  ArticleTitleWrapper,
  EventBody,
} from "../components/AboutStyles/elements";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutPage = () => {
  return (
    <Layout backgroundColor={"var(--black)"} skipHeader headerBlack={true}>
      <ArticleTitleWrapper>
        <AnimationOnScroll
          animateIn="animate__backInLeft"
          animateOnce
          offset={50}
        >
          <h1>Son Truong</h1>
        </AnimationOnScroll>
      </ArticleTitleWrapper>

      <EventBody />
    </Layout>
  );
};

export default AboutPage;
