// System modules
const path = require("path");

// Community modules
const Promise = require("promise");

// Imports
const argument = require(path.join(__dirname, "argument.js"));

let types = argument.args;

function getType(name) {
    return new Promise((resolve, reject) => {
        types.map(type => {
            if (type.name.toUpperCase() == name.toUpperCase()) resolve(type);
        });
    });
}

exports.parse = (args, command) => {
    return new Promise((resolve, reject) => {
        let newArgs = [];

        if (command.arguments) command.arguments.map(arg => {
            if (!arg.optional && !args[0]) return reject("Argument " + arg.name + " is required");
            getType(arg.type).then(type => {
                type.test(arg.infinite ? args : args[0]).then(newArg => {
                    newArgs.push(newArg);
                }).catch(error => {
                    return reject(error);
                });
                args.shift();
            })
        });

        resolve(newArgs);
    });
};