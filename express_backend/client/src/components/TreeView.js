import React, { Component } from 'react';

export default class TreeView extends Component {
  // map items to jsx
  getItems() {
    return this.props.tree.map((item, index) => (
      <li key={`tree-${index}`}>{item[0]} follows {item[1]}</li>
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
