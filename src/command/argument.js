let args = [];

exports.register = (argument) => {
    args.push(argument);
};

exports.args = args;