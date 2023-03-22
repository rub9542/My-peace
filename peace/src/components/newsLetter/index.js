import React from "react";
import { graphql } from "gatsby";

import MediaDetailContent from "../mediaDetail/MediaDetailContent";
import OtherLayout from "../../layouts/otherLayout";
import MediaBlog from "../mediaDetail/mediaBlogCommon";

export default function MediaDetailComponent({ data }) {
  const { strapiNewsLetter } = data;
  return (
    <OtherLayout>
      <MediaDetailContent dataObj={strapiNewsLetter} toPath="/media"/>
      <MediaBlog />
    </OtherLayout>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiNewsLetter(Slug: { eq: $slug }) {
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
