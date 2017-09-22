import React, { Component } from 'react';

export default class SearchView extends Component {
  // render required as always
  render() {
    return (
      <div id="search">
        <form>
          <label>
            Username:
            <input
              type="text"
              value={this.props.text}
              onChange={this.props.onTextChange} />
          </label>
          <button type="button" onClick={this.props.onSubmit}>Search</button>
        </form>
      </div>
    );
  }
}
