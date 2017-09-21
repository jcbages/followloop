import React, { Component } from 'react';

export default class FollowersView extends Component {
  // map items to jsx
  getItems() {
    return this.props.followers.map((follower, index) => (
      <li>{follower.id} -- {follower.name}</li>
    ));
  }

  // render required as always
  render() {
    if (this.props.status === this.props.codes.READY) {
      return (
        <div id="followers">
          <ul>{this.getItems()}</ul>
        </div>
      );
    } else if (this.props.status === this.props.codes.LOADING) {
      return (
        <div id="followers">
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div id="followers">
          <p>An error occured, try again later</p>
        </div>
      );
    }
  }
}
