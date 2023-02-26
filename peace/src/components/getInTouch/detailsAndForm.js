import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import {
  FormAndDetailContainer,
  DetailsContainer,
  DetailsTitle,
  FooterImageWrapper,
  AddressDetails,
  FooterText,
  AddressTitles,
  AddressContainer,
  BackBgImage,
  FormWrapper,
} from "./getInTouchStyle";
import FormTouch from "./touchForm";
function DetailsAndForm() {
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
        <FooterText>
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
        </FooterText>
        <DetailsTitle>Visit us</DetailsTitle>
        {address.map((x, index) => (
          <AddressContainer key={index}>
            <AddressTitles>{x.title}</AddressTitles>
            <AddressDetails>
              {x.address} <br /> {x.subAddress} <br />
              {x.state}
            </AddressDetails>
          </AddressContainer>
        ))}
      </DetailsContainer>
      <FormWrapper>
        <FormTouch />
      </FormWrapper>
    </FormAndDetailContainer>
  );
}

export default DetailsAndForm;
