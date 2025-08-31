// src/pages/PostDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

const PostDetail = ()=>{
const {id} = useParams()
const {data: post, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;