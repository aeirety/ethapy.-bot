// System modules
const path = require("path");

// Imports
const commandParser = require(path.join(__dirname, "../../src/command/commandParser.js"));

module.exports = (self) => {
    commandParser.register(self);
};