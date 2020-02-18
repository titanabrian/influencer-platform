# Influencer Finder

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Features!

  - Google Authentication
  - Browse influencer by intereset

### Developments environments setup

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

- Install the dependencies and devDependencies.
- Create Mysql Database
- Configure .env file for each frontend and backend (you can make copy from .env-example) 
-- For backend its placed at "<YOUR_APPLICATION_DIRECTORY>"
-- For front end its placed at "<YOUR_APPLICATION_DIRECTORY>/frontend"

--Backend Setup
```
$ cd {YOUR_APLICATION_PATH}
$ npm install -d
$ node migration.js
$ npm start
```
--Frontend Setup
```
$ cd {YOUR_APLICATION_PATH/frontend}
$ npm install -d
$ npm run serve
```