import React from "react";
import { graphql } from "gatsby";

import MediaDetailContent from "./MediaDetailContent";
import OtherLayout from "../../layouts/otherLayout";
import MediaBlog from "./mediaBlogCommon";

export default function MediaDetailComponent({ data }) {
  const { strapiPost } = data;
  return (
    <OtherLayout>
      <MediaDetailContent dataObj={strapiPost} toPath="/media"/>
      <MediaBlog />
    </OtherLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiPost(Slug: { eq: $slug }) {
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
