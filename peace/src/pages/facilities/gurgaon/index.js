import * as React from "react"

import OtherLayout from "../../../layouts/otherLayout";
import GurgaonPageComponent from "../../../components/facilityPage/gurgaon"

const GurgaonPage = () => {
  return (
    <OtherLayout>
        <GurgaonPageComponent/>
    </OtherLayout>
  )
}

export default GurgaonPage;

export const Head = () => <title>Facilities || Gurgaon Page</title>;
