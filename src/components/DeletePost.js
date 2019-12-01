import React, { Component } from "react";
import { graphqlOperation } from "aws-amplify";
import { deletePost } from "./../graphql/mutations";

class DeletePost extends Component {
  render() {
    const post = this.props.data;

    return (
      <button onClick={() => this.handleDeletePost(post.id)}>Delete</button>
    );
  }
}

export default DeletePost;
