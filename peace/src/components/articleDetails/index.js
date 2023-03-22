import React from "react";
import { graphql } from "gatsby";

import MediaDetailContent from "../mediaDetail/MediaDetailContent";
import OtherLayout from "../../layouts/otherLayout";
import MediaBlog from "../mediaDetail/mediaBlogCommon";

export default function MediaDetailComponent({ data }) {
  const { strapiBlog } = data;
  return (
    <OtherLayout>
      <MediaDetailContent dataObj={strapiBlog} toPath="/articles"/>
      <MediaBlog />
    </OtherLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiBlog(Slug: { eq: $slug }) {
      id
      Slug
      title
      description
      image {
        url
      }
    }
  }
`;
