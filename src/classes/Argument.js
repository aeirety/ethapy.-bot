class Argument {

    constructor(name) {
        this.name = name;
    }

    setOptional(optional) {
        this.optional = optional;
    }

    setInfinite(infinite) {
        this.infinite = infinite;
    }

    setType(type) {
        this.type = type;
    }

}

module.exports = Argument;