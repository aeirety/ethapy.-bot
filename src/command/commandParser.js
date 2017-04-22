// Community modules
const Promise = require("promise");

let commands = [];

exports.register = (command) => {
    commands.push(command);
};

function parse(message, args, cmds) {
    
}

exports.parse = (message) => {
    return new Promise((resolve, reject) => {
        // Check if the message starts with prefix case insensitive
        if (!message.content.toUpperCase().startsWith(prefix.toUpperCase)) resolve();

        let args = message.content.substring(prefix.length).split(" ");

        commands.map((command) => {

        });
    });
};

exports.commands = commands;