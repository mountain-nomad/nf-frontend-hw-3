// app/page.tsx
"use client";

import React from 'react';
import PostList from './components/PostList';

const HomePage: React.FC = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export default HomePage;
