// System modules
const path = require("path");

// Community modules
const request = require("request");
const cheerio = require("cheerio");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));
const Argument = require(path.join(__dirname, "../../src/classes/Argument.js"));

function rand(min, max) {
    return Math.floor(Math.random() * max) + 1;
}

module.exports = new Command("rule34")
    .setDescription("Don't ask why")
    .setArguments([
        new Argument("tags")
            .setType("string")
            .setOptional(false)
            .setInfinite(true)
    ])
    .setExecute((executable) => {
        executable.channel.sendMessage("⬇️ **Hand tight!** Downloading image...").then(message => {
            request("http://rule34.paheal.net/post/list/" + executable.args[0].split(" ").join("%20") + "/1", (error, response, body) => {         
                if (error) return message.edit("❌ **Failed to download!**");

                let $ = cheerio.load(body);
                let thumbs = $(".shm-thumb");

                if (thumbs.length < 1) return message.edit("❌ **No images found!**");

                let thumb = thumbs[rand(0, thumbs.length)];

                message.edit("⬆️ **Hang tight!** Uploading image...");

                executable.channel.sendFile(thumb.children[2].attribs.href, thumb.children[2].attribs.href, "💦 **Here you go!**").then(file => {
                    message.delete();
                    file.react("🔥");
                });
            });
        });
    });