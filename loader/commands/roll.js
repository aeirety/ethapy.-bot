// System modules
const path = require("path");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));
const Argument = require(path.join(__dirname, "../../src/classes/Argument.js"));

function rand(min, max) {
    return Math.floor(Math.random() * max) + 1;
}

module.exports = new Command("roll")
    .setDescription("Roll some dice")
    .setArguments([
        new Argument("sides")
            .setType("integer")
            .setOptional(false),
        new Argument("count")
            .setType("integer")
            .setOptional(true)
    ])
    .setExecute((executable) => {
        let count = 1;
        let value = "";
        if (executable.args[1]) count = executable.args[1] > 10 ? 10 : executable.args[1];
        for (let i = 0; i < count; i++) value += value.length ? "\n🎲 " + rand(1, executable.args[0]) : "🎲 " + rand(1, executable.args[0]);
        executable.channel.sendMessage("🎲 **Good luck!** Rolling...").then(message => {
            setTimeout(() => {
                message.edit(value);
            }, 1000);
        });
    });