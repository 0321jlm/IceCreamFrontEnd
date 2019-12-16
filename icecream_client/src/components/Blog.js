import React from "react";
import Form from "./Form.js";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ formVisible: !this.state.formVisible });
  }

  render() {
    const { blog, handleDelete, handleUpdate } = this.props;
    return (
      <>
        {this.state.formVisible ? (
          <Form
            blog={blog}
            handleSubmit={handleUpdate}
            toggleForm={this.toggleForm}
          ></Form>
        ) : (
          <div className="notice">
            <h3>{blog.category}</h3>
            <p>{blog.blogEntry}</p>
            <small>{blog.author} </small>
            <button onClick={() => handleDelete(blog)} type="button">
              Delete
            </button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
          </div>
        )}
      </>
    );
  }
}

export default Blog;
