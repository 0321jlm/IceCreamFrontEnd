import React from "react";
import Input from "./Input.js";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      blogEntry: "",
      author: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.blog) {
      this.props.handleSubmit(event, {
        category: this.state.category,
        blogEntry: this.state.blogEntry,
        author: this.state.author,
        id: this.props.blog.id
      });
      this.props.toggleForm();
    } else {
      this.props.handleSubmit(event, {
        category: this.state.category,
        blogEntry: this.state.blogEntry,
        author: this.state.author
      });
    }

    this.setState({
      category: "",
      blogEntry: "",
      author: ""
    });
  }

  componentDidMount() {
    if (this.props.blog) {
      this.setState({
        category: this.props.blog.category || "",
        blogEntry: this.props.blog.blogEntry || "",
        author: this.props.blog.author || "",
        id: this.props.blog.id || ""
      });
    }
  }

  async handleUpdate(event, formInputs) {
    event.preventDefault();
    console.log("updating");
    await axios.put(`/blogs/${formInputs.id}`, formInputs);
    this.getBlogs();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"category"}
          placeholder={"Title"}
          type={"text"}
          value={this.state.category}
          id={"category"}
        />
        <Input
          handleChange={this.handleChange}
          name={"blogEntry"}
          placeholder={"Entry"}
          type={"text"}
          value={this.state.blogEntry}
          id={"blogEntry"}
        />
        <Input
          handleChange={this.handleChange}
          name={"author"}
          placeholder={"Author"}
          type={"text"}
          value={this.state.author}
          id={"author"}
        />
        <input
          type="submit"
          value={this.props.blog ? "update this entry" : "add an entry"}
        />
      </form>
    );
  }
}

export default Form;
