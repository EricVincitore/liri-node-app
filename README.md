# liri-node-app

 Allows the user to generate information they need over a song, movie or upcoming concert.

## Overview

Liri-Node-App is a language interpretation and recognition interface. Using simple commands it can retrieve information from the Spotify, OMDB, and Bands in Town APIs. These commands are made through the users terminal/console. Since this app runs in the terminal it is faster and uses less bandwidth than a webpage while being accessible to more users. This app will let you retrieve the following information.

* Spotify - Artist, Song Name, Song, Preview, Album Title.
* OMDB - Title, Release Year, IMDB rating, Rotten Tomatoes rating, Filming Location, Language,  Plot, Actors.
* Bands in Town - Venue, City its located in, Date and Time of Show

## Instructions

### Setting up the app
1. Get sign up for a free api key from Spotify and OMDB. Bands in Town does not require one. Links to get these keys follow:
* Spotify: Create an account with spotify and at your dashboard you can start a new project and get your ID and Secret ID from them. 
*       https://developer.spotify.com/
* OMDB: Fill out the form form the site and they will email you your key.
*       http://www.omdbapi.com/apikey.aspx

2. After you have your keys clone the repository to have a copy of the functioning code.

3. Create a .env file in the folder you cloned from github. In that .env file add the following text with your api keys:
*       SPOTIFY_ID = {Insert your unique Spotify ID}
*       SPOTIFY_SECRET = {Insert your unique Spotify Secret}
*       OMDB_KEY = {Insert your unique OMDB api key}

4. Navigate to the folder of the application in your command line and type the following to install all required dependencies:
*        npm install

5. The app is now set up and you can follow any of the instructions below.

### Spotify
1. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the song name you are looking for.

        node liri.js spotify-this-song "Title of song"
    
3. The app should run as follows.

![Spotify Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/spotify1.PNG)

![Spotify Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/spotify2.PNG)

### OMDB
1. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the title of the movie you are looking for.

        node liri.js movie-this "Title of Movie"
    
3. The app should run as follows.

![OMDB Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/OMDB1.PNG)

![OMDB Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/OMDB2.PNG)

### Bands in Town
1. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the title of the artist you are looking for.

        node liri.js concert-this "Title of Artist"
    
3. The app should run as follows.

![Spotify Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/BIN1.PNG)

![Spotify Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/BIN2.PNG) 

### Use Text File
1. Open the random.txt file.

2. In the random.txt file type the command you would like to run (spotify-this-song, movie-this or concert-this) add a comma then what you are requesting (song title, movie title or artist title.)

2. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the song name you are looking for.

        node liri.js do-what-it-says
    
3. The app should run as follows.

![Spotify Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/do1.PNG)

![Spotify Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/do2.PNG)

![Spotify Command](https://raw.githubusercontent.com/EricVincitore/liri-node-app/master/Images/do3.PNG)

## Links

### Webpage

https://ericvincitore.github.io/liri-node-app/

### Git-hub Page

https://github.com/EricVincitore/liri-node-app

## Technologies Used

* Javascript
* Node.js
* Axios
* Dotenv
* Moment
* APIs

## Development Role

This app was developed by Eric Vincitore.