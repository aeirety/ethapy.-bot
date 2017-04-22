// Community modules
const dj = require("dankjson");

let colors = [
    "#ff5050",
    "#ff6600",
    "#ff9933",
    "#ffcc00",
    "#ffff00",
    "#ccff33",
    "#99ff33",
    "#66ff33",
    "#33cc33",
    "#00ff00",
    "#00ff99",
    "#00ffcc",
    "#33cccc",
    "#00ccff",
    "#0099ff",
    "#0066ff",
    "#3366ff",
    "#6666ff",
    "#9966ff",
    "#cc33ff",
    "#ff00ff",
    "#ff33cc",
    "#ff33cc",
    "#ff3399",
    "#ff0066"
];

let timer;

let i = 0;

function start(bot) {
    // Start the timer if the timer hasn't been started already
    if (!timer) timer = setInterval(() => {
        bot.guilds.find("name", "ethapy.").roles.find("name", "[Rainbow]").setColor(colors[i]);

        i++;
        if (i > colors.length) i = 0;
    }, 500);
}

module.exports = (bot) => {
    bot.on("ready", () => {
        start(bot);
    });
};

//TODO: Load colors and guild from config