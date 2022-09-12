

# Indie Hub

## OVERVIEW

Indie Hub allows users to explore A24’s film catalog, showing detailed information and a trailer for every movie.  

The app is currently deployed here: https://indie-hub.herokuapp.com/

You can also find a demo here: https://www.linkedin.com/feed/update/urn:li:activity:6953765082694615041/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6953765082694615041%29

## Features

User are be able to:

- Browse A24's film catalog

- Access production information for every film, as well as Rotten Tomatoes score

- Watch trailers

- Register for an account

- Read and post reviews for every film

## Setup

To setup the app, first fork and cd into the directory, then run:

```
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- ```rails s```: run the backend on http://localhost:3000
- ```npm start``` --prefix client: run the frontend on http://localhost:4000




