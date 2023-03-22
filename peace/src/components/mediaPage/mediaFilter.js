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
import { handleArrowBtn } from "../pagination/pageFunction";
import { NotFound } from "../career/careerStyle";
export default function MediaFilter(props) {
  const { selectedTab } = props;
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
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleCategorydata = async () => {
    let url = `${
      selectedTab === "media"
        ? "media-categories?sort=rank:asc"
        : selectedTab === "blog"
        ? "blog-categories?sort=rank:asc"
        : "news-letter-categories?sort=rank:asc"
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
            label: item.attributes.title
              ? item.attributes.title
              : item.attributes.Slug,
            value: `${item?.id}`,
          };
          tempArr.push(obj);
          return "";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  const handleGetData = async () => {
    let url = `${
      selectedTab === "media"
        ? `posts?populate=*&sort=rank:asc`
        : selectedTab === "blog"
        ? "blogs?populate=*&sort=rank:asc"
        : `news-letters?populate=*&sort=rank:asc`
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

  return (
    <MediaMainWrapper>
      <MediaPageSection>
        <FilterSection>
          <div>
            <FilterLabel>Filter by Category</FilterLabel>
            <Dropdown
              options={categoryList}
              placeholder="Choose Category"
              onChange={(e) => handleData(e.value, "category")}
              value={filter.category}
            />
          </div>
          <div>
            <FilterLabel>Filter by Month</FilterLabel>
            <Dropdown
              options={monthList}
              placeholder="Select Month"
              onChange={(e) => handleData(e.value, "month")}
              value={filter.month}
            />
          </div>
          <div>
            <FilterLabel>Search</FilterLabel>
            <FormInput
              placeholder="Search Blogs"
              onChange={(e) => handleData(e.target.value, "search")}
            />
          </div>
        </FilterSection>
        {!loading ? (
          <>
            {articleData.length > 0 ? (
              <>
                <ArticleGridSection>
                  {articleData.length > 0 &&
                    articleData.map((item, index) => (
                      <ArticleCard
                        dataObj={item}
                        key={item.attributes.title}
                        mediaContent={
                          selectedTab === "media" || selectedTab === "blog"
                            ? true
                            : false
                        }
                        apiPath={
                          selectedTab === "media"
                            ? "media"
                            : selectedTab === "blog"
                            ? "articles"
                            : "newsLetter"
                        }
                      />
                    ))}
                </ArticleGridSection>

                <Pagination
                  pageData={pagination}
                  currentPage={pagination?.page}
                  totalPages={pagination?.pageCount}
                  handleBtns={handleArrowBtn}
                  triggerSuccess={handleGetData}
                  stateUpdate={setpagination}
                />
              </>
            ) : (
              <NotFound>
                <b>No Results Found !</b>
              </NotFound>
            )}
          </>
        ) : (
          <Loader />
        )}
      </MediaPageSection>
    </MediaMainWrapper>
  );
}
