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
    return (
      <div>
        <form>
          <textarea
            type="text"
            name="content"
            rows="3"
            cols="40"
            placeholder="Add Your Comment..."
            value={this.state.content}
            onChange={this.handleChangeContent}
          />
          <input
            className="btn"
            style={{ fontSize: "19px" }}
            value="Add Comment"
          />
        </form>
      </div>
    );
  }
}

export default CreateCommentPost;
