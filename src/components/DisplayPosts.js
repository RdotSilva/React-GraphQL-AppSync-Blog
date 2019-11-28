import React, { Component } from "react";
import { listPosts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export default class DisplayPosts extends Component {
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
    return <div>Display Posts</div>;
  }
}
