import React, { Component } from "react";
import { Auth } from "aws-amplify";

class CreateCommentPost extends Component {
  state = {
    commentOwnerId: "",
    commentOwnerUsername: "",
    content: ""
  };

  componentDidMount = async () => {
    await Auth.currentUserInfo().then(user => {
      this.setState({
        commentOwnerId: user.attributes.sub,
        commentOwnerUsername: user.username
      });
    });
  };

  render() {
    return <div></div>;
  }
}

export default CreateCommentPost;
