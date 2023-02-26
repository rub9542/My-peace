import React from "react";

import CardStyle from "./cardStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import { imageData, cardCaurosalImage } from "./cardData";
import Carousel, { consts } from "react-elastic-carousel";
import LeftArrow from "../../images/carousel/leftArrow.js";
import RightArrow from "../../images/carousel/rightArrow.js";

function Card(props) {
  const { title, subTitle, type } = props;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];

  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <LeftArrow color={"rgba(0, 0, 0, 0.33)"} isEdge={isEdge} />
      ) : (
        <RightArrow isEdge={isEdge} color={"rgba(0, 0, 0, 0.33)"} />
      );
    return (
      <CardStyle.CardCarouselArrowBtn
        onClick={onClick}
        isEdge={isEdge}
        customStyle={props.forStyle === "insurence" ? true : false}
      >
        {pointer}
      </CardStyle.CardCarouselArrowBtn>
    );
  }

  return (
    <CardStyle.CardContainer
      customStyle={props.forStyle === "insurence" ? true : false}
    >
      <CardStyle.CardWrapper>
        <SecondaryHeaderTitle title={title} subTitle={subTitle} />
      </CardStyle.CardWrapper>
      {type === "image" ? (
        <CardStyle.CardImageWrapper>
          <Carousel
            itemsToShow={5}
            breakPoints={breakPoints}
            pagination={false}
          >
            {imageData.map((x) => (
              <img key={x.key} alt="accredtions" src={x.imagePath} />
            ))}
          </Carousel>
        </CardStyle.CardImageWrapper>
      ) : (
        <CardStyle.CardCarouselWrapper
          customStyle={props.forStyle === "insurence" ? true : false}
        >
          <Carousel
            renderArrow={myArrow}
            itemsToShow={5}
            breakPoints={breakPoints}
            pagination={props.forStyle === "insurence" ? true : false}
          >
            {cardCaurosalImage.map((x) => (
              <img key={x.key} alt="insurance companies" src={x.imagePath} />
            ))}
          </Carousel>
        </CardStyle.CardCarouselWrapper>
      )}
    </CardStyle.CardContainer>
  );
}

export default Card;
