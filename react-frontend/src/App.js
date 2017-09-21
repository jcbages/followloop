import React, { Component } from 'react';
import './App.css';

import SearchView from './components/SearchView';
import FollowersView from './components/FollowersView';
import TreeView from './components/TreeView';

class App extends Component {
  constructor(props) {
    super(props);

    // define common status codes after fetch
    this.codes = {
      LOADING: 0,
      FAILED: 1,
      READY: 2
    };

    this.state = {
      textInput: '',
      currentUser: null,
      status: this.codes.LOADING,
      followers: [],
      tree: []
    }

    // bind functions for jsx
    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickFollower = this.onClickFollower.bind(this);    
  }

  fetchFollowers() {
    // show loading view
    this.setState({status: this.codes.LOADING});

    // fetch followers list
    return fetch('/followers')
    .then(res => (res.status === 200) ? res.json() : null)
    .then(res => {
      // failed fetch
      if (!res) {
        return {
          status: this.codes.FAILED,
          user: null,
          followers: [],
        };
      }

      // success fetch
      return {
        status: this.codes.READY,
        user: null, //TODO
        followers: [] // TODO
      };
    });
  }

  onTextChange(event) {
    this.setState({textInput: event.target.value});
  }

  onSubmit() {
    // fetch the followers users list
    this.fetchFollowers()
    .then(res => {
      // set new state, update followers, and reset tree
      this.setState({
        status: res.status,
        currentUser: res.user,
        followers: res.followers,
        tree: []
      });
    })
  }

  // TODO CHECK THIS
  onClickFollower(follower) {
    // fetch the followers user list
    this.fetchFollowers()
    .then(res => {
      // update tree if status was cool (200)
      let tree = this.state.tree;
      if (res.status === this.codes.READY) {
        tree.push({
          user1: this.state.currentUser,
          user2: follower
        });
      }

      // set new state, update followers, update tree
      this.setState({
        status: res.status,
        currentUser: res.user,
        followers: res.followers,
        tree: tree
      });
    }) 
  }

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
          state={this.state.status}
          codes={this.codes} />
      </div>
    );
  }
}

export default App;
