// System modules
const path = require("path");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));

module.exports = new Command("ping")
    .setDescription("Classic ping command")
    .setExecute(executable => {
        executable.channel.sendMessage("Pong");
    });