import * as React from "react";
import MediaPageComponent from "../../components/mediaPage";

import OtherLayout from "../../layouts/otherLayout";

const MediaPage = () => {
  return (
    <OtherLayout>
      <MediaPageComponent />
    </OtherLayout>
  );
};

export default MediaPage;

export const Head = () => <title>Sukoon || Media</title>;
