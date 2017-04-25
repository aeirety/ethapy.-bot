// System modules
const path = require("path");

// Community modules
const Promise = require("promise");

// Imports
const ArgumentType = require(path.join(__dirname, "../../src/classes/ArgumentType.js"));

module.exports = new ArgumentType("integer")
    .setTest(args => {
        return new Promise((resolve, reject) => {
            let value = [];
            args.map(arg => {
                if (isNaN(arg)) return reject("Expected integer (number) got " + arg);
                else value.push(parseInt(arg));
            });
            resolve(value[1] ? value : value[0]);
        });
    });