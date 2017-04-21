let commands;

exports.register = (command) => {
    commands.push(command);
};

exports.commands = commands;