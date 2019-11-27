import React, { Component } from "react";
import { listPosts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export default class DisplayPosts extends Component {
  render() {
    return <div>Display Posts</div>;
  }
}
