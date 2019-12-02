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

  render() {
    return <button>Edit</button>;
  }
}

export default EditPost;
