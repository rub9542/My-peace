import React, { useState } from "react";

import SecondaryHeaderTitle from "../secondaryHeaderTitle";
import {
  FacilitiesHeaderCardContainer,
  FacilitiesLabel,
  FacilitiesSpanWrapper,
  FacilitiesContainer,
  FacilitiesTextWrapper,
  FacilitiesButton,
} from "./facilitiesHeaderCardStyle.js";
import BookAppointmentModal from "../bookAppointmentModal";
import { PrimaryLargeButton } from "../button";

function FacilitiesHeader({ title, subTitle, description }) {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <FacilitiesHeaderCardContainer>
      <FacilitiesContainer>
        <FacilitiesTextWrapper>
          <FacilitiesLabel>Discover</FacilitiesLabel>
          <SecondaryHeaderTitle
            title={title || "Gurgaon"}
            subTitle={subTitle || "Truer to the nature of the beast."}
          />
          <FacilitiesSpanWrapper>
            {description ||
              " Gurgaon is a town in Assam, India and was the capital of the Ahom kingdom for many years. It was built by the Ahom king Suklenmung in 1540. It is said that the capital was built at the suggestion of MongKwang princess Nang Sao Seng from present-day Myanmar who was married to Suklenmung."}
          </FacilitiesSpanWrapper>
          <FacilitiesButton>
            <PrimaryLargeButton name="Book now" onClick={onOpenModal} />
          </FacilitiesButton>
        </FacilitiesTextWrapper>
      </FacilitiesContainer>
      <BookAppointmentModal
        open={openModal}
        onCloseModal={onCloseModal}
        title="Book an Appointment"
      />
    </FacilitiesHeaderCardContainer>
  );
}

export default FacilitiesHeader;
