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


// get club name from search bar and display (TODO: pull into its own function)
let userQuery = document.querySelector("#userQuery");

userQuery.addEventListener("submit", createClubDash);

function createClubDash(evt){
    let clubName = userQuery.children[1].value;
    evt.preventDefault();
    console.log(clubName);
    return clubName;
};

// TODO: display club name in the page
// if the club name exists in the API, insert it into the page for the dashboard to be loaded
// else, say "Club not found"