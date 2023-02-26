import * as React from "react"
import InsuranceComponent from "../components/insurance";
import OtherLayout from "../layouts/otherLayout";

const Insurance = () => {
  return (
    <OtherLayout>
        <InsuranceComponent/>
    </OtherLayout>
  )
}

export default Insurance;

export const Head = () => <title>Insurance</title>;
