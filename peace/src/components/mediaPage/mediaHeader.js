import React from "react";
import {
  Tab,
  TabsWrapper,
  MediaHeaderWrapper,
  MediaPageHeader,
} from "./mediaPageStyle";

const tabs = [
  {
    name: "Media",
    id: "media",
  },
  {
    name: "News Letter",
    id: "newsLetter",
  },
];

export default function MediaHeader(props) {
  const { selectedTab, setSelectedTab } = props;

  const handletabChange = (selected) => {
    setSelectedTab(selected);
  };
  return (
    <MediaHeaderWrapper>
      <TabsWrapper>
        {tabs.map((tab) => (
          <Tab
            active={tab.id === selectedTab}
            key={tab.id}
            onClick={() => handletabChange(tab.id)}
          >
            {tab.name}
          </Tab>
        ))}
      </TabsWrapper>
      <MediaPageHeader>
        {selectedTab === "media" ? "Media" : "Newsletter"} <br />
        <span>
          {selectedTab === "media"
            ? "Our Recent Announcements"
            : "Read Our Recent Newsletters"}
        </span>
      </MediaPageHeader>
    </MediaHeaderWrapper>
  );
}
