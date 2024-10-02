// hide API key via Vite
const userAPIKey = import.meta.env.VITE_API_KEY;

// make a test API call to search Champions League 2024 endpoint for Real Madrid (club id 541)
let myHeaders = new Headers();

myHeaders.append("x-rapidapi-key", userAPIKey);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

const baseURL = "https://v3.football.api-sports.io/";
const params = "teams?league=2&season=2024&id=541";
const allTeams = "teams?league=2&season=2024"

// fetch ALL teams from the 2024 season (team name and ID)
fetch(baseURL + allTeams, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data.response))
    .catch(error => console.log("error", error));

// fetch general Real Madrid team information
// fetch(baseURL + params, requestOptions)
//     .then(response => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.response[0])
//         console.log(data.response[0].team)
//     })
//     .catch(error => console.log("error", error));


// get club name from search bar and display (TODO: pull into its own function)
let userQuery = document.querySelector("#userQuery");

userQuery.addEventListener("submit", createClubDash);

function createClubDash(evt) {
    let clubName = userQuery.children[1].value;
    evt.preventDefault();
    console.log(clubName);
    return clubName;
};

// TODO: display club name in the page
// if the club name exists in the API, insert it into the page for the dashboard to be loaded
// else, say "Club not found"

// TODO: on program load, send request to API for all teams in 2024 UCL and their IDs; store that to check against for the team that the user enters

// sample data based on response object
let bigArray = [
     {
        team:{
            code: "LIV",
            country: "England",
            founded: 1892,
            id: 40,
            logo: "https://media.api-sports.io/football/teams/40.png",
            name: "Liverpool",
            national: false
        },
        venue: {
            address: "Anfield Road",
            capacity: 55212,
            city: "Liverpool",
            id: 550,
            image: "https://media.api-sports.io/football/venues/550.png",
            name: "Anfield",
            surface: "grass"
        }
     },
     {
        team:{
            code: "ARS",
            country: "England",
            founded: 1886,
            id: 42,
            logo: "https://media.api-sports.io/football/teams/42.png",
            name: "Arsenal",
            national: false
        },
        venue: {
            address: "Queensland Road",
            capacity: 60383,
            city: "London",
            id: 494,
            image: "https://media.api-sports.io/football/venues/494.png",
            name: "Emirates Stadium",
            surface: "grass"
        }
     },
     {
        team:{
            code: "MAC",
            country: "England",
            founded: 1880,
            id: 50,
            logo: "https://media.api-sports.io/football/teams/50.png",
            name: "Manchester City",
            national: false
        },
        venue: {
            address: "Rowsley Street",
            capacity: 55097,
            city: "Manchester",
            id: 555,
            image: "https://media.api-sports.io/football/venues/555.png",
            name: "Etihad Stadium",
            surface: "grass"
        }
     },
     {
        team:{
            code: "PAR",
            country: "France",
            founded: 1970,
            id: 85,
            logo: "https://media.api-sports.io/football/teams/85.png",
            name: "Paris Saint Germain",
            national: false
        },
        venue: {
            address: "24, rue du Commandant Guilbaud",
            capacity: 47929,
            city: "Paris",
            id: 671,
            image: "https://media.api-sports.io/football/venues/671.png",
            name: "Parc des Princes",
            surface: "grass"
        }
     }
]

// possible format of data i want to work with
let stadiumNameID = [
    {
        "Liverpool": 40,
        "Arsenal": 42,
        "Manchester City": 50,
        "Paris Saint Germain": 85
    }
]