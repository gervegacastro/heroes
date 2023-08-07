
/*class Heroe {

    constructor (id, name) {
        this.id = id;
        this.name = name;
    }

    get getId () {
        return this.id;
    }

    set setId (id) {
        this.id = id;
    }

    get getName () {
        return this.name;
    }

    set setName (name) {
        this.name = name;
    }
    
}*/

// FUNCIONES

function save(heroe){
    const key = "Heroe_" + heroe.getId;
    localStorage.setItem(key, JSON.stringify(heroe));
}

function findById (id) {
    for (let i = 0; i < localStorage.length; i = i + 1) {
        let key = localStorage.key(i);
        let heroe = JSON.parse(localStorage.getItem(key));
        if (heroe.id == id) {
            return heroe;
        }
    }
    return null;    
}

function findByName (name) {
    for (let i = 0; i < localStorage.length; i = i + 1) {
        let key = localStorage.key (i);
        let heroe = JSON.parse(localStorage.getItem(key));
        if (heroe.name == name) {
            return heroe;
        }
        return null;
    }
}


function findAllHeroes () {
    let heroes = [];
    for (let i = 0; i < localStorage.length; i = i + 1) {
        let key = localStorage.key (i);
        if (key.startsWith("Heroe_")) {
            let heroe = JSON.parse(localStorage.getItem(key))
            heroes.push(heroe);
        }
    }
    return heroes;            
}   
    


function update (id, Heroe) {
    let heroe = findById(id);
    if (heroe == null) {
        return null;
    }
    heroe.name = Heroe;
    save(heroe);
    return heroe;
}

function remove (id) {
    let heroe = findById(id);
    if (heroe == null) {
        return "Heroe no encontrado";    
    }    
    localStorage.removeItem(heroe.id);
        return "Heroe eliminado";
}

// OTRAS FUNCIONES

function verificarKeys () {
    for (let i = 0; i < localStorage.length; i = i + 1) {
        let key = localStorage.key(i);
        if (key.startsWith("Heroe_")){
            console.log(key, JSON.parse(localStorage.getItem(key)));
        }
    }
}

function findAllStorage() {
    for (let key in localStorage) {
        console.log(key, localStorage.getItem(key));
    }
}

function removeAllStorage() {
    for (let key in localStorage) {
        localStorage.removeItem(key);
    }    
}

// PRUEBAS 

//removeAllStorage();
console.log(findAllStorage());


