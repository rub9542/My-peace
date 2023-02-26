import * as React from "react"

import OtherLayout from "../../layouts/otherLayout";
import ChattarpurPageComponent from "../../components/facilityPage/chattarpur"

const ChattarpurPage = () => {
  return (
    <OtherLayout>
        <ChattarpurPageComponent/>
    </OtherLayout>
  )
}

export default ChattarpurPage;

export const Head = () => <title>Facilities || Chhatarpur Page</title>;
