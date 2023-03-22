import React from "react";

import { Link } from "gatsby";
import {
  MainImageWrapper,
  MediaWrapper,
  BackWrapper,
} from "../mediaDetail/mediaDetailStyle";
import DetailHeader from "../../images/career/detailHeader.png";
import {
  JobsHeaderContainer,
  JobContentWrapper,
  CareerDetailWrapper,
} from "./jobsStyle";
import { PrimaryLargeButton } from "../button";
import { Markup } from "interweave";

function JobsHeader({ dataObj, toPath }) {
  return (
    <CareerDetailWrapper>
      <Link /*to={toPath}*/>
        <MediaWrapper onClick={() => window.history.go(-1)}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="36"
              height="36"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <BackWrapper>
            <p> Back</p>
          </BackWrapper>
        </MediaWrapper>
      </Link>
      <MainImageWrapper>
        <img
          alt="MediaImage"
          /*src={dataObj && dataObj?.image?.url}*/ src={DetailHeader}
        />
      </MainImageWrapper>
      <JobsHeaderContainer>
        <p>{dataObj.title}</p>
        <div>
          <PrimaryLargeButton name="Apply to the job" />
        </div>
      </JobsHeaderContainer>
      <JobContentWrapper>
        <span>
          <Markup content={dataObj.description.data.description} />
        </span>
      </JobContentWrapper>
      {/* <JobListWrapper>
        <p>Roles and responsibility</p>
        <ul>
          {listArrObj.map((x) => (
            <li>{x.points}</li>
          ))}
        </ul>
      </JobListWrapper> */}
    </CareerDetailWrapper>
  );
}

export default JobsHeader;
