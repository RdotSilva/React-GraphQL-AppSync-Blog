import React, { Component } from "react";

class CreatePost extends Component {
  state = {
    postOwnerId: "",
    postOwner: "",
    postTitle: "",
    postBody: ""
  };

  componentDidMount = async () => {
    // TODO
  };

  handleAddPost = async e => {
    e.preventDefault();

    const input = {
      postOwnerId: this.state.postOwnerId,
      postOwnerUsername: this.state.postOwnerUsername,
      postTitle: this.state.postTitle,
      postBody: this.state.postBody,
      createAt: new Date().toISOString()
    };
  };

  render() {
    return (
      <form className="add-post" onSubmit={this.handleAddPost}>
        <input
          style={{ font: "19px" }}
          type="text"
          placeholder="Title"
          required
        />
        <textarea
          type="text"
          name="postBody"
          rows="3"
          columns="40"
          required
          placeholder="New Blog Post"
        ></textarea>

        <input className="btn" style={{ fontSize: "19px" }} type="submit" />
      </form>
    );
  }
}

export default CreatePost;
