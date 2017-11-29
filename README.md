<h1 align="center">
  <br>
  <a href="#"><img width="200" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" alt="Github followers"></a>
  <br>
  Followloop
  <br>
  <br>
</h1>

<h4 align="center">Find others, and other, and others, ... :grin:</h4>

<img src="https://raw.githubusercontent.com/jcbages/followloop/master/dumb.png" alt="Preview">

## About

Followloop is a project that allow yo to traverse the GitHub followers graph in an interactive way. Just type the username you want to start from, and navigate as you want by traversing its followers. This is a recursive process so once you click a follower, you can see its followers and so on...

#### Features

  - Search the following users of a given users
  - Recurse on this following users to get the following users of them
  - Continue like this until the universe ends :scream:

#### Secret sauce

  - Save and load your history session
  - Load other users sessions :speak_no_evil:
 
#### How to install it

In order to run this project locally, you must first clone the project to your machine

```sh
$ git clone https://github.com/jcbages/followloop
```

Then, you need to get inside the project's folder and install its dependencies using npm for both the client & the server

```sh
$ cd followloop
$ npm install
$ npm run heroku-postbuild
```

Before running, make sure you add your MongoDB URL and GitHub Credentials as environment variables

```sh
export MONGO_URI=<MongoDB URL>
export G_USR=<GitHub API User>
export G_PWD=<GitHub API Pwd>
```

Finally, start the server using npm and go to your browser with address *http://localhost:5000*

```sh
$ npm start
```

#### Author

This project was brought to you by @jcbages
