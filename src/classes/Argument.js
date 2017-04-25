class Argument {

    constructor(name) {
        this.name = name;
    }

    setOptional(optional) {
        this.optional = optional;
        return this;
    }

    setInfinite(infinite) {
        this.infinite = infinite;
        return this;
    }

    setType(type) {
        this.type = type;
        return this;
    }

}

module.exports = Argument;