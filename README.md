# liri-node-app

 Allows the user to generate information they need over a song, movie or upcoming concert.

## Overview

Liri-Node-App is a language interpretation and recognition interface. Using simple commands it can retrieve information from the Spotify, OMDB, and Bands in Town APIs. These commands are made through the users terminal/console. Since this app runs in the terminal it is faster and uses less bandwidth than a webpage while being accessible to more users. This app will let you retrieve the following information.

* Spotify - Artist, Song Name, Song, Preview, Album Title.
* OMDB - Title, Release Year, IMDB rating, Rotten Tomatoes rating, Filming Location, Language,  Plot, Actors.
* Bands in Town - Venue, City its located in, Date and Time of Show

## Instructions

### Spotify
1. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the song name you are looking for.

        node liri.js spotify-this-song "Title of song"
    
3. The app should run as follows.

![Spotify Command](images/spotify1.PNG)

![Spotify Command](images/spotify2.PNG)

### OMDB
1. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the title of the movie you are looking for.

        node liri.js movie-this "Title of Movie"
    
3. The app should run as follows.

![OMDB Command](images/OMDB1.PNG)

![OMDB Command](images/OMDB2.PNG)

### Bands in Town
1. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the title of the artist you are looking for.

        node liri.js concert-this "Title of Artist"
    
3. The app should run as follows.

![Spotify Command](images/BIN1.PNG)

![Spotify Command](images/BIN2.PNG) 

### Use Text File
1. Open the random.txt file.

2. In the random.txt file type the command you would like to run (spotify-this-song, movie-this or concert-this) add a comma then what you are requesting (song title, movie title or artist title.)

2. Navigate to the liri.js file in your terminal

2. In the terminal type the following command with the song name you are looking for.

        node liri.js do-what-it-says
    
3. The app should run as follows.

![Spotify Command](images/do1.PNG)

![Spotify Command](images/do2.PNG)

![Spotify Command](images/do3.PNG)

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