require("dotenv").config()
var keys = require("./keys.js")
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify)
//var omdb = new omdb (keys.omdb)
var moment = require("moment")
var axios = require("axios")
var fs = require("fs")

var input = process.argv
var info = input[2]
var request = input.slice(3).join(" ")

function findSpotify() {
    spotify.search({ type: 'track', query: request }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err)
        }

        for (let i = 0; i < data.tracks.items.length; i++) {

            console.log("Artist: " + data.tracks.items[i].artists[0].name)
            console.log("Song Name: " + data.tracks.items[i].name)
            console.log("Song Preview: " + data.tracks.items[i].preview_url)
            console.log("Album Title: " + data.tracks.items[i].album.name)
            console.log("----------------------")
        }
    });
}

function concertThis() {
    axios.get("https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                console.log("Venue: " + response.data[i].venue.name)
                console.log("Location: " + response.data[i].venue.city, response.data[0].venue.region)
                console.log("Date: " + moment(response.data[i].datetime, "YYYY-MM-DD HH:mm").format("MM/DD/YYYY hh:mm a"))
                console.log("----------------------")
            }
        })
}

function movieThis() {
    //axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=" + omdb)
    axios.get("http://www.omdbapi.com/?t=" + request + "&i=tt3896198&apikey=761dff93")
        .then(function (response) {

            console.log("Movie Title: " + response.data.Title)
            console.log("Release Year: " + response.data.Year)
            console.log("IMDB Rating: " + response.data.imdbRating)
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].value)
            console.log("Production Location: " + response.data.Country)
            console.log("Language: " + response.data.Language)
            console.log("Plot: " + response.data.Plot)
            console.log("Actor: " + response.data.Actors)
            console.log("----------------------")

        })
}

function doWhatItSays() {

}

switch (info) {
    case "spotify-this-song":
        findSpotify()
        break
    case "concert-this":
        concertThis()
        break
    case "movie-this":
        movieThis()
        break
    case "do-what-it-says":
        doWhatItSays()
        break
}