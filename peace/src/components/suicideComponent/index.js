import React from "react";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import ExploreWeeklyRoutine from "../weeklyRoutine/explore";
import SuicideImage from "../../images/suicide/suicide-bg.png";
import HelpLineComponent from "./helpLine";
import Faq from "../faq";
import NewsLetter from "../../images/subscribe/Newsletter.png";
import {
  ThoughtsContainer,
  ThoughtsWrapper,
  ThoughtsImageWrapper,
  ThoughtsWrappertext,
  ThoughtsList,SuicidemainWrapper
} from "./suicideStyle";
import ThoughtsImageOne from "../../images/suicide/thoughtsImageOne.png";
import ThoughtsImageTwo from "../../images/suicide/thoughtsImageTwo.png";
import Dots from "../../images/suicide/dots.png";
function index() {
  const ThoughtsArr = [
    {
      img: ThoughtsImageOne,
      title: "Prevention",
      listData: [
        {
          item: "Talking calmly with them in private and expressing care",
        },
        {
          item: "Taking what they say seriously and assuring them that their life matters ",
        },
        {
          item: "Removing dangerous objects, such as guns and drugs",
        },
        {
          item: "Reach calling for help and staying with them until help arrives following up with them after the crisis is over",
        },
      ],
    },
    {
      img: ThoughtsImageTwo,
      title: "Warning Signs",
      listData: [
        {
          item: "Unbearable emotional pain extremely anxious and sad, full of rage, or agitated",
        },
        {
          item: "Trapped, hopeless, empty, or that there is no reason to live",
        },
        {
          item: "severe fluctuations in mood or mood swings",
        },
      ],
    },
  ];
  return (
    <SuicidemainWrapper>
      <ExploreWeeklyRoutine
        title="Suicide help"
        subtitle="If You Know Someone in Crisis"
        imgPath={SuicideImage}
        description="If you're having any suicidal thoughts, please seek help immediately. Talk about what bothers you and what can be done to solve the problem. also if you need help to overcome Depression , heartbreak , failure , stress : You can call one of the following numbers: These are free. and you can keep your name hidden."
      />
      <HelpLineComponent />
      <ThoughtsContainer>
        {/* <SecondaryTitle title="About" subTitle="Our doctors" /> */}
        <p>Suicidal thoughts</p>
        <span>
          Suicidal thoughts involve a person thinking about ending their own
          life. However, there is no universally accepted definition of the term
          “suicidal ideation” in the medical community. Some people say that
          suicidal ideation involves actively planning suicide, whereas suicidal
          thoughts do not necessarily indicate a person has the intention to end
          their life.
        </span>
        {ThoughtsArr.map((x, index) => (
          <ThoughtsWrapper key={index}>
            <ThoughtsImageWrapper>
              <img src={x.img} alt="thoughts" />
            </ThoughtsImageWrapper>
            <ThoughtsWrappertext>
              <p>{x.title}</p>
              <div>
                {x.listData.map((y) => (
                  <ThoughtsList>
                    <img src={Dots} alt="*" />
                    <span>{y.item}</span>
                  </ThoughtsList>
                ))}
              </div>
            </ThoughtsWrappertext>
          </ThoughtsWrapper>
        ))}
      </ThoughtsContainer>
      <SingleSectionWrapper margin="6.5rem 0 5rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an appointment now"
        />
      </SingleSectionWrapper>
      <Faq />
      <br />
      <SingleSectionWrapper margin="6rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </SuicidemainWrapper>
  );
}

export default index;
