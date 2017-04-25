// System modules
const path = require("path");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));
const Argument = require(path.join(__dirname, "../../src/classes/Argument.js"));

function mirror(message) {
    let value = "";
    for (var i = message.length - 1; i > -1; i--) value += message[i];
    return value;
}

module.exports = new Command("mirror")
    .setDescription("Magic mirror")
    .setArguments([
        new Argument("message")
            .setType("string")
            .setOptional(false)
            .setInfinite(true)
    ])
    .setExecute((executable) => {
        executable.channel.sendMessage(mirror(executable.args[0]));
    });