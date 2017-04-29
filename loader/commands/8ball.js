// System modules
const path = require("path");

// Imports
const Command = require(path.join(__dirname, "../../src/classes/Command.js"));
const Argument = require(path.join(__dirname, "../../src/classes/Argument.js"));

let fortunes = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

function getFortune(){
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

module.exports = new Command("8ball")
    .setDescription("Classic 8ball command")
    .setArguments([
        new Argument("query")
            .setType("string")
            .setOptional(false)
            .setInfinite(true)
    ])
    .setExecute(executable => {
        executable.channel.sendMessage("🎱 **Hmmm...** Let me see...").then(message => {
            setTimeout(() => {
                message.edit("🎱 " + getFortune() + "!");
            }, 1000);
        });
    });