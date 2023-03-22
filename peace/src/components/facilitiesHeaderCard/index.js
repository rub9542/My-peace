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
          <SecondaryHeaderTitle title={title} subTitle={subTitle} />
          <FacilitiesSpanWrapper>{description}</FacilitiesSpanWrapper>
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
