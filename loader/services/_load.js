// System modules
const path = require("path");

// Imports
const bot = require(path.join(__dirname, "../../src/bot.js"));

module.exports = (self) => {
    self(bot.bot);
};