import * as React from "react";

import OtherLayout from "../layouts/otherLayout";
import SuicideComponent from "../components/suicideComponent";
function Suicide() {
  return (
    <OtherLayout>
      <SuicideComponent />
    </OtherLayout>
  );
}

export default Suicide;

export const Head = () => <title>Sukoon || Suicide Help</title>;
