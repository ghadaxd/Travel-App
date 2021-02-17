# Travel Planner App

## Overview

An application where the user can enter any text or article, then it will be analyzed and sentiment analysis is going to be shown. It uses Natural Language Processing and Sentiment Analysis from MeaningCloud.

This project is part of the Frontend web developer nano degree program.

## Project stack

- Webserver - Node.
- Web application framework for routing - Express.
- Build tool - Webpack.
- External script - Service Worker for offline functionality.
- External API - MeaningCloud API.
- SASS for styling.
- Axios for calling API.
- Jest for unit testing.

## Getting started (Instructions)

This project has a local server, server side code, and client side code.

#### First, install dependencies

`npm i`

#### Second, add an `.env` file with `API_KEY` variable

#### Third, run the server (server uses port 8080)

`npm run start`

#### Forth, open the app on the browser

`http://localhost:8080/`

#### Finaly, to test the app, try any text or article you have ...

ex:
`In the country of Sokovia, the Avengers Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff, and Clint Barto raid a Hydra outpost led by Wolfgang von Strucker, who has been experimenting on humans using the scepter previously wielded by Loki. They encounter two of Strucker's experiments twins Pietro, who has superhuman speed, and Wanda Maximoff, who can manipulate minds and project energy and apprehend Strucker, while Stark retrieves Loki's scepter.`
