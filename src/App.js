import React from 'react';

import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserDataTableContainer } from './UserDataTableContainer/UserDataTableContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-3">
        <UserDataTableContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
