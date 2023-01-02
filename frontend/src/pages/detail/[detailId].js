import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import CommunityAbout from "../../components/CommunityAbout";
import {
  ArticleTitleWrapper,
  EventBody,
} from "../../components/AboutStyles/elements";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
import { navigate } from "gatsby";

const DetailPage = (props) => {
  const { detailId } = props;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (detailId) {
      axios
        .get(
          `http://localhost:9000/package/${detailId}`
          // `http://django-env.eba-y2pfmr6x.us-west-2.elasticbeanstalk.com/package/${detailId}`
        )
        .then((res) => {
          res?.data?.item
            ? setData(JSON.parse(res?.data?.item)[0])
            : navigate("/404");
        })
        .catch((err) => {
          console.log(err);
          navigate("/404");
        });
    }
  }, [detailId]);

  return (
    <Layout backgroundColor={"var(--black)"} skipHeader headerBlack={true}>
      <ArticleTitleWrapper>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce
          offset={50}
        >
          <h1>{data?.fields?.name}</h1>
        </AnimationOnScroll>
      </ArticleTitleWrapper>

      <EventBody>
        <p>Author: {data?.fields?.author}</p>
        <p>Description: {data?.fields?.description}</p>
      </EventBody>

      <CommunityAbout
        readme={data?.fields?.gh_readme}
        stars={data?.fields?.stargazers_count}
        forks={data?.fields?.forks_count}
        watchers={data?.fields?.watchers_count}
      />
    </Layout>
  );
};

export default DetailPage;
