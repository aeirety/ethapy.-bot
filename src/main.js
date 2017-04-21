// System modules
const path = require("path");

// Community modules
const dj = require("dankjson");

console.log("     _   _                    _       _   ");
console.log(" ___| |_| |_ ___ ___ _ _     | |_ ___| |_ ");
console.log("| -_|  _|   | .'| . | | |_   | . | . |  _|");
console.log("|___|_| |_|_|__,|  _|_  |_|  |___|___|_|  ");
console.log("                |_| |___|                 ");

console.log("Loading config");

// Load config
dj.load([path.join(__dirname, "../config/config.json")]).then(config => {

    console.log("Config loaded");
    console.log(config);

    // Load
    require(path.join(__dirname, "utils/loader.js"))().then(() => {

        // Initiate bot
        require(path.join(__dirname, "bot.js"));
    });
});