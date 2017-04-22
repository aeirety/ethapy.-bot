// System modules
const path = require("path");

// Community modules
const dj = require("dankjson");
const chalk = require("chalk");

console.log(chalk.yellow("Loading config"));

// Load config
dj.load([path.join(__dirname, "../config/config.json")]).then(config => {

    //console.log(config);
    console.log(chalk.yellow("Config loaded"));

    // Initiate bot
    console.log(chalk.yellow("Initializing bot"));

    require(path.join(__dirname, "bot.js"));

    console.log(chalk.yellow("Bot initialized"));

    // Load
    require(path.join(__dirname, "utils/loader.js"))().then(() => {
        // Start bot
        console.log(chalk.yellow("Starting bot"));

        require(path.join(__dirname, "bot.js")).start().then(() => {
            console.log(chalk.yellow("Bot started"));

            console.log("     _   _                    _       _   ");
            console.log(" ___| |_| |_ ___ ___ _ _     | |_ ___| |_ ");
            console.log("| -_|  _|   | .'| . | | |_   | . | . |  _|");
            console.log("|___|_| |_|_|__,|  _|_  |_|  |___|___|_|  ");
            console.log("                |_| |___|                 ");
        }).catch(error => {
            console.log(chalk.red("Error"));
            console.log(error);
        });
    }).catch(error => {
        console.log(chalk.red("Error"));
        console.log(error);
    });
});