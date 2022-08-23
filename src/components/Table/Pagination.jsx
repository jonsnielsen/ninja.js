import React from 'react';

function Pagination({ currentPageNumber, totalNumberOfPages, onChange }) {
  if (!totalNumberOfPages) return null;

  const pages = [...Array(totalNumberOfPages)].map((_, pageNumber) => {
    const isActivePage = currentPageNumber === pageNumber;

    return (
      <li key={pageNumber} className="page-item mr-1">
        <button
          className={`page-link  ${isActivePage ? 'button-outline' : ''}`}
          onClick={() => onChange(pageNumber)}
        >
          {pageNumber}
        </button>
      </li>
    );
  });

  return <ul className="pagination">{pages}</ul>;
}

export default Pagination;
