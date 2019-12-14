//require("dotenv").config();
//var keys = require("./keys.js")
//var spotify = new Spotify(keys.spotify)

//var axios = require("axios");

var input = process.argv;
var info = input[2];
var request = input.slice(3, info.length)
var userRequest = request.toString()
var finishedRequest = userRequest.replace(/,/g, ' ')
console.log(info)
console.log(request)
console.log(userRequest)
console.log(finishedRequest)
