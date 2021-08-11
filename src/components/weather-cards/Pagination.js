import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(0);
  
  const maxPage = data.length;

  function currentData() {
    const begin = currentPage;
    const end = begin + itemsPerPage;
    const newData = data.slice(begin, end)
    return newData;
  }

  function next() {
    if(currentPage !== maxPage-1)
    setCurrentPage(currentPage =>currentPage + 1);
  }

  function prev() {
    if(currentPage !== 0) 
    setCurrentPage(currentPage => currentPage-1);
  }

  return { next, prev, currentData, currentPage, maxPage };
}

export default usePagination;
