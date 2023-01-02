import React from "react";
import PropTypes from "prop-types";
import { H5SmallStrong, H5Big } from "./../Typography";
import ReactMarkdown from "react-markdown";
import { CommunityAboutDiv } from "./elements";

const CommunityAbout = ({ readme, stars, forks, watchers }) => {
  return (
    <CommunityAboutDiv>
      <div className="description" style={{ width: "90%" }}>
        <ReactMarkdown>{readme}</ReactMarkdown>
      </div>

      <div style={{ width: "10%", maxWidth: "100px" }}>
        <div>
          <H5SmallStrong>Stars</H5SmallStrong>
          <H5Big>{stars}</H5Big>
        </div>
        <div>
          <H5SmallStrong>Forks</H5SmallStrong>
          <H5Big>{forks}</H5Big>
        </div>
        <div>
          <H5SmallStrong>Watchers</H5SmallStrong>
          <H5Big>{watchers}</H5Big>
        </div>
      </div>
    </CommunityAboutDiv>
  );
};

export default CommunityAbout;

CommunityAbout.propTypes = {
  communityMemberContactDetails: PropTypes.arrayOf(
    PropTypes.shape({ method: PropTypes.string, value: PropTypes.string })
  ),
  communityMemberDescription: PropTypes.string,
  communityMemberEmailAddress: PropTypes.string,
  communityMemberLocation: PropTypes.arrayOf(PropTypes.string),
  communityMemberOpeningHours: PropTypes.string,
  communityMemberWebsite: PropTypes.string,
  goToMap: PropTypes.func,
};
