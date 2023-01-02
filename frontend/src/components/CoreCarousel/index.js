import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { InfoWrapper, SlideWrapper } from "./elements";
import { H3Strong, H5BigMedium } from "../Typography";

const CoreCarousel = ({
  images,
  currentSlide,
  setCurrentSlide,
  controlColor,
  shadow,
  imagesAreUrls,
  showDots,
}) => {
  const slideClass = (index) => {
    if (currentSlide === index) {
      return "on";
    }
    if (currentSlide - index === 1) {
      return "left";
    }
    if (index - currentSlide === 1) {
      return "right";
    }
    return "hidden";
  };

  return (
    <SlideWrapper controlColor={controlColor || "var(--white)"} shadow={shadow}>
      {images && images.length ? (
        <React.Fragment>
          <div>
            <div>
              {images.map((image, index) => (
                <div key={index} className={slideClass(index)}>
                  <a
                    href={
                      index === currentSlide && image.link ? image.link : "/#"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentSlide(index);
                    }}
                  >
                    {imagesAreUrls ? (
                      <Img fixed={image.fixed} />
                    ) : (
                      <div>{image.image}</div>
                    )}
                    {image?.data && currentSlide === index && (
                      <InfoWrapper>
                        <H3Strong style={{ color: "var(--white)" }}>
                          {image.data?.title}
                        </H3Strong>
                        <H5BigMedium
                          style={{ color: "var(--blue)", marginTop: "10px" }}
                        >
                          {image.data?.date}
                        </H5BigMedium>
                        <H5BigMedium
                          style={{
                            color: "var(--blue)",
                            textTransform: "uppercase",
                          }}
                        >
                          {image.data?.time}
                        </H5BigMedium>
                        <H5BigMedium style={{ color: "var(--mid)" }}>
                          {image.data?.location}
                        </H5BigMedium>
                      </InfoWrapper>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {showDots && (
            <nav>
              <ul>
                {images.length > 1
                  ? images.map((x, index) => (
                      <li
                        className={currentSlide === index ? "selected" : ""}
                        key={`carousel${index}`}
                      >
                        <a
                          aria-hidden
                          href="/#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentSlide(index);
                          }}
                        >
                          {index}
                        </a>
                      </li>
                    ))
                  : null}
              </ul>
            </nav>
          )}
        </React.Fragment>
      ) : null}
    </SlideWrapper>
  );
};

export default CoreCarousel;

CoreCarousel.propTypes = {
  /** These two should be from React.useState in parent component. This is the index of the selected slide. */
  currentSlide: PropTypes.number,
  /** These two should be from React.useState in parent component. This returns an index of a slide to turn to. */
  setCurrentSlide: PropTypes.func,
  /** This is for the color of the controls at the bottom: default is white.
   * */
  controlColor: PropTypes.string,
  /** This is for whether the selected image should have a drop shadow or not */
  shadow: PropTypes.bool,
  /** This is currently set up to take DOM nodes, though we could modify it to just be images + alt text */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.element,
      link: PropTypes.string,
    })
  ),
  imagesAreUrls: PropTypes.bool,
  showDots: PropTypes.bool,
};

CoreCarousel.defaultProps = {
  currentSlide: 1,
  controlColor: "var(--white)",
  shadow: true,
  imagesAreUrls: false,
  showDots: true,
};
