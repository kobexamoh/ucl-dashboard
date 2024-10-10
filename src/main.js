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
const allTeams = "teams?league=2&season=2024"

// on page load, create an empty object
let clubNameIDs = {};

// get the teams and their IDs from the API
let massArray = [];

function getTeamsandIDs() { // effectively, the function is a Promise
    return fetch(baseURL + allTeams, requestOptions) // make fetch request (need to return fetch response so it can be used later)
    .then((response) => response.json()) // parse as JSON
    .then((data) => {
        massArray = data.response; // extract data from API and store in array
        globalThis.massArray = massArray; // make available as global var for testing in console
        return massArray;
    })
    .catch((error) => { // error handling
        console.log("error", error)
    });
}

// call the function
getTeamsandIDs().then((massArray) => {
    // place the teams and IDs into the newly created object as key value pairs
    massArray.forEach(element => Object.defineProperty(clubNameIDs, element.team.name, {
        value: element.team.id
    }));
});

// START OF TODO: display club name in the page
// normalize the search query and compare it against the keys in the object

// if they are not found, render the "sorry, team not in this year's competition" item

// otherwise, begin to render the dashboard
// place event listener on the search area
let userQuery = document.querySelector("#userQuery");
userQuery.addEventListener("submit", createClubDash);

// select for the "no clubs" or "clubs found" div
let resultsDash = document.querySelector("#results");
let noResults = document.querySelector("#no-results");

// check if the query is found in the list of clubs this season
function createClubDash(evt) {
    let clubName = userQuery.children[1].value;
    evt.preventDefault();
    if (clubNameIDs.hasOwnProperty(clubName)) {
        // load the results via a second API call
        buildClubDash(clubName, resultsDash);
      } else {
        // console.log("Club not in list!")
        noResults.classList.remove("hidden");
      }
    //return clubName;
};
// END OF TODO

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

function buildClubDash(clubName, resultsDash) {
    resultsDash.classList.remove('hidden');
    let renderedClubHeading = document.createElement("h2");
    let renderedClubName = document.createTextNode(clubName);

    renderedClubHeading.appendChild(renderedClubName);

    resultsDash.appendChild(renderedClubHeading);
}

