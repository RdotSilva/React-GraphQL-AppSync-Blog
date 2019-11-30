import React, { Component } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createPost } from "./../graphql/mutations";

class CreatePost extends Component {
  state = {
    postOwnerId: "",
    postOwner: "",
    postTitle: "",
    postBody: ""
  };

  componentDidMount = async () => {
    await Auth.currentUserInfo().then(user => {
      this.setState({
        postOwnerId: user.attributes.sub,
        postOwner: user.username
      });
    });
  };

  handleChangePost = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddPost = async e => {
    e.preventDefault();

    const input = {
      postOwnerId: "ryaA829", // Temp hard coded value
      postOwnerUsername: "Ryan", // Temp hard coded value
      postTitle: this.state.postTitle,
      postBody: this.state.postBody,
      createdAt: new Date().toISOString()
    };

    await API.graphql(graphqlOperation(createPost, { input }));

    this.setState({ postTitle: "", postBody: "" });
  };

  render() {
    return (
      <form className="add-post" onSubmit={this.handleAddPost}>
        <input
          style={{ fontSize: "19px" }}
          type="text"
          placeholder="Title"
          name="postTitle"
          required
          value={this.state.postTitle}
          onChange={this.handleChangePost}
        />

        <textarea
          type="text"
          name="postBody"
          rows="3"
          columns="40"
          required
          placeholder="New Blog Post"
          value={this.state.postBody}
          onChange={this.handleChangePost}
        ></textarea>

        <input className="btn" style={{ fontSize: "19px" }} type="submit" />
      </form>
    );
  }
}

export default CreatePost;
