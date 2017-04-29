// Community modules
const Promise = require("promise");

let commands = [];

exports.register = command => {
    commands.push(command);
};

exports.commands = commands;
