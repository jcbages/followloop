import React, { Component } from 'react';
import './App.css';

import SearchView from './components/SearchView';
import FollowersView from './components/FollowersView';
import TreeView from './components/TreeView';

export default class App extends Component {
  constructor(props) {
    super(props);

    // define initial state
    this.state = {
      text: '',
      user: '',
      status: 'READY',
      followers: [],
      tree: []
    }

    // bind functions for jsx
    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickFollower = this.onClickFollower.bind(this);    
  }

  fetchFollowers(username) {
    // show loading view
    this.setState({status: 'LOADING'});

    // fetch followers list
    return fetch(`/followers/${username}`)
    .then(res => res.ok ? res.json() : null)
    .then(res => ({
      status: 'READY',
      user: username,
      followers: res ? res.data.map(user => user.login) : []
    }));
  }

  onTextChange(event) {
    // update typed text
    this.setState({text: event.target.value});
  }

  onSubmit() {
    // fetch the followers users list
    // update state & clean tree
    this.fetchFollowers(this.state.text)
    .then(state => this.setState(state))
    .then(() => this.setState({tree: []}));
  }

  onClickFollower(follower) {
    return () => {
      // fetch the followers user list
      // update state & update tree
      this.fetchFollowers(follower)
      .then(state => {
        let tree = this.state.tree;
        tree.push([this.state.user, follower]);
        this.setState({tree: tree});
        return state;
      })
      .then(state => this.setState(state));
    }
  }

  // render required as always
  render() {
    return (
      <div id="App">
        <SearchView
          onSubmit={this.onSubmit}
          textInput={this.state.textInput}
          onTextChange={this.onTextChange} />
        
        <TreeView tree={this.state.tree} />

        <FollowersView
          followers={this.state.followers}
          status={this.state.status}
          onClickFollower={this.onClickFollower} />
      </div>
    );
  }
}
