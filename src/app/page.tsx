'use client';
import React from 'react';
import { TodoApp } from '@components/Suspense/TodoApp';
import { QueryClient, QueryClientProvider } from 'react-query';

const Home: React.FC = () => {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  );
};

export default Home;
