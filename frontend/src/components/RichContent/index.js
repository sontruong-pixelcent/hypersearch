import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReactPlayer from "react-player";
import useWindowSize from "./../../hooks/useWindowSize";
import { H3Italic, H5SmallMedium } from "./../Typography";
import PlayIconYellow from "./images/play-yellow.png";
import PlayIconPurple from "./images/play-blue.png";
import PlayIconRed from "./images/play-red.png";
import PlayIconGreen from "./images/play-green.png";

import {
  RichContextWrapper,
  SlideShowDiv,
  ImageWithCaptionDiv,
  ImageSliderDiv,
  ImageSliderDivInterior,
  RichTextDiv,
  PhotoWithQuoteDiv,
  VideoWithCaptionDiv,
  SpotifyEmbedWrapper,
} from "./elements";

const RichText = ({ html }) => (
  <RichTextDiv dangerouslySetInnerHTML={{ __html: html }} />
);

export const SoundCloudEmbed = ({ soundCloudUrl }) => {
  const url = soundCloudUrl;
  const lastSegment = url.split("?").pop();
  // console.log(lastSegment);
  if (lastSegment == "dark=false") {
    return (
      <div style={{ marginTop: "25px" }}>
        <iframe
          src={soundCloudUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          mozallowfullscreen="true"
          frameBorder="0"
          style={{
            width: "100%",
            height: "200px",
            borderTop: "3.5px solid #ff644e",
          }}
        />
      </div>
    );
  } else {
    return (
      <SpotifyEmbedWrapper>
        <ReactPlayer url={soundCloudUrl} width={"717"} />
      </SpotifyEmbedWrapper>
    );
  }
};

const AnghamiEmbed = ({ anghamiUrl }) => (
  <SpotifyEmbedWrapper>
    <iframe
      className="anghami"
      src={anghamiUrl}
      scrolling="no"
      frameBorder="0"
      width="600"
      height="450"
      title="Anghami Player"
    ></iframe>
  </SpotifyEmbedWrapper>
);

const MatterportEmbed = ({ matterportUrl }) => (
  <SpotifyEmbedWrapper>
    <iframe
      className="matterport"
      width="715"
      height="402"
      src={matterportUrl}
      frameBorder="0"
      allowFullScreen
      allow="xr-spatial-tracking"
      title="Matterport Player"
    ></iframe>
  </SpotifyEmbedWrapper>
);

const SpotifyEmbed = ({ spotifyUrl }) => (
  <SpotifyEmbedWrapper>
    <iframe
      src={spotifyUrl}
      width="100%"
      height="232"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="Spotify Player"
    ></iframe>
  </SpotifyEmbedWrapper>
);

const PodiantPlayer = ({ podiantUrl }) => (
  <SpotifyEmbedWrapper>
    <iframe
      src={podiantUrl}
      width="100%"
      height="150"
      frameBorder="0"
      title="Podiant Player"
    ></iframe>
  </SpotifyEmbedWrapper>
);

const ImageWithCaption = ({ image, caption }) => {
  // console.log(image, caption);
  return (
    <ImageWithCaptionDiv>
      {image && image.slide.childImageSharp ? (
        <Img fixed={image.slide.childImageSharp.fixed} alt={caption} />
      ) : image ? (
        <img src={image.slide.publicURL} alt={caption} />
      ) : null}
      {caption && caption.length ? <p>{caption}</p> : null}
    </ImageWithCaptionDiv>
  );
};

const VideoWithCaption = ({
  video,
  videoUrl,
  videoOnLeft,
  caption,
  videoUseCredit,
  accentColor,
}) => {
  const noCaption = videoUseCredit || !caption;
  const playIcon =
    accentColor === "var(--purple)"
      ? PlayIconPurple
      : accentColor === "var(--red)"
      ? PlayIconRed
      : accentColor === "var(--green)"
      ? PlayIconGreen
      : PlayIconYellow;

  const vUrl = (video, videoUrl) => {
    let v = "";
    if (videoUrl != null) {
      v = videoUrl;
    } else {
      v = video != null ? video[0].url : "";
    }
    v = v.replace(/http:/g, "https:");
    // console.log(v);
    return v;
  };

  return (
    <VideoWithCaptionDiv
      videoOnLeft={videoOnLeft}
      className={noCaption ? "empty" : null}
      style={{ minHeight: "fit-content", marginBottom: "45px" }}
    >
      <div>
        <div className="player-wrapper">
          <ReactPlayer
            url={vUrl(video, videoUrl)}
            controls={true}
            className="react-player"
            width={"100%"}
            height={"100%"}
            light
            playing
            playIcon={
              <img src={playIcon} alt="play" width={200} height={200} />
            }
          />
        </div>
        {videoUseCredit ? <p className="credit">{caption}</p> : null}
      </div>
      {noCaption ? null : (
        <div>
          <H3Italic>{caption}</H3Italic>
        </div>
      )}
    </VideoWithCaptionDiv>
  );
};

const SlideShow = ({ images, caption }) => {
  // console.log(images);
  const [top, setTop] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [height, setHeight] = React.useState(530);
  const slideShowRef = React.useRef();
  const { width } = useWindowSize();

  React.useEffect(() => {
    const myTop = slideShowRef.current.getBoundingClientRect();
    const parentOffset =
      slideShowRef.current.parentElement.getBoundingClientRect();
    const child = slideShowRef.current.firstChild.getBoundingClientRect();
    setTop(myTop.y - parentOffset.y);
    setLeft(0 - parentOffset.x);
    setHeight(child.height);
  }, [width]);
  return (
    <ImageSliderDiv
      backgroundColor={"var(--black)"}
      className="imageslider"
      ref={slideShowRef}
      height={height}
    >
      <ImageSliderDivInterior top={top} left={left}>
        <div>
          {images.map((image, index) => (
            <div key={index}>
              {image && image.slide && image.slide.childImageSharp ? (
                <Img fixed={image.slide.childImageSharp.fixed} alt={caption} />
              ) : image ? null : null}
            </div>
          ))}
        </div>
        <p className="slideshowcaption">{caption}</p>
      </ImageSliderDivInterior>
    </ImageSliderDiv>
  );
};

const ImageSlider = ({ images, captions }) => {
  // console.log(images);
  const [top, setTop] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [height, setHeight] = React.useState(530);
  const slideShowRef = React.useRef();
  const { width } = useWindowSize();

  React.useEffect(() => {
    const myTop = slideShowRef.current.getBoundingClientRect();
    const parentOffset =
      slideShowRef.current.parentElement.getBoundingClientRect();
    const child = slideShowRef.current.firstChild.getBoundingClientRect();
    setTop(myTop.y - parentOffset.y);
    setLeft(0 - parentOffset.x);
    setHeight(child.height);
  }, [width]);
  // console.log(captions);
  return (
    <ImageSliderDiv
      backgroundColor={"var(--black)"}
      className="imageslider"
      ref={slideShowRef}
    >
      <ImageSliderDivInterior>
        <div>
          {images.map((image, index) => (
            <div key={index}>
              {image.slide && image.slide.childImageSharp ? (
                <Img fixed={image.slide.childImageSharp.fixed} />
              ) : image ? null : null}
              {captions && captions[index] ? (
                <React.Fragment>
                  <p>{captions[index].captionLine1}</p>
                  <p>{captions[index].captionLine2}</p>
                  <p>{captions[index].captionLine3}</p>
                  <p>{captions[index].captionLine4}</p>
                </React.Fragment>
              ) : null}
            </div>
          ))}
        </div>
      </ImageSliderDivInterior>
    </ImageSliderDiv>
  );
};

const PhotoWithQuote = ({ photoOnLeft, image, quote, quoteAttribution }) => {
  const noCaption = !quoteAttribution && !quote;
  // console.log(image);
  return (
    <PhotoWithQuoteDiv
      photoOnLeft={photoOnLeft}
      className={noCaption ? "empty" : null}
    >
      {image.slide.childImageSharp ? (
        <Img fixed={image.slide.childImageSharp.fixed} alt={quote} />
      ) : image ? (
        <img src={image.slide.publicURL} alt={quote} />
      ) : null}
      {noCaption ? null : (
        <div>
          <H3Italic>{quote}</H3Italic>
          <H5SmallMedium
            dangerouslySetInnerHTML={{ __html: quoteAttribution }}
          />
        </div>
      )}
    </PhotoWithQuoteDiv>
  );
};

const PhotoWithText = ({ photoOnLeft, image, text }) => {
  const noCaption = !text;
  const noPhoto = !image;
  // console.log(image);
  return (
    <PhotoWithQuoteDiv
      photoOnLeft={photoOnLeft}
      className={noCaption ? "empty" : noPhoto ? "nophoto" : ""}
    >
      {noPhoto ? null : image.slide.childImageSharp ? (
        <Img fixed={image.slide.childImageSharp.fixed} />
      ) : image && image.slide.publicURL != null ? (
        <img src={image.slide.publicURL} alt={text} />
      ) : null}
      {noCaption ? null : <div dangerouslySetInnerHTML={{ __html: text }} />}
    </PhotoWithQuoteDiv>
  );
};

const filterTxt = (text) => {
  if (text != null && text.length > 0) {
    let r = text.includes("/cms.alserkal/assets");

    text = text.replace(/cms.alserkal/g, "alserkal");
    text = text.replace(
      /https:\/\/alserkal.online\/assets/g,
      "https://cms.alserkal.online/assets/"
    );
    // console.log(text);
  }
  return text;
};

const RichContext = ({ content, accentColor }) => {
  /**
   * This component deals with the RichContent matrix field in Craft.
   */
  // console.log(content);
  return (
    <RichContextWrapper accentColor={accentColor || "var(--green)"}>
      {content && content.length
        ? content.map(
            (node, index) =>
              node.typeHandle === "richText" ? (
                <RichText key={index} html={filterTxt(node.richText)} />
              ) : node.typeHandle === "image" ? (
                <ImageWithCaption
                  image={node.imageWithCaptionImage[0]}
                  caption={node.imageWithCaptionCaption}
                  key={index}
                />
              ) : node.typeHandle === "slideShow" ? (
                <SlideShow
                  images={node.images}
                  caption={node.carouselCaption}
                  key={index}
                />
              ) : node.typeHandle === "imageSlider" ? (
                <ImageSlider
                  key={index}
                  images={node.imageSliderImages}
                  captions={node.imageSliderCaptions}
                />
              ) : node.typeHandle === "photoWithQuote" ? (
                <PhotoWithQuote
                  key={index}
                  image={node.photoWithQuoteImage[0]}
                  quote={node.photoWithQuoteImageQuote}
                  quoteAttribution={node.photoWithQuoteImageQuoteAttribution}
                  photoOnLeft={node.photoWithQuoteImageOnTheLeft}
                />
              ) : node.typeHandle === "videoWithCaption" ? (
                <VideoWithCaption
                  key={index}
                  caption={node.videoWithCaptionCaption}
                  video={node.videoWithCaptionVideo}
                  videoUrl={node.videoWithCaptionUrl}
                  videoOnLeft={node.videoWithCaptionVideoOnTheLeft}
                  videoUseCredit={node.videoWithCaptionUseCredit}
                  accentColor={accentColor}
                />
              ) : node.typeHandle === "spotifyPlayer" ? (
                <SpotifyEmbed spotifyUrl={node.spotifyUrl} key={index} />
              ) : node.typeHandle === "soundcloudPlayer" ? (
                <SoundCloudEmbed
                  soundCloudUrl={node.soundcloudUrl}
                  key={index}
                />
              ) : node.typeHandle === "podiantPlayer" ? (
                <PodiantPlayer podiantUrl={node.podiantUrl} key={index} />
              ) : node.typeHandle === "anghamiPlayer" ? (
                <AnghamiEmbed anghamiUrl={node.anghamiUrl} key={index} />
              ) : node.typeHandle === "matterportEmbed" ? (
                <MatterportEmbed
                  matterportUrl={node.matterportUrl}
                  key={index}
                />
              ) : node.typeHandle === "photoWithText" ? (
                <PhotoWithText
                  key={index}
                  image={
                    node.photoWithQuoteImage && node.photoWithQuoteImage.length
                      ? node.photoWithQuoteImage[0]
                      : null
                  }
                  text={node.photoWithQuoteRichText}
                  photoOnLeft={node.photoWithQuoteImageOnTheLeft}
                />
              ) : null /*(
              <div key={index}>{JSON.stringify(node)}</div>
            )*/
          )
        : null}
    </RichContextWrapper>
  );
};

export default RichContext;

RichContext.propTypes = {
  content: PropTypes.arrayOf(
    /** typeHandle: richText: */
    PropTypes.oneOfType([
      PropTypes.shape({
        typeHandle: PropTypes.string,
        richText: PropTypes.string,
      }),
      /** typeHandle: slideShow: */
      PropTypes.shape({
        typeHandle: PropTypes.string,
        carouselCaption: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
      }),
      /** typeHandle: image: */
      PropTypes.shape({
        typeHandle: PropTypes.string,
        imageWithCaptionCaption: PropTypes.string,
        imageWithCaptionImage: PropTypes.arrayOf(
          PropTypes.shape({ url: PropTypes.string })
        ),
      }),
      /** typeHandle: imageSlider */
      PropTypes.shape({
        typeHandle: PropTypes.string,
        imageSliderImages: PropTypes.arrayOf(
          PropTypes.shape({ url: PropTypes.string })
        ),
        imageSliderCaptions: PropTypes.arrayOf(
          PropTypes.shape({
            captionLine1: PropTypes.string,
            captionLine2: PropTypes.string,
            captionLine3: PropTypes.string,
            captionLine4: PropTypes.string,
          })
        ),
      }),
    ])
  ),
};
