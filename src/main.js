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
    .then((data) => console.log(data.response[0].team.name))
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