import React, { Component } from "react";

class EditPost extends Component {
  state = {
    show: false,
    id: "",
    postOwnerId: "",
    postOwnerUsername: "",
    powerTitle: "",
    postBody: ""
  };

  componentDidMount = async () => {
    await Auth.currentUserInfo().then(user => {
      this.setState({
        postOwnerId: user.attributes.sub,
        postOwnerUsername: user.username
      });
    });
  };

  render() {
    return <button>Edit</button>;
  }
}

export default EditPost;
