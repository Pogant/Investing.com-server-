var db = require("../jsonfile.json");
//just loading data from the file
//All data is saved in memory.
//In real app data will be saved in the database instead of just pushing to the instrumentList variable;
exports.db = db;