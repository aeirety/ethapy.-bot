// System modules
const path = require("path");

// Community modules
const Promise = require("promise");

// Imports
const argument = require(path.join(__dirname, "argument.js"));

let types = argument.args;

function getType(name) {
    return types.find(type => {
        return type.name.toUpperCase() == name.toUpperCase();
    });
}

exports.parse = (args, command) => {
    return new Promise((resolve, reject) => {
        let promises = [];
        let newArgs = [];

        if (command.arguments) command.arguments.forEach(arg => {
            if (arg.optional) {
                if (args[0]) {
                    let type = getType(arg.type);

                    promises.push(type.test(arg.infinite ? args : [args[0]]).then(newArg => {
                        newArgs.push(newArg);
                    }));

                    args.shift();
                }
            } else {
                if (!args[0]) {
                    return reject("Argument " + arg.name + " is required");
                }

                let type = getType(arg.type);

                promises.push(type.test(arg.infinite ? args : [args[0]]).then(newArg => {
                    newArgs.push(newArg);
                }));
                
                args.shift();
            }
        });

        Promise.all(promises).then(() => {
            resolve(newArgs);
        }).catch(error => {
            console.log("argParse" + error);
            reject(error);
        });
    });
};