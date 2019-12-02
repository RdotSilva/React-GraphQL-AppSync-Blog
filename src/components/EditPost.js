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

  handleModal = () => {
    this.setState({ show: !this.state.show });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
    return <button onClick={this.handleModal}>Edit</button>;
  }
}

export default EditPost;
