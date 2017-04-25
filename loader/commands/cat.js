// System modules
const path = require("path");

// Community modules
const request = require("request");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));

module.exports = new Command("cat")
    .setDescription("Cutest command ever")
    .setExecute(executable => {
        executable.channel.sendMessage("Downloading cat...").then(message => {
            request("http://random.cat/meow", (req, res, body) => {
                message.edit("Uploading cat...");
                executable.channel.sendFile(JSON.parse(body).file).then(() => {
                    message.delete();
                });
            });
        });
    });