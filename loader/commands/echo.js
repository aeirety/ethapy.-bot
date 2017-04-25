// System modules
const path = require("path");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));
const Argument = require(path.join(__dirname, "../../src/classes/Argument.js"));

module.exports = new Command("echo")
    .setDescription("Make the bot repeat what you say")
    .setArguments([
        new Argument("message")
            .setType("string")
            .setOptional(false)
            .setInfinite(true)
    ])
    .setExecute((executable) => {
        executable.channel.sendMessage(executable.args[0]);
    });