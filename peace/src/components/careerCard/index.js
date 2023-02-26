import React from "react";

import {
  CareerCardWrapper,
  CareerCardHeader,
  CareerCardRole,
  CareerCardAddress,
} from "./careerCardStyle";

export default function index({ CardTotalData }) {
  return (
    <CareerCardWrapper>
      <img alt={CardTotalData.title} src={CardTotalData.path} />
      <CareerCardHeader>{CardTotalData.title}</CareerCardHeader>
      <CareerCardRole>{CardTotalData.role}</CareerCardRole>
      <CareerCardHeader>{CardTotalData.department}</CareerCardHeader>
      <CareerCardAddress>
        <h4>{CardTotalData.location}</h4>
        <p>{CardTotalData.address}</p>
      </CareerCardAddress>
    </CareerCardWrapper>
  );
}
