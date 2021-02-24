# Travel Planner App

## Overview

This is a travel app that obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

This project is part of the Frontend web developer nano degree program.

## Project stack

- Webserver - Node.
- Web application framework for routing - Express.
- Build tool - Webpack.
- External script - Service Worker for offline functionality.
- SASS for styling.
- Axios for calling External API.
- Jest for unit testing.

## Features

1. The user can view current weather forcast of their current location.
1. The user can add a trip by entering destination (text only allowed) and departure date (past dates are not allowed).
1. The user can view current weather forcate for their trips if it's within a week.
1. The user can view future weather forcate for their trips if it's in the future (16 days forcast).
1. The user can view an image for their destination.
1. The user can view how many days left for their trips.
1. The user can add more than a trip. `FROM Suggestions`
1. The user can view more than a trip.
1. Trips are ordered for the user based on the remaining days for each. (ascending). `FROM Suggestions`
1. The application is responsive.
1. The application incorporate icons into forcast. `FROM Suggestions`
1. Trips data is saved in a local storage.`FROM Suggestions`

## Getting started (Instructions)

This project has a local server, server side code, and client side code.

#### First, install dependencies

`npm i`

#### Second, add an `.env` file with the following `API_KEY` variables

`WEATHER_API_KEY`
`GEONAMES_USERNAME`
`PIXABAY_API_KEY`

#### Third, run the server (server uses port 8080)

`npm run start`

#### Forth, open the app on the browser

`http://localhost:9090/`

#### Finaly, to test the app, try to add a trip using the following data ...

destination: `London`
departure data: `Pick up any future date`

## Integrated APIs

The user APIs are:

1. To get current user location and Lat and Lon: `extreme-ip-lookup`
1. To get current and future weather forcast: `weatherbit.io`
1. To get a city Lat and Lon: `geonames.org`
1. To get a city image: `pixabay.com`

## Used resources

1. Google fonts.
1. For fav icon: `favicon.io`
1. For icons: `iconscout.com`
