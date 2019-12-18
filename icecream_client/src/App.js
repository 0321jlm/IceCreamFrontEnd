import React from "react";
import Aside from "./components/Aside.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      formInputs: {
        category: "",
        blogEntry: "",
        author: ""
      }
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post("https://icecreamblog.herokuapp.com/blogs", formInputs);
    this.getBlogs();
  }

  async handleDelete(deletedBlog) {
    await axios.delete(
      `https://icecreamblog.herokuapp.com/blogs/${deletedBlog.id}`
    );
    this.getBlogs();
  }

  componentDidMount() {
    this.getBlogs();
  }

  async getBlogs() {
    const response = await axios("https://icecreamblog.herokuapp.com/blogs");
    console.log(response);
    const data = response.data;
    this.setState({
      blogs: data
    });
  }

  async handleUpdate(event, formInputs) {
    event.preventDefault();
    console.log("updating");
    await axios.put(
      `https://icecreamblog.herokuapp.com/blogs/${formInputs.id}`,
      formInputs
    );
    this.getBlogs();
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            blogs={this.state.blogs}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
