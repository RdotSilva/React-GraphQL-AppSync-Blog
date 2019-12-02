import React, { Component } from "react";
import { Auth } from "aws-amplify";

class EditPost extends Component {
  state = {
    show: false,
    id: "",
    postOwnerId: "",
    postOwnerUsername: "",
    powerTitle: "",
    postBody: "",
    postData: {
      postTitle: this.props.postTitle,
      postBody: this.props.postBody
    }
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
    return (
      <>
        {this.state.show && (
          <div className="modal">
            <button className="close" onClick={this.handleModal}>
              X
            </button>
          </div>
        )}
        <button onClick={this.handleModal}>Edit</button>;
      </>
    );
  }
}

export default EditPost;
