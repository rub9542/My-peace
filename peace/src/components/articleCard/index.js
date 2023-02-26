import React from "react";
import { Link } from "gatsby";

import {
  ArticleCardDescription,
  ArticleCardFooterSection,
  ArticleCardHeader,
  ArticleCardWrapper,
  ArticleIconSection,
  ArticleImageWrapper,
  ArticleLabel,
} from "./articleCardStyle";
import Article from "../../images/header/moreMenu.png";
import moment from "moment";
// import { ShareSocial } from "react-share-social";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

export default function index({ dataObj, mediaContent, apiPath }) {
  const shareUrl =
    window.location.origin + `/${apiPath}/${dataObj?.attributes.Slug}`;
  return (
    <ArticleCardWrapper>
      <ArticleImageWrapper>
        <img
          alt="article post"
          src={
            dataObj?.attributes?.image &&
            dataObj?.attributes?.image?.data !== null
              ? dataObj?.attributes?.image?.data?.attributes?.url
              : Article
          }
        />
      </ArticleImageWrapper>
      <ArticleIconSection>
        <ArticleLabel>
          {`${moment(dataObj?.attributes.createdAt).fromNow(true)} ago`}{" "}
        </ArticleLabel>
        {mediaContent && (
          <div>
            {/* <ShareSocial
              url="www.google.com"
              socialTypes={["twitter", "facebook"]}
              onSocialButtonClicked={(data) => console.log(data)}
              style={style}
            /> */}

            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={32} />
            </TwitterShareButton>

            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} />
            </FacebookShareButton>
          </div>
        )}
      </ArticleIconSection>
      <ArticleCardHeader>{dataObj?.attributes.title}</ArticleCardHeader>
      <ArticleCardDescription>
        {dataObj?.attributes.description}
      </ArticleCardDescription>
      <ArticleCardFooterSection>
        <ArticleLabel>12 Min Read</ArticleLabel>
        <Link to={`/${apiPath}/${dataObj?.attributes.Slug}`}>
          <button>Read Full &#8594;</button>
        </Link>
      </ArticleCardFooterSection>
    </ArticleCardWrapper>
  );
}
