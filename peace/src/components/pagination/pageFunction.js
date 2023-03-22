export const handleArrowBtn = (
  type,
  listLen,
  currentPage,
  pagination,
  triggerSuccess,
  setpagination
) => {
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
  triggerSuccess();
};
