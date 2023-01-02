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
          animateIn="animate__fadeInRight"
          animateOnce
          offset={50}
          style={{ width: "100%" }}
        >
          <h1>Documentation</h1>
        </AnimationOnScroll>
      </ArticleTitleWrapper>

      <EventBody>
        <p>{`Greetings! Welcome to our program ♡`}</p>
        <p>Our school: HCMUS - Ho Chi Minh University of Science.</p>
        <p>Our department: APCS - Advanced Program in Computer Science.</p>
        <p>Our course: NLP - Natural Language Processing (K-2019 & K-2020).</p>
        <p style={{ borderTop: "1px solid var(--green)", paddingTop: "24px" }}>
          Usage: Please return to homepage and type in what you are searching
          for, our program will find and display all the results. Then you can
          click on a package to see its information and relevant packages
          suggested by our recommendation engine.
        </p>
      </EventBody>
    </Layout>
  );
};

export default AboutPage;
