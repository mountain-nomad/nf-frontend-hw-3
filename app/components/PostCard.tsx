// app/PostCard.tsx
import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/post/${id}`}>
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h2>
          <p className="lead">{body}</p>
      </Link>
    </div>
  );
};

export default PostCard;
