import React, { Component } from 'react';

export default class SearchView extends Component {
  // render requires as always
  render() {
    return (
      <div id="search">
        <form>
          <label>
            Username:
            <input
              type="text"
              value={this.props.textInput}
              onChange={this.props.onTextChange} />
          </label>
          <button onClick={this.props.onSubmit}>Search</button>
        </form>
      </div>
    );
  }
}
