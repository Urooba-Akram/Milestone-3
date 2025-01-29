'use client';
import React, { useEffect, useState } from 'react';
import CommentSection from '@/app/components/CommentSection';
import AuthorCard from '@/app/components/AuthorCard';

type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "HTML Block of Web Development",
    description: "Explore the world of HTML, the backbone of every web page. Learn its structure, elements, and how it plays an important role in creating websites. Understand the syntax and usage of tags like <div>, <section>, and more.",
    image: "../images/Slide1.jpg"
  },
  {
    id: "2",
    title: "CSS for Styling and Layout",
    description: "CSS (Cascading Style Sheets) is what makes web pages visually appealing. This blog covers how CSS helps style HTML elements, including text, colors, layouts, and more. Learn how to create flexible, responsive designs with CSS.",
    image: "../images/Slide2.jpg"
  },
  {
    id: "3",
    title: "JavaScript Fundamentals",
    description: "JavaScript is the scripting language that brings interactivity to web pages. From variables to functions, events to DOM manipulation, this blog dives deep into JavaScript's fundamental concepts and real-world applications.",
    image: "../images/Slide3.jpg"
  },
  // Rest of the posts
];

type PageProps = {
  params: {
    id: string;
  };
};

const Post = ({ params }: PageProps) => {
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchedPost = posts.find((p) => p.id === id);
    if (fetchedPost) {
      setPost(fetchedPost);
    }
  }, [id]);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
};

export default Post;