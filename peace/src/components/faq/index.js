import React, { useState, useEffect } from "react";
import FaqAccordion from "./faqAccordion";
import FaqContent from "./faqContent";
import { getMediaDatas } from "../../api";
import { FaqContainer, FaqContentMain, FaqMainSection } from "./faqStyle";
import Loader from "../loader";
import { NotFound } from "../career/careerStyle";
function Faq() {
  const [faqArray, setFaqArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    hendleFaqData();
  }, []);

  const hendleFaqData = async () => {
    let url = `faqs?populate=*&pagination[page]=1&sort=rank:asc`;
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
    <FaqContainer>
      <FaqMainSection>
        <FaqContentMain>
          <FaqContent />
        </FaqContentMain>
        {loading ? (
          <Loader />
        ) : faqArray.length > 0 ? (
          <FaqAccordion dataArray={faqArray.length > 0 ? faqArray : []} />
        ) : (
          <NotFound>
            {" "}
            <b>No Results Found !</b>
          </NotFound>
        )}
      </FaqMainSection>
    </FaqContainer>
  );
}

export default Faq;
