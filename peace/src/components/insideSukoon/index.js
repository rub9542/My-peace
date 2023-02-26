import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import OutsideClickHandler from "react-outside-click-handler";
import {
  InsideSukoonImageWrapper,
  InsideSukoonParagraphText,
  InsideSukoonTextWrapper,
  InsideSukoonWrapper,
  InsideSukoonVideo,
  CloseIcon,
} from "./insideSukoonStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import VideoPopUp from "./videoPopUp";

export default function InsideSukoon({ titleProp, descProp,responsivePadding, subTitleProp }) {
  const [openPopup, setOpenPopup] = useState(false);
  const showPopup = () => {
    setOpenPopup(true);
  };
  const closePopUp = () => {
    setOpenPopup(false);
  };

  return (
    <InsideSukoonWrapper responsiveStyle={responsivePadding}>
      <InsideSukoonImageWrapper>
        <div
          className="cursor"
          onClick={showPopup}
          onKeyDown={showPopup}
          role="presentation"
        >
          <StaticImage
            alt="Inside sukoon take a tour"
            src="../../images/homePage/insideSukoonDotted.png"
          />
        </div>
      </InsideSukoonImageWrapper>
      <InsideSukoonVideo>
        <OutsideClickHandler onOutsideClick={closePopUp}>
          {openPopup && (
            <>
              <CloseIcon role="presentation" onClick={closePopUp}>
                <StaticImage
                  alt="modal close icon"
                  className="cursor"
                  src="../../images/header/close.png"
                />
              </CloseIcon>
              <VideoPopUp />
            </>
          )}
        </OutsideClickHandler>
      </InsideSukoonVideo>
      <InsideSukoonTextWrapper>
        <SecondaryHeaderTitle
          title={titleProp ? titleProp : "Inside Sukoon"}
          subTitle={subTitleProp ? subTitleProp : "Take a tour"}
        />
        <InsideSukoonParagraphText>
          {descProp
            ? descProp
            : `we will take you a small tour of sukoon, who we are and what we do
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.`}
        </InsideSukoonParagraphText>
      </InsideSukoonTextWrapper>
    </InsideSukoonWrapper>
  );
}
