import React, { useState, useEffect } from "react";

import {
  PaginationListWrapper,
  PaginationSection,
  PaginationList,
} from "./paginationStyle";

const veryFirstSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z"
      fill="#333333"
    />
    <path
      d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z"
      fill="#333333"
    />
  </svg>
);

const veryLastSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z"
      fill="black"
    />
    <path
      d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z"
      fill="black"
    />
  </svg>
);

const nextSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
      fill="black"
    />
  </svg>
);

const prevSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
      fill="black"
    />
  </svg>
);


export default function Pagination({
  currentPage,
  totalPages,
  handleBtns,
}) {
  const [pageList, setPageLIst] = useState([]);

  const handlePageCounts = () => {
    let tempArr = [];
    for (let i = 1; i <= totalPages; i++) {
      tempArr.push(i);
    }
    setPageLIst(tempArr);
  };

  useEffect(() => {
    handlePageCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  return (
    <PaginationSection>
      <PaginationListWrapper>
        <PaginationList
          onClick={() => handleBtns("prevLong", pageList.length, currentPage)}
        >
          {veryFirstSvg}
        </PaginationList>
        <PaginationList
          onClick={() => handleBtns("prev", pageList.length, currentPage)}
        >
          {prevSvg}
        </PaginationList>
        {pageList.map((pageNum) => (
          <PaginationList
            active={currentPage === pageNum}
            key={pageNum}
            onClick={(e) => handleBtns("number", e.target.value, pageNum)}
          >
            {pageNum}
          </PaginationList>
        ))}
        {/* {spaceDots} */}
        <PaginationList
          onClick={() => handleBtns("next", pageList.length, currentPage)}
        >
          {nextSvg}
        </PaginationList>
        <PaginationList
          onClick={() => handleBtns("nextLong", pageList.length, currentPage)}
        >
          {veryLastSvg}
        </PaginationList>
      </PaginationListWrapper>
    </PaginationSection>
  );
}
