

# Indie Hub

## OVERVIEW

Indie Hub allows users to explore A24’s impressive film catalog, showing detailed information and a trailer for every movie.  

The app is currently deployed here: https://indie-hub.herokuapp.com/

You can also find a demo here: https://www.linkedin.com/feed/update/urn:li:activity:6953765082694615041/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6953765082694615041%29

![IndieHub  HomePage](https://user-images.githubusercontent.com/79528112/189699763-3669a7bf-b538-46bf-831c-cc041a4142f8.JPG)

## Features

User are be able to:

- Browse A24's film catalog

- Access production information for every film, as well as Rotten Tomatoes score

- Watch trailers

- Register for an account

- Read and post reviews for every film

![IndieHub  MovieDetails](https://user-images.githubusercontent.com/79528112/189699796-09ecdd93-cb13-451d-8e8e-aba98eaee187.JPG)

![IndieHub  Trailer](https://user-images.githubusercontent.com/79528112/189699831-8c3e9fd6-5612-400c-a606-70ee10916f5f.JPG)

![IndieHub  Reviews](https://user-images.githubusercontent.com/79528112/189699866-35e10f4d-ac08-4053-ae90-160f500db808.JPG)

![IndieHub  Register](https://user-images.githubusercontent.com/79528112/189699900-1acab655-339f-4138-894e-72516e987863.JPG)


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




