import * as React from "react";
import FaqDetailComponent from "../components/faqDetail";

import OtherLayout from "../layouts/otherLayout";

const FaqDetailPage = () => {
  return (
    <OtherLayout>
      <FaqDetailComponent />
    </OtherLayout>
  );
};

export default FaqDetailPage;

export const Head = () => <title>Sukoon || Faq Page</title>;
