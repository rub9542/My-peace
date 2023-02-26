import React from "react";
import FooterData from "./footerData";

import FooterStyle from "./footerStyle";

function Footer() {
  return (
    <div>
      <FooterStyle.FooterMargin>
        <FooterData />
      </FooterStyle.FooterMargin>
    </div>
  );
}

export default Footer;
