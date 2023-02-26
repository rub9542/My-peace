import * as React from "react";
import CareerPageComponent from "../../components/career";

import OtherLayout from "../../layouts/otherLayout";

const CareerPage = () => {
  return (
    <OtherLayout>
        <CareerPageComponent/>
    </OtherLayout>
  );
};

export default CareerPage;

export const Head = () => <title>Sukoon || Career</title>;
