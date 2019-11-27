import React, { Component } from "react";
import { listPosts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export default class DisplayPosts extends Component {

  componentDidMount = aynsc () => {
    this.getPosts();
  }
  
  render() {
    return <div>Display Posts</div>;
  }
}
