import React from "react";
import Blog from "./Blog.js";

function Blogs(props) {
  const { blogs, handleDelete, handleUpdate } = props;
  return (
    <div>
      {blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Blogs;
