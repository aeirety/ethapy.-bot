class Command {

    constructor(name) {
        this.name = name;
    }
    
    setDescription(description) {
        this.description = description;
        return this;
    }

    setSubcommands(subcommands) {
        this.subcommands = subcommands;
        return this;
    }

    setArguments(arguments) {
        this.arguments = arguments;
        return this;
    }

    setExecute(execute) {
        this.execute = execute;
        return this;
    }

}

module.exports = Command;