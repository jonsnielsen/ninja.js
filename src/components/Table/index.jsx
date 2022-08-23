import React, { useState } from 'react';
import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

function Table({ rows, rowsPerPage }) {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [displayedRows, setDisplayedRows] = useState(rows);
  const totalNumberOfPages = calculateTotalNumberOfPages(
    displayedRows,
    rowsPerPage,
  );

  function search(event) {
    const text = event.target.value;

    const rowsFound = text
      ? rows.filter((row) => {
          return (
            row.name1.toLowerCase().includes(text.toLowerCase()) ||
            row.email?.toLowerCase().includes(text.toLowerCase())
          );
        })
      : rows;

    setDisplayedRows(rowsFound);
    setCurrentPageNumber(0);
  }

  function changeToPageNumber(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  function rowsInPageNumber(pageNumber) {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  const rowsToRender = displayedRows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber}
      />
    </div>
  );
}

function calculateTotalNumberOfPages(rows, rowsPerPage) {
  if (rowsPerPage == 0) return 0;
  return Math.ceil(rows.length / rowsPerPage);
}

export default Table;
