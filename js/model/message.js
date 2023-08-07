


class Message {

    constructor (name, className, time) {
        this.name = name;
        this.className = className;
        this.time = time || new Date();
    }

    get name () {
        return this.name;
    }

    set name (name) {
        this.name = name;
    }

    get className () {
        return this.className;
    }

    set className (className) {
        this.className = className;
    }

    get time () {
        return this.time;
    }

    set time (time) {
        this.time = time;
    }
    
}