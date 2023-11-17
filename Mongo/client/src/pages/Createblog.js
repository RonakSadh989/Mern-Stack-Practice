// CreateBlogPage.js

import React, { useState } from "react";

import "../css/CreateBlog.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to create a new blog post
    try {
      const response = await fetch(
        "http://localhost:8080/api/blog/65393ee6016dcd2aa47feb77",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Handle success (optional)
      console.log("Blog post created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="create-blog-page">
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
