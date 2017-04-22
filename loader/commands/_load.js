// System modules
const path = require("path");

// Imports
const command = require(path.join(__dirname, "../../src/command/command.js"));

module.exports = (self) => {
    command.register(self);
};