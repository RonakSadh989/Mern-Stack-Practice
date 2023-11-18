import React, { useEffect, useState } from "react";
import "../css/BlogPage.css";
export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/blog");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p className="metadata">
            <span className="username">By {post.username}</span>
            <span className="date">
              on {post.date.slice(0, 10) + " " + post.date.slice(11, 16)}
            </span>
          </p>
          <p>{post.content}</p>
        </div>
      ))}
      <div className="back-to-home">
        <a href="/">Back to Home</a>
      </div>
    </div>
  );
}
