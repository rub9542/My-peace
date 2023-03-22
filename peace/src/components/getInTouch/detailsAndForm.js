import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";

import {
  FormAndDetailContainer,
  DetailsContainer,
  DetailsTitle,
  FooterImageWrapper,
  AddressDetails,
  GetInTouchText,
  AddressTitles,
  AddressContainer,
  BackBgImage,
  FormWrapper,
} from "./getInTouchStyle";
import FormTouch from "./touchForm";
function DetailsAndForm() {
  const [formSuccess, setformSuccess] = useState(false);

  const address = [
    {
      title: "Gurgaon",
      address: " Sector-56,",
      subAddress: "Gurugram",
      state: "Haryana - 122011",
    },
    {
      title: "Chhatarpur",
      address: " Sector-56,",
      subAddress: "Gurugram",
      state: "Haryana - 122011",
    },
    {
      title: "Delhi",
      address: " Sector-56,",
      subAddress: "Gurugram",
      state: "Haryana - 122011",
    },
  ];
  return (
    <FormAndDetailContainer>
      <BackBgImage />
      <DetailsContainer>
        <DetailsTitle>Get in Touch</DetailsTitle>
        <GetInTouchText>
          <div>
            <FooterImageWrapper>
              <StaticImage
                alt="Phone logo"
                src="../../images/getInTouch/phone.png"
              />
            </FooterImageWrapper>
            +91 8448170041
          </div>
          <div>
            <FooterImageWrapper>
              <StaticImage
                alt="Phone logo"
                src="../../images/getInTouch/landline.png"
              />
            </FooterImageWrapper>
            +91 124 4265238
          </div>
          <div>
            <FooterImageWrapper>
              <StaticImage
                alt="Phone logo"
                src="../../images/getInTouch/mail.png"
              />
            </FooterImageWrapper>
            Info@sukoonhealth.com
          </div>
        </GetInTouchText>
        <DetailsTitle>Visit us</DetailsTitle>
        {address.map((x) => (
          <AddressContainer key={x.state}>
            <AddressTitles>{x.title}</AddressTitles>
            <AddressDetails>
              {x.address} <br /> {x.subAddress} <br />
              {x.state}
            </AddressDetails>
          </AddressContainer>
        ))}
      </DetailsContainer>
      <FormWrapper>
        <FormTouch
          formSuccess={formSuccess}
          setformSuccess={setformSuccess}
          frompath="get-in-touches"
        />
      </FormWrapper>
    </FormAndDetailContainer>
  );
}

export default DetailsAndForm;
