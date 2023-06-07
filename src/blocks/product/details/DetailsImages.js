import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DetailsImages = ({ itemImages }) => {
  const [carouselWidth, setCarouselWidth] = useState(window.innerWidth * 0.4);
  const carouselObject = () => {
    return (
      <Carousel
        width={carouselWidth}
        showIndicators={false}
        dynamicHeight={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {itemImages.map((x, i) => (
          <img key={i} src={x.url_fullxfull} alt="" />
        ))}
      </Carousel>
    );
  };
  useEffect(() => {
    const handleResize = () => {
      setCarouselWidth(window.innerWidth * 0.4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <BodyStyle>{carouselObject()}</BodyStyle>;
};
const BodyStyle = styled.div`
  display: flex;
  flex: 1 0;
  justify-content: center; // horizontal align
  padding: 5px 15px;
  margin: 10px;
`;
export default DetailsImages;
