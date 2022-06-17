# Wijmo Weavy Hackathon 2022

GrapeCity's Wijmo and Weavy are partnering up for a Hackathon! Focusing on real world issues across a variety of topics and using systems thinking to create innovative solutions. With Wijmo's UI component library and Weavy's API, we challenge developers to find ways to solve current issues, using real data.

Signups are now open! Sign up at https://weavy.com/hackathonwijmo and get access to your own Weavy sandbox.

For more information on the hackathon, check out our [Learn More](https://www.weavy.com/hackathonwijmo#learn-more) page.

## Documentation, Demos, and API
Wijmo and Weavy offer extensive documentation, demos, and API to help you get started building your application.

- [Weavy Documentation](https://www.weavy.com/docs)
- [Weavy Knowledgebase](https://www.weavy.com/kb)
- [Wijmo Documentation](https://www.grapecity.com/wijmo/docs/GettingStarted/Introduction)
- [Wijmo Demos](https://www.grapecity.com/wijmo/demos/)
- [Wijmo API](https://www.grapecity.com/wijmo/api/)

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
