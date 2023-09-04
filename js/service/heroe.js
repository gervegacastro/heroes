
// FUNCIONES 

function save (heroeName) {
    const id = localStorage.length + 1; 
    const newHeroe = new Heroe (id, heroeName);
    localStorage.setItem("Heroe_" + id, JSON.stringify(newHeroe));    
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
        if (key.startsWith("Heroe_")) {
            let heroe = JSON.parse(localStorage.getItem(key));
            if (heroe.name == name) {
                return heroe;
            }       
        }         
    }
    return null;
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

function updateHeroe (id, name) {
    let heroe = findById(id);
    if (heroe == null) {
        return null;
    }
    heroe.name = name;
    localStorage.setItem("Heroe_" + id, JSON.stringify(heroe));
    return heroe;
}

function removeById (id) {
    let heroe = findById(id);
    if (heroe != null) {
        localStorage.removeItem("Heroe_" + id, heroe);
        return "Heroe eliminado";          
    }
    return "Heroe no encontrado";      
}

function removeByName (name) {
    let heroe = findByName (name);    
    if (heroe != null) {
        let id = heroe.id;
        localStorage.removeItem("Heroe_" + id, heroe);
        return "Heroe eliminado";
    }
    return "Heroe no encontrado";   
}








 



