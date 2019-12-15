require("dotenv").config()
var keys = require("./keys.js")
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify)

var moment = require("moment")
var axios = require("axios")

var input = process.argv
var info = input[2]
var request = input.slice(3).join(" ")

function findSpotify() {
    spotify.search({ type: 'track', query: request }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err)
        }

        for (let i = 0; i < data.tracks.items.length; i++) {

            console.log("Artist: "+ data.tracks.items[i].artists[0].name)
            console.log("Song Name: " + data.tracks.items[i].name)
            console.log("Song Preview: " + data.tracks.items[i].preview_url)
            console.log("Album Title: " + data.tracks.items[i].album.name)
            console.log("----------------------")
        }
    });
}

function concertThis () {
    axios.get("https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp")
    .then(function(response){
        for (let i = 0; i < response.data.length; i++) {
            console.log("Venue: " + response.data[i].venue.name)
            console.log("Location: " + response.data[i].venue.city, response.data[0].venue.region)
            console.log("Date: " + moment(response.data[i].datetime, "YYYY-MM-DD HH:mm").format("MM/DD/YYYY hh:mm a"))
            console.log("----------------------")
        }
    })
}

switch (info) {
    case "spotify-this-song":
        findSpotify()
        break
    case "concert-this":
        concertThis()
        break
}