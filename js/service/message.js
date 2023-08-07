
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


