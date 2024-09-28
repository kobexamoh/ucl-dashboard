// hide API key via Vite
const userAPIKey = import.meta.env.VITE_API_KEY;

// test if API key is exporting correctly
console.log(userAPIKey);
console.log("working!");
console.log(userAPIKey);

// TODO: move application files into src folder