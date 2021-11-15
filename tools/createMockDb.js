const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { users, cities } = mockData;
const data = JSON.stringify({ users, cities });
const filePath = path.join(__dirname, "db.json");

fs.writeFile(filePath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created successfully!");
});
