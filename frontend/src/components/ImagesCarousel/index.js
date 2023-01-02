import React from "react";
import CoreCarousel from "./../CoreCarousel";
import { ImagesCarouselDiv } from "./elements";

const ImagesCarousel = ({
  images,
  controlColor,
  defaultSlide,
  showDots,
  imagesAreUrls,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(
    images && images.length > 1
      ? defaultSlide === "center"
        ? Math.floor(images.length / 2)
        : defaultSlide === "start"
        ? 0
        : defaultSlide === "end"
        ? images.length - 1
        : 1
      : 0
  );

  return (
    <ImagesCarouselDiv>
      <CoreCarousel
        images={images}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        controlColor={controlColor || "var(--purple)"}
        shadow={true}
        imagesAreUrls={imagesAreUrls || false}
        showDots={showDots}
      />
    </ImagesCarouselDiv>
  );
};

export default ImagesCarousel;
