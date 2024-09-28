// hide API key via Vite
const userAPIKey = import.meta.env.VITE_API_KEY;

// test if API key is exporting correctly
console.log(userAPIKey);
console.log("working!");
console.log(userAPIKey);

// TODO: Check if package.json needs to be added to git structure (as it's getting quite huge)
// TODO: move application files into src folder
// TODO: probably delete public folder