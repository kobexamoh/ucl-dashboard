// hide API key via Vite
const userAPIKey = import.meta.env.VITE_API_KEY;

// test if API key is exporting correctly
console.log(userAPIKey);


// make a test API call to serve Real Madrid UCL information
let myHeaders = new Headers();

myHeaders.append("x-rapidapi-key", userAPIKey);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))