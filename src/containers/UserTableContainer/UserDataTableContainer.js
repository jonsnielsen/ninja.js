import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/userService';
import DataTable from '../../components/Table';

export function UserDataTableContainer() {
  const {
    isLoading,
    error,
    data: userRows,
  } = useQuery(['dataTableData'], getUsers);

  // Fancy loading spinner
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return <DataTable rows={userRows} locale="da" rowsPerPage={5} />;
}
