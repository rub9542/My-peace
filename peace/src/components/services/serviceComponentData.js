import React, { useState, useEffect } from "react";
import FacilityGurgaon from "../../images/facilities/facilities-Gurgaon.png";
import FacilitiesDot from "../../images/facilities/facilities-list-dot.png";

import FacilitiesStyle from "../facilities/facilitiesStyle";
import {
  ServiceFacilitiesContainer,
  ServiceListContainer,
  ServiceImage,
  ServiceContainer,
  ServiceListDot,
  ServiceListContainerItem,
  ServiceContainerDescription,
  ServiceWrapper,
  ServiceTextWrapper,
  ServiceIconContainer,
  ServiceSpanContent,
  ServiceListItemsWrapper,
  ServiceItemDot,
  ServiceItem,
  ServiceSpanTitle,
  CarouselContainer,
  ButtonContainer,
  ArrowWrapper,
  InsideWrapper,
  ServiceDescription,
  ServiceMainText,
  ServiceMainTextWrapper,
} from "./serviceStyle";
import SelectService from "./selectService";

const listArray = [
  {
    description: "24*7 access to resident doctors",
  },
  { description: "Cannabis (Marijuana) dependence" },
  {
    description: "Inhalant dependence (glue sniffing, petrol, paint solvents)",
  },
  { description: "Drug dependence (cocaine, heroin, MDMA)" },
  { description: "Dependence on stimulants like amphetamine, caffeine etc." },
];

