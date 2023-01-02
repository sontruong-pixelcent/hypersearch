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
import {
  H3Strong,
  H4Strong,
  H5BigStrong,
  H5SmallMedium,
} from "../../components/Typography";
import {
  Info,
  Item,
  ResultContainer,
} from "../../components/SearchField/elements";

const DetailPage = (props) => {
  const { detailId } = props;

  const [data, setData] = useState(null);
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    if (detailId) {
      axios
        .get(
          // `http://django-env.eba-y2pfmr6x.us-west-2.elasticbeanstalk.com/package/${detailId}`
          `http://localhost:9000/package/${detailId}`
        )
        .then((res) => {
          res?.data?.item
            ? setData(JSON.parse(res?.data?.item)[0])
            : navigate("/404");

          const temp = res?.data?.name_des_relevantpackages
            ? JSON.parse(res?.data?.name_des_relevantpackages)
            : [];
          res?.data?.readme_relevant_packages &&
            JSON.parse(res?.data?.readme_relevant_packages)?.map((item) =>
              temp?.push(item)
            );
          setRecommend(
            temp.filter((v, i, a) => a.findIndex((v2) => v2.pk === v.pk) === i)
          );
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
          style={{ width: "100%" }}
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

      <EventBody style={{ paddingTop: 0 }}>
        <H3Strong style={{ color: "#ffffff" }}>Relevant packages</H3Strong>
        <ResultContainer style={{ marginTop: 0, width: "100%" }}>
          {recommend?.length > 0
            ? recommend.map((item) => {
                return (
                  <Item
                    key={item?.pk}
                    onClick={() => navigate(`/detail/${item?.pk}`)}
                  >
                    <H4Strong>{item?.fields?.name}</H4Strong>
                    <H5BigStrong style={{ marginBottom: "10px" }}>
                      {item?.fields?.author}
                    </H5BigStrong>
                    <H5SmallMedium
                      style={{
                        marginBottom: "10px",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
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
      </EventBody>
    </Layout>
  );
};

export default DetailPage;
