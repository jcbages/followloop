import React, { Component } from 'react';

export default class FollowersView extends Component {
  // map items to jsx
  getItems() {
    return this.props.followers.map((follower, index) => (
      <li key={`follower-${index}`} onClick={this.props.onClickFollower(follower)}>
        {follower}
      </li>
    ));
  }

  // render required as always
  render() {
    if (this.props.status === 'READY') {
      return (
        <div id="followers">
          <ul>{this.getItems()}</ul>
        </div>
      );
    } else {
      return (
        <div id="followers">
          <p>Loading...</p>
        </div>
      );
    }
  }
}
