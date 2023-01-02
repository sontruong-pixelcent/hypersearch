import React from "react";
import GlobalContext from "./../../GlobalContext";
import { Location } from "@reach/router";

const MiscSocialSmall = ({ useInstagram, color, extraClass, webLink }) => {
  // console.log(extraClass);
  const { facebookLink, twitterLink, linkedinLink, instagramLink, siteURL } =
    React.useContext(GlobalContext);

  if (color === "notheme" || color === "black") {
    color = "var(--black)";
  } else if (color === "nature") {
    color = "var(--green2)";
  } else if (color === "cyborg") {
    color = "var(--purple)";
  } else if (color === "childhood") {
    color = "var(--pink)";
  } else if (color === "green") {
    color = "var(--green)";
  }

  return (
    <Location>
      {({ location }) => {
        const myPath = encodeURI(siteURL + location.pathname);
        const webLinkText = webLink;
        const twitterLinkText = `https://twitter.com/intent/tweet?url=${myPath}`;
        const facebookLinkText = `https://www.facebook.com/sharer/sharer.php?u=${myPath}`;
        const linkedInLinkText = `https://www.linkedin.com/shareArticle?mini=true&url=${myPath}&title=&summary=&source=`;
        // console.log(twitterLinkText, "\n", twitterLink);

        return (
          <aside className={`socialicons ${extraClass ? extraClass : ""}`}>
            <a
              style={{ marginRight: "6px" }}
              id="linkedin"
              href={
                useInstagram
                  ? linkedinLink
                  : linkedInLinkText ||
                    linkedinLink ||
                    "https://www.linkedin.com"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={32} height={32} fill="none" viewBox="0 0 32 32">
                <path
                  fill={color || "#fff"}
                  d="M12.202 22h-2.97V11.978h2.97V22zm-1.486-11.395C9.765 10.605 9 9.793 9 8.803 9 7.803 9.774 7 10.716 7c.952 0 1.717.813 1.717 1.803.009.99-.765 1.802-1.717 1.802zM23.318 22h-2.961v-4.875c0-1.159-.018-2.662-1.539-2.662-1.547 0-1.779 1.27-1.779 2.578V22h-2.97V11.978h2.846v1.373h.036c.4-.784 1.37-1.616 2.81-1.616 3.006 0 3.557 2.074 3.557 4.773V22z"
                />
                <rect
                  width={30.75}
                  height={30.75}
                  x={0.625}
                  y={0.625}
                  stroke={color || "#fff"}
                  strokeWidth={1.25}
                  rx={15.375}
                />
              </svg>
            </a>

            <a
              style={{ marginRight: "6px" }}
              id="twitter"
              href={
                useInstagram
                  ? twitterLink
                  : twitterLinkText || twitterLink || "https://www.twitter.com"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width={32} height={32} fill="none" viewBox="0 0 32 32">
                <path
                  fill={color || "#fff"}
                  d="M24 11.534c-.231.329-.487.64-.767.932-.268.28-.56.536-.877.767.012.146.018.292.018.438a8.83 8.83 0 01-.219 1.955 9.061 9.061 0 01-.603 1.844c-.377.84-.858 1.614-1.442 2.32a9.024 9.024 0 01-1.973 1.753 8.993 8.993 0 01-2.393 1.078 9.242 9.242 0 01-2.703.365 9.672 9.672 0 01-2.63-.365A8.964 8.964 0 018 21.525c.877.098 1.735.03 2.575-.2a6.662 6.662 0 002.283-1.17c-.511 0-.998-.122-1.46-.365a3.388 3.388 0 01-1.133-.986 3.572 3.572 0 01-.457-.914l.31.037c.39.037.774 0 1.151-.11a3.305 3.305 0 01-1.04-.401 3.418 3.418 0 01-.84-.731 3.36 3.36 0 01-.567-.968 3.496 3.496 0 01-.183-1.114v-.037a3.08 3.08 0 001.498.42c-.45-.304-.804-.7-1.06-1.187a2.71 2.71 0 01-.292-.749 3.14 3.14 0 010-1.644c.073-.28.19-.548.347-.803.414.523.877.986 1.389 1.388a9.44 9.44 0 005.369 2.045 2.034 2.034 0 01-.073-.365 4.307 4.307 0 01-.018-.383c0-.463.085-.89.256-1.279.17-.39.402-.736.694-1.041A3.297 3.297 0 0119.087 10c.45 0 .883.091 1.297.274.414.183.773.438 1.077.767a6.364 6.364 0 002.082-.804 3.35 3.35 0 01-.548 1.06c-.243.304-.541.56-.895.767a7.075 7.075 0 001.882-.511l.018-.019z"
                />
                <rect
                  width={30.75}
                  height={30.75}
                  x={0.625}
                  y={0.625}
                  stroke={color || "#fff"}
                  strokeWidth={1.25}
                  rx={15.375}
                />
              </svg>
            </a>

            <a
              id="facebook"
              href={
                useInstagram
                  ? facebookLink
                  : facebookLinkText ||
                    facebookLink ||
                    "https://www.facebook.com"
              }
              fill="transparent"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "6px" }}
            >
              <svg width={32} height={32} fill="none" viewBox="0 0 32 32">
                <path
                  fill={color || "#fff"}
                  d="M17.089 25v-8.208h2.763l.418-3.2h-3.181v-2.04c0-.928.257-1.56 1.59-1.56h1.703V7.128C20.085 7.088 19.072 7 17.9 7c-2.45 0-4.129 1.488-4.129 4.232v2.36H11v3.2h2.771V25h3.318z"
                />
                <rect
                  width={30.75}
                  height={30.75}
                  x={0.625}
                  y={0.625}
                  stroke={color || "#fff"}
                  strokeWidth={1.25}
                  rx={15.375}
                />
              </svg>
            </a>

            {useInstagram ? (
              <a
                id="instagram"
                href={instagramLink || "https://www.instagram.com"}
                fill="transparent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={32} height={32} fill="none" viewBox="0 0 32 32">
                  <g fill={color || "#fff"} clipPath="url(#clip0)">
                    <path d="M18.83 9h-5.66A4.176 4.176 0 009 13.17v5.66c0 2.3 1.871 4.17 4.17 4.17h5.66c2.3 0 4.17-1.87 4.17-4.17v-5.66C23 10.872 21.13 9 18.83 9zm2.762 9.83a2.763 2.763 0 01-2.763 2.762h-5.658a2.762 2.762 0 01-2.762-2.763v-5.658a2.761 2.761 0 012.762-2.762h5.658a2.762 2.762 0 012.763 2.762v5.658z" />
                    <path d="M16 12.379a3.624 3.624 0 00-3.62 3.62c0 1.998 1.623 3.622 3.62 3.622s3.621-1.624 3.621-3.621a3.624 3.624 0 00-3.62-3.621zm0 5.833a2.212 2.212 0 110-4.425 2.213 2.213 0 010 4.425zm3.628-4.938a.867.867 0 100-1.736.867.867 0 000 1.736z" />
                  </g>
                  <rect
                    width={30.75}
                    height={30.75}
                    x={0.625}
                    y={0.625}
                    stroke={color || "#fff"}
                    strokeWidth={1.25}
                    rx={15.375}
                  />
                  <defs>
                    <clipPath id="clip0">
                      <path
                        fill={color || "#fff"}
                        d="M0 0h14v14H0z"
                        transform="translate(9 9)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            ) : null}
          </aside>
        );
      }}
    </Location>
  );
};

export default MiscSocialSmall;
