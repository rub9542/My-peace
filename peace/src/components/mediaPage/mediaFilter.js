import React, { useEffect, useState } from "react";

import {
  ArticleGridSection,
  FilterLabel,
  FilterSection,
  MediaPageSection,

  MediaMainWrapper,
} from "./mediaPageStyle";
import { FormInput } from "../form/formStyle";
import Dropdown from "../dropdown";
import ArticleCard from "../articleCard";
import Pagination from "../pagination";
import { getMediaDatas } from "../../api";
import { monthList } from "./arrayDatas";
import Loader from "../loader";


export default function MediaFilter(props) {
  const { selectedTab, setSelectedTab } = props;

  const [filter, setFilter] = useState({
    month: "",
    category: "",
    search: "",
  });
  const [pagination, setpagination] = useState({
    page: 1,
    pageCount: 1,
    pageSize: 0,
    total: 0,
  });
  const [categoryList, setCategoryList] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // handleCategorydata();
    handleGetData();
  }, [filter]);

  const handleCategorydata = async () => {
    let url = `${
      selectedTab === "media" ? "media-categories" : "news-letter-categories"
    }`;
    setLoading(true);
    const newdata = await getMediaDatas(url);
    const { body, status } = newdata;
    if (status === 200) {
      const { data } = body;
      let obj;
      let tempArr = [];
      data.length > 0 &&
        data.map((item) => {
          obj = {
            label: item.attributes.name,
            value: `${item?.id}`,
          };
          tempArr.push(obj);
        });
      setLoading(false);
      setCategoryList(tempArr);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCategorydata();
    handleGetData();
  }, [selectedTab]);

  const handleGetData = async () => {
    let url = `${
      selectedTab === "media" ? `posts?populate=*` : `news-letters?populate=*`
    }&pagination[page]=${pagination.page}`;
    // &pagination[pageSize]=${pagination.pageCount}`;
    if (filter.search) {
      url += `&filters[title][$containsi]=${filter.search}`;
    }
    if (filter.category) {
      url += `&filters[media_category][id][$eq]=${filter.category}`;
    }
    setLoading(true);
    const newdata = await getMediaDatas(url);
    const { body, status } = newdata;
    if (status === 200) {
      const { data, meta } = body;
      setLoading(false);
      setArticleData(data);
      setpagination({ ...pagination, ...meta.pagination });
    } else {
      setLoading(false);
    }
  };

  const handleData = (e, name) => {
    setFilter({ ...filter, [name]: e });
  };

  const handleArrowBtn = (type, listLen, currentPage) => {
    setpagination({
      ...pagination,
      page:
        type === "prevLong"
          ? 1
          : type === "prev"
          ? pagination.page !== 1
            ? pagination.page - 1
            : pagination.page
          : type === "next"
          ? pagination.page !== listLen
            ? pagination.page + 1
            : pagination.page
          : type === "nextLong"
          ? listLen
          : type === "number"
          ? currentPage
          : listLen,
    });
    handleGetData();
  };
  const handletabChange = (selected) => {
    setSelectedTab(selected);
  };
  return (
    <MediaMainWrapper>
      <MediaPageSection>
        <FilterSection>
          <div>
            <FilterLabel>Filter by category</FilterLabel>
            <Dropdown
              options={categoryList}
              placeholder="Choose category"
              onChange={(e) => handleData(e.value, "category")}
              value={filter.category}
            />
          </div>
          <div>
            <FilterLabel>Filter by Month</FilterLabel>
            <Dropdown
              options={monthList}
              placeholder="Select month"
              onChange={(e) => handleData(e.value, "month")}
              value={filter.month}
            />
          </div>
          <div>
            <FilterLabel>Search</FilterLabel>
            <FormInput
              placeholder="Search blogs"
              onChange={(e) => handleData(e.target.value, "search")}
            />
          </div>
        </FilterSection>
        {!loading && articleData.length > 0 ? (
          <>
            <ArticleGridSection>
              {articleData.length > 0 &&
                articleData.map((item, index) => (
                  <ArticleCard
                    dataObj={item}
                    key={index}
                    mediaContent={selectedTab === "media" ? true : false}
                    apiPath={selectedTab === "media" ? "media" : "newsLetter"}
                  />
                ))}
            </ArticleGridSection>

            <Pagination
              currentPage={pagination?.page}
              totalPages={pagination?.pageCount}
              handleBtns={handleArrowBtn}
            />
          </>
        ) : (
          <Loader />
        )}
      </MediaPageSection>

 
    </MediaMainWrapper>
  );
}
