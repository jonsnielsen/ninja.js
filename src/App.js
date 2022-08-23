import React from 'react';

import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserTableContainer } from './containers/UserTableContainer/UserTableContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-3">
        <UserTableContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
