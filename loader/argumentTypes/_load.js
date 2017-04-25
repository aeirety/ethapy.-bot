// System modules
const path = require("path");

// Imports
const argument = require(path.join(__dirname, "../../src/command/argument.js"));

module.exports = (self) => {
    argument.register(self);
};