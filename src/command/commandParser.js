// System modules
const path = require("path");

// Community modules
const Promise = require("promise");

// Imports
const argumentParser = require(path.join(__dirname, "argumentParser.js"));

function resolveObject(command, args) {
    return {
        command: command,
        args: args
    };
}

function rejectObject(command, error) {
    return {
        command: command,
        error: error
    };
}

function parse(args, commands) {
    return new Promise((resolve, reject) => {
        commands.map(command => {
            if (!command.name.toUpperCase() == args[0].toUpperCase()) return;
            
            args.shift();

            // If the command has subcommands parse with sub commands
            if (command.subcommands) {
                if (args[0]) resolve(resolveObject(command, []));
                else parse(args, command.subcommands).then(object => {
                    resolve(object);
                }).catch(object => {
                    reject(object);
                });
            } else argumentParser.parse(args, command).then(newArgs => {
                resolve(resolveObject(command, newArgs));
            }).catch(error => {
                reject(rejectObject(command, error));
            });
        });
    });
}

exports.parse = parse;