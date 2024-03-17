'use client';
import React from 'react';
import { TodoApp } from '@components/Suspense/TodoApp';
import ReactQueryProvider from '../ReactQueryProvider';


const ReactQueryHome: React.FC = () => {

  return (
    <ReactQueryProvider>
      <TodoApp />
    </ReactQueryProvider>
  );
};

export default Home;
