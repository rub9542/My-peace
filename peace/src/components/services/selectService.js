import React, { useState } from "react";
import {
  ServiceDropListItem,
  ServiceDropList,
  ServiceDropListPointer,
  ServiceContainer,
  ServiceDropSection,
  ServiceDropListTitle,
  ServiceDropPoint,
  ServiceDropContent,
} from "./serviceStyle";

export default function SelectService(props) {
  const {onSelect, serviceList,serviceTitle} = props
  const [isList, showList] = useState(false);
  const onClickHandler = (id) => {
    showList(!isList);
    onSelect(id);
  };
  return (
    <ServiceContainer>
      <ServiceDropPoint onClick={() => showList(!isList)}>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12C0.716667 12 0.479333 11.904 0.288 11.712C0.0960001 11.5207 0 11.2833 0 11C0 10.7167 0.0960001 10.4793 0.288 10.288C0.479333 10.096 0.716667 10 1 10H17C17.2833 10 17.5207 10.096 17.712 10.288C17.904 10.4793 18 10.7167 18 11C18 11.2833 17.904 11.5207 17.712 11.712C17.5207 11.904 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479333 6.904 0.288 6.712C0.0960001 6.52067 0 6.28333 0 6C0 5.71667 0.0960001 5.479 0.288 5.287C0.479333 5.09567 0.716667 5 1 5H17C17.2833 5 17.5207 5.09567 17.712 5.287C17.904 5.479 18 5.71667 18 6C18 6.28333 17.904 6.52067 17.712 6.712C17.5207 6.904 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479333 1.90433 0.288 1.713C0.0960001 1.521 0 1.28333 0 1C0 0.716667 0.0960001 0.479 0.288 0.287C0.479333 0.0956668 0.716667 0 1 0H17C17.2833 0 17.5207 0.0956668 17.712 0.287C17.904 0.479 18 0.716667 18 1C18 1.28333 17.904 1.521 17.712 1.713C17.5207 1.90433 17.2833 2 17 2H1Z"
            fill="black"
          />
        </svg>
      </ServiceDropPoint>
      {isList && (
        <ServiceDropSection>
          <ServiceDropListPointer />
          <ServiceDropContent>
            <ServiceDropListTitle>{serviceTitle}</ServiceDropListTitle>
            <ServiceDropList>
              {serviceList.map((item) => {
                return (
                  <ServiceDropListItem
                    key={item.title}
                    onClick={() => onClickHandler(item)}
                  >
                    {item.title}
                  </ServiceDropListItem>
                );
              })}
            </ServiceDropList>
          </ServiceDropContent>
        </ServiceDropSection>
      )}
    </ServiceContainer>
  );
}
