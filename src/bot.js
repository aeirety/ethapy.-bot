// Community modules
const Discord = require("discord.js");
const dj = require("dankjson");
const Promise = require("promise");
const chalk = require("chalk");

let bot = new Discord.Client();

bot.on("ready", () => {
    console.log(chalk.yellow("Bot ready"));
});

module.exports.start = () => {
    return new Promise((resolve, reject) => {
        console.log(chalk.yellow("Logging in bot"));

        bot.login(dj.config.config.token).then(() => {
            console.log(chalk.yellow("Bot logged in"));

            resolve();
        }).catch(error => {
            reject(error);
        });
    });
}

module.exports.bot = bot;