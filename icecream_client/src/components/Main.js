import React from "react";
import Blogs from "./Blogs.js";

function Main(props) {
  const { blogs, handleDelete, handleUpdate } = props;
  return (
    <main>
      <Blogs
        blogs={blogs}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default Main;
