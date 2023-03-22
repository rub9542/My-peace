import React, { useState, useEffect } from "react";

import {
  ArticleInnerSectionWrapper,
  ArticleSectionFooter,
  ArticleSectionWrapper,
  ArticleCardContainer,
  SecondaryTitle,
  ArticleSubWrapper,
  SubTitleText,
} from "./articleSectionStyle";
import ArticleCard from "../articleCard";
import { DefaultButton } from "../button";
import { getMediaDatas } from "../../api";
import Loader from "../../components/loader";
import { Link } from "gatsby-link";
import { NotFound } from "../career/careerStyle";
export default function Article({
  titleProp,
  subtitleProp,
  showIcons,
  urlPath,
}) {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    let url = `blogs?populate=*&sort=rank:asc`;
    setLoading(true);
    const newdata = await getMediaDatas(url);
    const { body, status } = newdata;
    if (status === 200) {
      const { data } = body;
      setLoading(false);
      setArticleData(data);
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      {!loading ? (
        <ArticleSectionWrapper>
          <SecondaryTitle>{titleProp ? titleProp : "Articles"}</SecondaryTitle>
          <ArticleSubWrapper>
            <SubTitleText>
              {" "}
              {subtitleProp ? subtitleProp : "Read our recent articles"}
            </SubTitleText>
            <ArticleCardContainer>
              {articleData.length > 0 ? (
                <ArticleInnerSectionWrapper>
                  {articleData.length > 0 &&
                    articleData.map((item, index) => {
                      if (index < 3) {
                        return (
                          <ArticleCard
                            dataObj={item}
                            key={index}
                            mediaContent={showIcons}
                            apiPath={urlPath}
                          />
                        );
                      }
                      return "";
                    })}
                </ArticleInnerSectionWrapper>
              ) : (
                <NotFound>
                  <b>No Results Found !</b>
                </NotFound>
              )}
              {articleData.length > 0 && (
                <ArticleSectionFooter>
                  <Link to="/articles">
                    <DefaultButton name="View more" />
                  </Link>
                </ArticleSectionFooter>
              )}
            </ArticleCardContainer>
          </ArticleSubWrapper>
        </ArticleSectionWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
}
