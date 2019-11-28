import React, { Component } from "react";
import { listPosts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import DeletePost from "./DeletePost";

class DisplayPosts extends Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
    this.getPosts();
  };

  getPosts = async () => {
    const result = await API.graphql(graphqlOperation(listPosts));
    this.setState({ posts: result.data.listPosts.items });
  };

  render() {
    const { posts } = this.state;
    return posts.map(post => {
      return (
        <div className="posts" style={rowStyle} key={post.id}>
          <h1>{post.postTitle}</h1>
          <span style={{ fontStyle: "italic", color: "#0ca5e297" }}>
            {"Wrote by: "} {post.postOwnerUsername}
            {" on"}
            <time style={{ fontStyle: "italic" }}>
              {" "}
              {new Date(post.createdAt).toDateString()}
            </time>
          </span>
          <p>{post.postBody}</p>
          <br />
          <span>
            <DeletePost />
          </span>
        </div>
      );
    });
  }
}

const rowStyle = {
  background: "#f4f4f4",
  padding: "10px",
  border: "1px #ccc dotted",
  margin: "14px"
};

export default DisplayPosts;
