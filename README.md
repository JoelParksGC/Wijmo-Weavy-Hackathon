# Wijmo-Weavy-Hackathon

Sample application for Wijmo and Weavy Hackathon.

Sign up for the hackathon at https://weavy.com/hackathonwijmo to get a Weavy sandbox to play with.

## Getting started

This repo consists of a backend build pipeline and a frontend pipeline tied together using npm. 
It is pre configured for Wijmo components and Weavy apps.
Clone this repo, make sure you have [Node and NPM](https://nodejs.org/) installed.
Then just install the dependencies and fire up the built-in webserver to get started. 

```
npm install
npm run start
```

You can then install any additional frameworks or libs using npm.

If you have properly signed up for the hackathon, you may connect to your own Weavy sandbox 
by specifying the url in [messenger.js](./frontend/messenger.js).

### Backend

The backend is built on [Node.js](https://nodejs.org/) using [Express](https://expressjs.com/) framework. 
It's a basic setup with two routes and a user system that can provide authentication. 

### Frontend

The frontend is a simple native javascript setup with ES2021 transpiling and module support using [webpack](https://webpack.js.org/).

### Static

The static section is where you can put assets that will be served from express but not as part of the build pipeline.
