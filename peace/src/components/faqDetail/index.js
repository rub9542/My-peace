import React, { useState, useEffect } from "react";

import { SingleSectionWrapper } from "../../styles/homePageStyle";
import { FormInput } from "../form/formStyle";
import ArticleSection from "../articleSection";
import CheerSubscribe from "../staticComponent/cheerSubscribe";
import FaqDetailAccordion from "./faqDetailAccordion";
import Loader from "../loader";
import { getMediaDatas } from "../../api";
import CheerImage from "../../images/cheerup/Cheer-group.png";
import NewsLetter from "../../images/subscribe/Newsletter.png";

import {
  DetailLabel,
  DetailSearch,
  DetailSectionTextWrapper,
  FaqDetailSectionWrapper,
  SecondaryTitle,
} from "./faqDetailStyle";

export default function FaqDetailComponent() {
  const [faqArray, setFaqArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchWords, setSearchWords] = useState("");

  useEffect(() => {
    hendleFaqData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWords]);

  const hendleFaqData = async () => {
    let url = `faqs?populate=*&pagination[page]=1&sort=rank:asc`;
    if (searchWords.length > 0)
      url += `&filters[title][$containsi]=${searchWords}`;
    setLoading(true);
    const newData = await getMediaDatas(url);
    const { status, body } = newData;
    if (status === 200) {
      setLoading(false);
      const { data } = body;
      setFaqArray(data);
    } else {
      setLoading(false);
    }
  };
  return (
    <FaqDetailSectionWrapper>
      <DetailSectionTextWrapper>
        <div>
          <SecondaryTitle>
            FAQ
            <br />
            <span>Ask us anything</span>
          </SecondaryTitle>
        </div>
      </DetailSectionTextWrapper>
      <DetailSearch>
        <DetailLabel>Search</DetailLabel>
        <FormInput
          placeholder="Search questions you need to know"
          onChange={(e) => setSearchWords(e.target.value)}
        />
      </DetailSearch>
      {loading ? <Loader /> : <FaqDetailAccordion dataArray={faqArray} />}
      <SingleSectionWrapper margin="5rem 0 0.2rem 0">
        <CheerSubscribe
          title="Cheer up!"
          image={CheerImage}
          type="cheer"
          subTitle="Book an appointment now"
        />
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="3rem 0 2rem 0">
        <ArticleSection showIcons={true} urlPath="articles"/>
      </SingleSectionWrapper>
      <SingleSectionWrapper margin="7rem 0 3rem 0">
        <CheerSubscribe
          title="Subscribe now!"
          image={NewsLetter}
          type="subscribe"
          subTitle="To our newsletter for updated contents"
        />
      </SingleSectionWrapper>
    </FaqDetailSectionWrapper>
  );
}
