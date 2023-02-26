import React from "react";

import Tabs from "../tabs";
import { FollowTitle, FollowContainer } from "./followUsStyle";
import FollowUsCard from './followUscard'
function FollowUs() {
  const tabsArray = [
    {
      name: "Instagram",
      id: "Instagram",
    },
    {
      name: "Facebook",
      id: "Facebook",
    },
    {
      name: "Twitter",
      id: "Twitter",
    },
    {
      name: "LinkedIn",
      id: "LinkedIn",
    },
  ];
  return (
    <FollowContainer>
      <FollowTitle>Follow us on </FollowTitle>
      <Tabs
        tabsArray={tabsArray}
        showButton={false}
        initialActivetab="Instagram"
      />
      <FollowUsCard />
    </FollowContainer>
  );
}

export default FollowUs;
