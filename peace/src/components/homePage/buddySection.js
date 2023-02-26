import React from "react";

import AnxietyCard from "../anxietyCard";
import BgImage from "../../images/homePage/buddyBg.png";
import {
  BuddySectionBgImage,
  BuddySectionImageWrapper,
  BuddySectionWrapper,
} from "../../styles/homePageStyle";

export default function BuddySection({
  dataArray,
  otherData,
  title,
  needBottomtext,
  noBgImage,
  isInternationalPage,
}) {
  return (
    <BuddySectionWrapper customSubTitle={otherData.subTitle ? true : false}>
      <h2>
        {title && "Hey,"}{" "}
        <span>{otherData.subTitle ? otherData.subTitle : "Buddy"}</span>
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0282 15.5011C21.4592 19.0806 18.3355 22.2014 14.7924 24.7572C14.5509 24.614 14.3107 24.469 14.0719 24.322C9.97163 21.7984 6.27438 18.7087 3.45636 14.89C0.89488 11.4183 -2.1202 4.53676 2.11335 1.08272C3.95442 -0.422888 6.76493 -0.228043 8.76608 0.870164C11.2214 2.21654 12.7329 4.72618 14.0582 7.11298C15.8212 3.96393 18.0776 0.423904 22.036 0.135072C25.5047 -0.11291 27.5414 2.40234 27.7459 5.64382C27.9505 9.39898 26.1717 12.543 24.0282 15.5011Z"
            fill="#455A64"
          />
        </svg>
      </h2>
      <BuddySectionImageWrapper forInternational={isInternationalPage}>
        {dataArray.map((card,index) => (
          <AnxietyCard
            forInternational={isInternationalPage}
            key={index}
            src={card.path}
            label={card.label}
            title={card.title}
            cardHeight={otherData.cardHeight}
            innerHeight={otherData.innerHeight}
            fromLocation={
              otherData.fromLocationPath ? otherData.fromLocationPath : "home"
            }
          />
        ))}
      </BuddySectionImageWrapper>
      {needBottomtext && (
        <>
          <h2>
            Why go through anxiety, stress or addictions
            <br />
            <span>all by yourself?</span>{" "}
          </h2>
          <p>
            We're here to tell you that you deserve best health for your mind as
            much as you do for your body too.
            <br />
            <br />
            Our world class facilities with experienced mental health experts
            and brilliant techniques will certainly get you covered!
          </p>
        </>
      )}
      {noBgImage ? (
        <></>
      ) : (
        <BuddySectionBgImage src={BgImage} alt="overlay image" />
      )}
    </BuddySectionWrapper>
  );
}
