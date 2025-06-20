import { useState } from "react";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1, totalPages - 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1, 0);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return { currentData, currentPage, totalPages, nextPage, prevPage, goToPage };
};

export default usePagination;
