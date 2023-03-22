import * as React from "react";
import BlogPageComponent from "../../components/blog";

import OtherLayout from "../../layouts/otherLayout";

const Articles = () => {
  return (
    <OtherLayout>
      <BlogPageComponent />
    </OtherLayout>
  );
};

export default Articles;

export const Head = () => <title>Sukoon || Articles Page</title>;
