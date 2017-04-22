// System modules
const path = require("path");

// Imports
const command = require(path.join(__dirname, "../../src/command/command.js"));
const commandParser = require(path.join(__dirname, "../../src/command/commandParser.js"));
const bot = require(path.join(__dirname, "../../src/bot.js"));

let prefix = "!";

module.exports = (bot) => {
    bot.on("message", message => {
        if (message.author.equals(bot.bot.user)) return;

        console.log(message.channel.name + "@" + message.author.username + ": " + message.content);

        if (!message.content.toUpperCase().startsWith(prefix.toUpperCase)) return;

        let args = message.content.substring(prefix.length).split(" ");

        commandParser.parse(args, command.commands).then(object => {
            console.log(object);
        }).catch(object => {
            console.log(object);
        });
    });
};