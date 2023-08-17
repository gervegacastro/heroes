
// FUNCIONES 

function save(heroe){
    const key = "Heroe_" + heroe.getId;
    localStorage.setItem(key, JSON.stringify(heroe));
}

function saveWhithOutId (heroeName) {
    const id = localStorage.length + 1; 
    const heroe = {
        id : id,
        name : heroeName
    }
    localStorage.setItem("Heroe_" + id, JSON.stringify(heroe));    
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

// OTRAS FUNCIONES

function removeElement (elemento) {
    elemento.remove();
}

function removeAllStorage() {
    for (let key in localStorage) {
        localStorage.removeItem(key);
    }    
}

function domLoadHeroes() {
    const listaHeroes = document.querySelector("#listaHeroes");

    let heroes = findAllHeroes();

    for (let heroe of heroes) {
        const nuevoLiHeroes = document.createElement ("li");
        const bId = document.createElement("button");
        const bHeroe = document.createElement ("button");
        const bDelete = document.createElement("button");
        const heroeId = heroe.id;
        bId.textContent = heroeId.valueOf();
        bHeroe.textContent = heroe.name;
        bDelete.textContent = "X";
        bDelete.classList.add("bDeleteHeroe");

        nuevoLiHeroes.appendChild(bId);
        nuevoLiHeroes.appendChild(bHeroe);
        nuevoLiHeroes.appendChild(bDelete);            
        listaHeroes.appendChild(nuevoLiHeroes);

        const listaMessages = document.querySelector("#listaMessages");
        const nuevoLiMessages = document.createElement("li");    
        nuevoLiMessages.textContent = "added hero id = " + heroeId;
        listaMessages.appendChild(nuevoLiMessages);
    }
}

function domLoadHome() { 
    const divTopHeroes = document.querySelector("#divTopHeroes");
    
    let heroes = findAllHeroes();
    let contador = 0;
    for (let heroe of heroes) {
        if (contador < 4) {
            const btnHeroe = document.createElement("button");
            const elementHeroe = heroe.name;
            btnHeroe.textContent = elementHeroe;
            divTopHeroes.appendChild(btnHeroe);
        }
        contador = contador + 1;                    
    }           
}



