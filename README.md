# Truckpad - API Aplication

Truckpad App is a aplication developed for a selective process. This repository keeps the REST API aplication, which is resposible for the back-end (data persistence).
Each successful request will generate a response with a JSON all information requested, so it can be used in the front-end.

## API carachteristics

- Stack used: Node, Express, Mongoose, Cors
- Requests inplemented: GET, POST, PUT & DELETE
- Deployed at: Heroku

- Link to API: [https://truckpad-api.herokuapp.com/]
- Endpoint: "/truckers"

- Link to Front-End aplication: [https://truckpad-app.herokuapp.com/]
- Link to Front-End repository: [https://github.com/dest4rk/truckpad-react]

## Contributing

Please feel free to fork/clone this repo to look deeper into the logics of this API and contribute with some of the above improvements if you like :-)
By forking this repo, use '\$ yarn' in your terminal to add all dependencies needed. You will also need to create a ".env" file in your root folder and add some keys:

- APP_URL=YOUR_LOCALHOST_ACCESS_PORT
- MONGO_URL=mongodb://localhost/YOUR_COLLECTION_NAME_IN_MONGODB

You will also need to set up CORS middleware to ensure that the requests sent from the front-end will be accepted. Just go to "App.ts" file and set up the origin link at line #28 (example below).

_app.use(cors({_
**origin: ['http://localhost:8080']**
_}));_

## Author & Version Control

API developed by **Alan Nascimento - https://github.com/dest4rk** - _Truckpad API App Version 0.1_ - **Published in July-22th of 2019**
