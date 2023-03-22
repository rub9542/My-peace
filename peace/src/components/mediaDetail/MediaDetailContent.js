import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "gatsby";

import {
  MainSectionWrapper,
  MediaWrapper,
  BackWrapper,
  MainImageWrapper,
  MentalHealthHeader,
  DepressionWrapper,
  DepressionContent,
  DepressionImage,
  AnxietyImage,
  AnxietyWrapper,
  MentalHealth,
  SocialIcon,
} from "./mediaDetailStyle";
import Twiter from "../../images/mediaDetail/twitter.png";
import FB from "../../images/mediaDetail/fb.png";

function MediaDetailContent({ dataObj, toPath }) {
  const FbIcon = {
    height: "39px",
  };
  return (
    <MainSectionWrapper>
      <Link /*to={toPath}*/>
        <MediaWrapper onClick={() => window.history.go(-1)}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="36"
              height="36"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <BackWrapper>
            <p> Back</p>
          </BackWrapper>
        </MediaWrapper>
      </Link>
      <MainImageWrapper>
        <img alt="MediaImage" src={dataObj && dataObj?.image?.url} />
      </MainImageWrapper>
      <MentalHealth>
        <MentalHealthHeader>
          <h4>{dataObj && dataObj.title}</h4>
          <SocialIcon>
            {/* <StaticImage
              alt="twitter Image"
              src="../../images/mediaDetail/twitter.png"
              style={paddingBetween}
            /> */}
            <img src={Twiter} alt="twitter" />
            {/* <StaticImage
              alt="facebook Image"
              src="../../images/mediaDetail/fb.png"
            /> */}
            <img src={FB} alt="facebook" style={FbIcon} />
          </SocialIcon>
        </MentalHealthHeader>

        <p>{dataObj && dataObj.description}</p>
      </MentalHealth>
      <DepressionWrapper>
        <DepressionImage>
          <StaticImage
            alt="Media Image"
            src="../../images/mediaDetail/depression.png"
          />
        </DepressionImage>
        <DepressionContent>
          <h3>Depression</h3>
          <p>
            Despite common belief, depression is not equivalent to a low mood.
            We all feel sad and moody from time to time. Depression is the
            persistent and consuming feelings of sadness, often with no apparent
            reason. If left untreated, it can extend for months or even years.
            Depression can be caused by serious medical conditions, family
            history, life events, and lifestyle (drug and alcohol consumption,
            sleep irregularities, etc). Depression is completely treatable- the
            sooner it is diagnosed the better. Severe depression for long
            periods can even make some people susceptible to suicidal thoughts.
          </p>
        </DepressionContent>
      </DepressionWrapper>
      <AnxietyWrapper>
        <DepressionContent>
          <h3>Anxiety</h3>
          <p>
            Anxiety disorders are among the most common forms of mental health
            problems. This includes generalized anxiety, social phobias,
            performance anxiety, panic disorders, specific phobias, OCD
            (Obsessive Compulsive Disorder) and PTSD (Post Traumatic Stress
            Disorder). It is important to remember that not all anxiety is an
            illness. Sometimes all of us worry, which is healthy because it
            motivates us to step outside of our comfort zone. However, extreme
            or irrational anxieties are types of psychological disorders, and if
            untreated, can cause problems such as depression, and false alarms.
          </p>
        </DepressionContent>
        <AnxietyImage>
          <StaticImage
            alt="Media Image"
            src="../../images/mediaDetail/anxiety.png"
          />
        </AnxietyImage>
      </AnxietyWrapper>
    </MainSectionWrapper>
  );
}

export default MediaDetailContent;
