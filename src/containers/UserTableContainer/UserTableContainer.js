import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/userService';
import Table from '../../components/Table';

export function UserTableContainer() {
  const { isLoading, error, data } = useQuery(['TableData'], getUsers);

  const [rowsFound, setRowsFound] = useState(data);

  // Fancy loading spinner
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  function search(event) {
    const text = event.target.value;

    const rowsFound = text
      ? data.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
            (row.email &&
              row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      })
      : data;

    setRowsFound(rowsFound);
  }

  return (
    <Table
      rows={rowsFound || data}
      locale="da"
      rowsPerPage={5}
      search={search}
    />
  );
}