function ServiceComponentData(props) {
  const { serviceInfo } = props;
  const [selectedItem, setItem] = useState(0);

  useEffect(() => {
    for (let i = 0; i < serviceInfo.services.length; i++) {
      if (serviceInfo.services[i].name === props.activeService) {
        setItem(i);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeService]);

  const onSelectItem = (data) => {
    setItem(serviceInfo.services.indexOf(data));
  };

  const getIndex = (data) => {
    let finalData = serviceInfo.services[selectedItem];
    return finalData[data];
  };

  const styleName =
    selectedItem === 0
      ? "flex-end"
      : selectedItem === serviceInfo.services.length - 1
      ? "flex-start"
      : "";

  return (
    <ServiceContainer>
      <ServiceFacilitiesContainer>
        <ServiceImage src={FacilityGurgaon} />
        <SelectService
          onSelect={onSelectItem}
          serviceList={serviceInfo.services}
          serviceTitle={serviceInfo.name}
        />
        <ServiceWrapper isEven={false}>
          <FacilitiesStyle.FacilitiesTextWrapper>
            <FacilitiesStyle.FacilitiesTitle>
              {getIndex("title")}
            </FacilitiesStyle.FacilitiesTitle>{" "}
            <br />
            <ServiceDescription>{getIndex("description")}</ServiceDescription>
            <ServiceListContainer>
              {getIndex("descriptionList").map((item, index) => (
                <ServiceListContainerItem key={index}>
                  <ServiceListDot />
                  <ServiceContainerDescription>
                    {item}
                  </ServiceContainerDescription>
                </ServiceListContainerItem>
              ))}
            </ServiceListContainer>
          </FacilitiesStyle.FacilitiesTextWrapper>
        </ServiceWrapper>
      </ServiceFacilitiesContainer>
      <ServiceMainText>
        <p>
          We are able to provide unmatched care, and world class acute
          psychiatric services both for hospitalization, and emergency because
          at Sukoon you will have:
        </p>
        {listArray.map((item, index) => (
          <ServiceListItemsWrapper key={index}>
            <ServiceItemDot src={FacilitiesDot} />
            <ServiceMainTextWrapper>{item.description}</ServiceMainTextWrapper>
          </ServiceListItemsWrapper>
        ))}
      </ServiceMainText>
      <ServiceTextWrapper>
        <ServiceIconContainer>
          <svg
            width="25"
            height="28"
            viewBox="0 0 25 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3048 14C16.1385 14 19.2456 10.8664 19.2456 7C19.2456 3.13359 16.1385 0 12.3048 0C8.4711 0 5.36402 3.13359 5.36402 7C5.36402 10.8664 8.4711 14 12.3048 14ZM7.09921 17.0188C3.08658 18.2055 0.158447 21.9461 0.158447 26.3758C0.158447 27.2727 0.879636 28 1.76892 28H22.8407C23.7299 28 24.4511 27.2727 24.4511 26.3758C24.4511 21.9461 21.523 18.2055 17.5104 17.0188V19.7969C19.007 20.1852 20.1131 21.5578 20.1131 23.1875V25.375C20.1131 25.8563 19.7227 26.25 19.2456 26.25H18.378C17.9008 26.25 17.5104 25.8563 17.5104 25.375C17.5104 24.8937 17.9008 24.5 18.378 24.5V23.1875C18.378 22.2195 17.6025 21.4375 16.6428 21.4375C15.683 21.4375 14.9076 22.2195 14.9076 23.1875V24.5C15.3848 24.5 15.7752 24.8937 15.7752 25.375C15.7752 25.8563 15.3848 26.25 14.9076 26.25H14.04C13.5628 26.25 13.1724 25.8563 13.1724 25.375V23.1875C13.1724 21.5578 14.2786 20.1852 15.7752 19.7969V16.6742C15.4498 16.6414 15.1191 16.625 14.7829 16.625H9.82672C9.49052 16.625 9.15975 16.6414 8.8344 16.6742V20.2508C10.087 20.6281 11.0034 21.7984 11.0034 23.1875C11.0034 24.8773 9.64235 26.25 7.96681 26.25C6.29127 26.25 4.93022 24.8773 4.93022 23.1875C4.93022 21.7984 5.84662 20.6281 7.09921 20.2508V17.0188ZM7.96681 24.5C8.688 24.5 9.2682 23.9148 9.2682 23.1875C9.2682 22.4602 8.688 21.875 7.96681 21.875C7.24562 21.875 6.66542 22.4602 6.66542 23.1875C6.66542 23.9148 7.24562 24.5 7.96681 24.5Z"
              fill="#164B2A"
            />
          </svg>
        </ServiceIconContainer>
        <ServiceSpanTitle>Our Approach</ServiceSpanTitle>
        <ServiceSpanContent>
          {getIndex("approachDescription")}
        </ServiceSpanContent>
        {getIndex("descriptionList").map((item, index) => (
          <ServiceListItemsWrapper key={index}>
            <ServiceItemDot src={FacilitiesDot} />
            <ServiceItem>{item}</ServiceItem>
          </ServiceListItemsWrapper>
        ))}
      </ServiceTextWrapper>
      <CarouselContainer>
        <ButtonContainer justify={styleName}>
          {selectedItem ? (
            <InsideWrapper
              onClick={() =>
                onSelectItem(serviceInfo.services[selectedItem - 1])
              }
            >
              <ArrowWrapper>
                <svg
                  width="30"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1L2 8.34426L10 15"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </ArrowWrapper>
              <p>
                {serviceInfo && serviceInfo.services[selectedItem - 1].title}
              </p>
            </InsideWrapper>
          ) : (
            ""
          )}
          {selectedItem !== serviceInfo.services.length - 1 ? (
            <InsideWrapper
              onClick={() =>
                onSelectItem(serviceInfo.services[selectedItem + 1])
              }
            >
              <p>
                {serviceInfo && serviceInfo.services[selectedItem + 1].title}
              </p>
              <ArrowWrapper>
                <svg
                  width="30"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9 8.34426L1 15"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </ArrowWrapper>
            </InsideWrapper>
          ) : (
            ""
          )}
        </ButtonContainer>
      </CarouselContainer>
    </ServiceContainer>
  );
}

export default ServiceComponentData;
