import React, { Component } from 'react';

export default class TreeView extends Component {
  // map items to jsx
  getItems() {
    return this.props.tree.map((user1, user2, index) => (
      <li>{user1.id} follows {user2.id}</li>
    ));
  }

  // render required as always
  render() {
    return (
      <div id="tree">
        <ul>{this.getItems()}</ul>
      </div>
    );
  }
}
