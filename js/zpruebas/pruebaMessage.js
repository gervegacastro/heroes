

class Message {

    constructor (name, className, time) {
        this.name = name;
        this.className = className;
        this.time = time || new Date();
    }

    get getName () {
        return this.name;
    }

    set setName (name) {
        this.name = name;
    }

    get getClassName () {
        return this.className;
    }

    set setClassName (className) {
        this.className = className;
    }

    get getTime () {
        return this.time;
    }

    set setTime (time) {
        this.time = time;
    }
    
}

// FUNCIONES

function add(message){
    const key = "Message_" + message.getName;
    localStorage.setItem(key, JSON.stringify(message));
}

function findAllMessage () {
    let messages = [];
    for (let i = 0; i < localStorage.length; i = i + 1) {
        let key = localStorage.key (i);
        if (key.startsWith("Message_")){
            let message = JSON.parse(localStorage.getItem(key))
            messages.push(message);
        }
    }
    return messages;            
}   





