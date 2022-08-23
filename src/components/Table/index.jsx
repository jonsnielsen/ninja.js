import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

export function Table({ rows, rowsPerPage, search }) {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const totalNumberOfPages = calculateTotalNumberOfPages(rows, rowsPerPage);

  useEffect(() => {
    // When the data changes, set page number to 0
    setCurrentPageNumber(0);
  }, [rows]);

  function changeToPageNumber(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  function rowsInPageNumber(pageNumber) {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  const rowsToRender = rows
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
