// System modules
const path = require("path");

// Community modules
const dj = require("dankjson");
const chalk = require("chalk");

console.log(chalk.yellow("Loading config"));

// Load config
dj.load([path.join(__dirname, "../config/config.json")]).then(config => {

    console.log(config);
    console.log(chalk.yellow("Config loaded"));

    // Load
    require(path.join(__dirname, "utils/loader.js"))().then(() => {

        // Initiate bot
        require(path.join(__dirname, "bot.js"));

        console.log("     _   _                    _       _   ");
        console.log(" ___| |_| |_ ___ ___ _ _     | |_ ___| |_ ");
        console.log("| -_|  _|   | .'| . | | |_   | . | . |  _|");
        console.log("|___|_| |_|_|__,|  _|_  |_|  |___|___|_|  ");
        console.log("                |_| |___|                 ");
    });
});