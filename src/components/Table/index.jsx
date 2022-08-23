import React, { useState } from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

function calculateTotalNumberOfPages(rows, rowsPerPage) {
  if (rowsPerPage == 0) return 0;
  return Math.ceil(rows.length / rowsPerPage);
}

function Table({ rows, rowsPerPage }) {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [rowsFound, setRowsFound] = useState(rows);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(
    calculateTotalNumberOfPages(rowsFound, rowsPerPage),
  );

  function search(event) {
    const text = event.target.value;
    let rowsFound = rows;

    if (text) {
      rowsFound = rows.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }

    setRowsFound(rowsFound);
    setCurrentPageNumber(0);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound, rowsPerPage));
  }

  function changeToPageNumber(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  function rowsInPageNumber(pageNumber) {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  const rowsToRender = rowsFound
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

export default Table;
