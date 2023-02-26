import * as React from "react"

import OtherLayout from "../../layouts/otherLayout";
import DelhiPageComponent from "../../components/facilityPage/delhi"

const DelhiPage = () => {
  return (
    <OtherLayout>
        <DelhiPageComponent/>
    </OtherLayout>
  )
}

export default DelhiPage;

export const Head = () => <title>Facilities || Delhi Page</title>;
