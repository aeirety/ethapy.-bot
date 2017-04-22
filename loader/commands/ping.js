// System modules
const path = require("path");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));

module.exports = new Command()
    .description("Classing ping command")
    .execute((executable) => {
        executable.channel.sendMessage("Pong");
    });