import React, { useState } from "react";

import {
  TabHighlight,
  TabInnerSection,
  TabList,
  TabMainWrapper,
} from "./tabsStyle";
import { DefaultButton } from "../button";
import BookAppointmentModal from "../bookAppointmentModal";
import { Link } from "gatsby";

export default function Tabs(props) {
  const { showButton, activeTab, tabsArray, isService, style, fullWidth } =
    props;
  const [selectedTab, setActiveTab] = useState(activeTab || 0);
  const isBrowser = typeof window !== "undefined";
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onChangeTab = (tab) => {
    setActiveTab(tabsArray.indexOf(tab));

    if (isBrowser) {
      let elem = document.getElementById(tab.id);
      if (elem !== null) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <TabMainWrapper
      isService={isService ? isService : false}
      fullwidth={fullWidth}
    >
      <TabInnerSection widthStyle={style}>
        {tabsArray.map((tab) => (
          <TabList
            isService={isService ? isService : false}
            active={tabsArray[selectedTab].id === tab.id}
            onClick={() => onChangeTab(tab)}
            key={tab.id}
          >
            {isService ? (
              <Link to={`/services/${tab.id}`}>{tab.name}</Link>
            ) : (
              tab.name
            )}
            {isService && tabsArray[activeTab].id === tab.id ? (
              <TabHighlight />
            ) : null}
          </TabList>
        ))}
      </TabInnerSection>
      {showButton && <DefaultButton onClick={onOpenModal} name="Book now" />}
      <BookAppointmentModal
        open={openModal}
        onCloseModal={onCloseModal}
        title="Book an Appointment"
      />
    </TabMainWrapper>
  );
}
