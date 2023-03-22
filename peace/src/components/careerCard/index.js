import React from "react";
import { Link } from "gatsby";

import {
  CareerCardWrapper,
  CareerCardHeader,
  CareerCardRole,
  CareerCardAddress,
} from "./careerCardStyle";
import ConsultImage from "../../images/homePage/consult.png";

export default function index({ CardTotalData, apiPath }) {
  return (
    <CareerCardWrapper>
      <Link to={`/${apiPath}/${CardTotalData.attributes.Slug}`}>
        <img alt={CardTotalData.attributes.title} src={ConsultImage} />
        <CareerCardHeader>{CardTotalData.attributes.title}</CareerCardHeader>
        <CareerCardRole>
          {CardTotalData.attributes.job_role_type.data.attributes.title}
        </CareerCardRole>
        <CareerCardHeader>
          {CardTotalData.attributes.job_department.data.attributes.title}
        </CareerCardHeader>
        <CareerCardAddress>
          <h4>{CardTotalData.attributes.job_location.data.attributes.title}</h4>
          <p>
            {CardTotalData.attributes.job_location.data.attributes.address},
            &nbsp;
            {CardTotalData.attributes.job_location.data.attributes.state}
          </p>
        </CareerCardAddress>
      </Link>
    </CareerCardWrapper>
  );
}
