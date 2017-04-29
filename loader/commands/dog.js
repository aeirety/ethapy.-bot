// System modules
const path = require("path");

// Community modules
const request = require("request");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));

module.exports = new Command("dog")
    .setDescription("Worst command ever")
    .setExecute(executable => {
        executable.channel.sendMessage("⬇️ **Hang tight!** Downloading dog...").then(message => {
            request("https://random.dog/woof.json", (req, res, body) => {
                message.edit("⬆️ **Hang tight!** Uploading dog...");
                executable.channel.sendFile(JSON.parse(body).url, JSON.parse(body).url, "🐶 **Here you go!**").then(file => {
                    message.delete();
                    file.react("❤");
                });
            });
        });
    });