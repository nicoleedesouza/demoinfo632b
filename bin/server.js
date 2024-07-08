require("dotenv").config();
const app =require("../src/api");

let port = process.env.API_PORT || 5000;

app.listen(port);

console.log("Starting in port " + port);