import React, { useState } from "react";
import { Link } from "gatsby";

import { StaticStyle } from "./cheerSubscribeStyle";
import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import { DefaultButton, PrimaryLargeButton } from "../button";
import BookAppointmentModal from "../bookAppointmentModal";
import { FormError, FormInput, FormSuccess } from "../form/formStyle";

function CheerSubscribe(props) {
  const { title, subTitle, image, type } = props;
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const subscribeMail = () => {
    let checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setEmailError("Please enter your email address*");
      setEmailSuccess("");
    } else if (!checkEmail.test(email)) {
      setEmailError("Invalid email address*");
      setEmailSuccess("");
    } else {
      setEmail("");
      setEmailSuccess("Subscribed successfully!");
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  return (
    <StaticStyle.StaticContainer cardName={type}>
      <StaticStyle.StaticWrapper cardName={type}>
        <StaticStyle.StaticTextWrapper cardName={type}>
          <SecondaryHeaderTitle title={title} subTitle={subTitle} />
          {type === "subscribe" && (
            <StaticStyle.SubScribeInputSection>
              <FormInput
                bg="#fff"
                placeholder="Your Email"
                onChange={handleChange}
                value={email}
              />
              {emailError && <FormError> {emailError} </FormError>}
              {emailSuccess && <FormSuccess> {emailSuccess} </FormSuccess>}
            </StaticStyle.SubScribeInputSection>
          )}
          {title === "Explore Sukoon" ? (
            <Link to="/clinical-programs">
              <DefaultButton name="View Program" />
            </Link>
          ) : (
            <PrimaryLargeButton
              name={type === "subscribe" ? "Subscribe" : "Book Appointment"}
              onClick={type === "subscribe" ? subscribeMail : onOpenModal}
            />
          )}
        </StaticStyle.StaticTextWrapper>
        <StaticStyle.StaticImageWrapper cardName={type}>
          <img src={image} alt="carousel" />
        </StaticStyle.StaticImageWrapper>
      </StaticStyle.StaticWrapper>
      <BookAppointmentModal
        open={openModal}
        onCloseModal={onCloseModal}
        title="Book an Appointment"
      />
    </StaticStyle.StaticContainer>
  );
}

export default CheerSubscribe;
