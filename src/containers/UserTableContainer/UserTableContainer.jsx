import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/userService';
import Table from '../../components/Table';

export function UserTableContainer() {
  const {
    isLoading,
    error,
    data: userRows,
  } = useQuery(['userTable'], getUsers);

  // Fancy loading spinner
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return <Table rows={userRows} locale="da" rowsPerPage={5} />;
}
