// app/PostList.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import PostCard from './PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.posts);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
