// System modules
const path = require("path");

// Community modules
const Promise = require("promise");

// Imports
const ArgumentType = require(path.join(__dirname, "../../src/classes/ArgumentType.js"));

module.exports = new ArgumentType("string")
    .setTest(args => {
        return new Promise((resolve, reject) => {
            resolve(args.join(" "));
        });
    });