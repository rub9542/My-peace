import React, { useState, useEffect } from "react";
import Dropdown from "../dropdown";
import CareerCard from "../careerCard";
import { getMediaDatas } from "../../api";
import {
  ContentSectionWrapper,
  CareerSectionTextWrapper,
  SecondaryTitleWrapper,
  FilterLabelWrapper,
  FilterSection,
  CareerCardSectionWrapper,
  CareerCardInnerWrapper,
  SearchBlogWrapper,
  ResponsiveWrapper,
  NotFound,
} from "./careerStyle";
import { StaticImage } from "gatsby-plugin-image";
import Pagination from "../pagination";
import { SingleSectionWrapper } from "../../styles/homePageStyle";
import Loader from "../loader";
import { handleArrowBtn } from "../pagination/pageFunction";

export default function CareerContent() {
  const [filterShow, setFilterShow] = useState(false);
  const [jobArray, setJobArray] = useState([]);
  const [roleType, setRoleType] = useState([]);
  const [department, setDepartment] = useState([]);
  const [filterObj, setFilterObj] = useState({
    job_role_type: "",
    job_location: "",
    job_department: "",
  });
  const [jobList, setJobList] = useState([]);
  const [filterKey, setFilterKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [pagination, setpagination] = useState({
    page: 1,
    pageCount: 1,
    pageSize: 0,
    total: 0,
  });

  useEffect(() => {
    jobLocation();
    departmentJobs();
    roleTypeJobs();
    jobListFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const jobLocation = async () => {
    let url = `job-locations?sort=rank:asc`;
    const newData = await getMediaDatas(url);
    const { status, body } = newData;
    if (status === 200) {
      let tempArr = [];
      body.data.map((x) => {
        let obj = {
          label: x.attributes.title,
          value: x.id,
        };
        tempArr.push(obj);
        return "";
      });
      setJobArray(tempArr);
    }
  };

  const roleTypeJobs = async () => {
    let url = `job-role-types?sort=rank:asc`;
    const newData = await getMediaDatas(url);
    const { status, body } = newData;
    if (status === 200) {
      let tempArr = [];
      body.data.map((x) => {
        let obj = {
          label: x.attributes.title,
          value: x.id,
        };
        tempArr.push(obj);
        return "";
      });
      setRoleType(tempArr);
    }
  };

  const departmentJobs = async () => {
    let url = `job-departments?sort=rank:asc`;
    const newData = await getMediaDatas(url);
    const { status, body } = newData;
    if (status === 200) {
      let tempArr = [];
      body.data.map((x) => {
        let obj = {
          label: x.attributes.title,
          value: x.id,
        };
        tempArr.push(obj);
        return "";
      });
      setDepartment(tempArr);
    }
  };

  const handleClick = () => {
    setFilterShow((show) => !show);
  };

  useEffect(() => {
    jobListFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterObj]);

  const jobListFun = async () => {
    let url = `jobs?populate=*&pagination[page]=${pagination.page}&sort=rank:asc
    ${
      filterObj.job_role_type.toString().length > 0
        ? `&filters[job_role_type][id][$containsi]=${filterObj.job_role_type}`
        : ``
    }
    ${
      filterObj.job_department.toString().length > 0
        ? `&filters[job_department][id][$containsi]=${filterObj.job_department}`
        : ``
    }
    ${
      filterObj.job_location.toString().length > 0
        ? `&filters[job_location][id][$containsi]=${filterObj.job_location}`
        : ``
    }

    `;
    // if (filterKey) {
    //   url += `&filters[${filterKey}][id][$containsi]=${filterObj[filterKey]}`;
    // }
    setLoading(true);
    const newData = await getMediaDatas(url);
    const { status, body } = newData;
    if (status === 200) {
      const { data, meta } = body;
      setJobList(data);
      setpagination({ ...pagination, ...meta.pagination });
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleFilterObj = (value, name) => {
    setFilterObj({ ...filterObj, [name]: value });
    setFilterKey(name);
  };

  return (
    <ContentSectionWrapper>
      <ResponsiveWrapper>
        <CareerSectionTextWrapper>
          <SecondaryTitleWrapper>
            Browse
            <br />
            <span>Open Positions</span>
          </SecondaryTitleWrapper>
        </CareerSectionTextWrapper>
        <SearchBlogWrapper onClick={handleClick}>
          <StaticImage alt="menu icon" src="../../images/career/menuIcon.png" />
        </SearchBlogWrapper>
      </ResponsiveWrapper>
      <FilterSection filterShow={filterShow}>
        <div>
          <FilterLabelWrapper>Filter by Location</FilterLabelWrapper>
          <Dropdown
            placeholder="Choose Location"
            options={jobArray}
            onChange={(e) => handleFilterObj(e.value, "job_location")}
            value={filterObj.job_location}
          />
        </div>
        <div>
          <FilterLabelWrapper>Filter by Department</FilterLabelWrapper>
          <Dropdown
            placeholder="Select Department"
            options={department}
            value={filterObj.job_department}
            onChange={(e) => handleFilterObj(e.value, "job_department")}
          />
        </div>
        <div>
          <FilterLabelWrapper>Filter by Roletype</FilterLabelWrapper>
          <Dropdown
            placeholder="Select Role"
            options={roleType}
            value={filterObj.job_role_type}
            onChange={(e) => handleFilterObj(e.value, "job_role_type")}
          />
        </div>
      </FilterSection>

      {!loading ? (
        jobList.length > 0 ? (
          <CareerCardSectionWrapper>
            <CareerCardInnerWrapper>
              {jobList.length > 0 &&
                jobList.map((careerData, index) => (
                  <CareerCard
                    key={careerData.attributes.Slug}
                    CardTotalData={careerData}
                    apiPath="career"
                  />
                ))}
            </CareerCardInnerWrapper>
          </CareerCardSectionWrapper>
        ) : (
          <NotFound>
            <b>No Results Found !</b>
          </NotFound>
        )
      ) : (
        <Loader />
      )}
      {jobList.length > 0 && (
        <SingleSectionWrapper>
          <Pagination
            pageData={pagination}
            currentPage={pagination?.page}
            totalPages={pagination?.pageCount}
            handleBtns={handleArrowBtn}
            stateUpdate={setpagination}
            triggerSuccess={jobListFun}
          />
        </SingleSectionWrapper>
      )}
    </ContentSectionWrapper>
  );
}
