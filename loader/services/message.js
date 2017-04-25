// System modules
const path = require("path");

// Imports
const command = require(path.join(__dirname, "../../src/command/command.js"));
const commandParser = require(path.join(__dirname, "../../src/command/commandParser.js"));

let prefix = "!";

function executable(message, args) {
    return {
        message: message,
        channel: message.channel,
        guild: message.guild,
        args: args
    }
}

module.exports = (bot) => {
    bot.on("message", message => {
        if (message.author.equals(bot.user)) return;

        console.log(message.channel.name + "@" + message.author.username + ": " + message.content);

        // If the message starts with prefix case insensitive
        if (!message.content.toUpperCase().startsWith(prefix.toUpperCase())) return;

        let args = message.content.substring(prefix.length).split(" ");

        // Parse command and then execute it or send error message
        commandParser.parse(args, command.commands).then(object => {
            object.command.execute(executable(message, object.args));
        }).catch(object => {
            message.channel.sendMessage(object.error);
        });
    });
};