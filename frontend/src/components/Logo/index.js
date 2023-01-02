import React from "react";
import Img from "gatsby-image";

const Logo = () => (
  <Img fixed={{ src: "/logo.png" }} style={{ width: "75px", height: "75px", marginTop: "4px" }} />
);

export default Logo;
