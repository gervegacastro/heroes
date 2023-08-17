
// HEROES PAGE

const bAddHeroe = document.querySelector("#bAddHeroe");
const bClearMessagesHeroes = document.querySelector("#bClearMessages");


    // Add Heroe
    bAddHeroe.addEventListener ("click", (event) => {
        event.preventDefault();
        const input = document.querySelector("#inAddHeroe");
        saveWhithOutId(input.value);
    })

    // Carga lista de heroes cada vez que se graba
    bAddHeroe.addEventListener("click", () => {
        const listaHeroes = document.querySelector("#listaHeroes");
        listaHeroes.innerHTML = "";
        const listaMessages = document.querySelector("#listaMessages");
        listaMessages.innerHTML = "";

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

            bId.classList.add("details");
            bHeroe.classList.add("details");
            bDelete.classList.add("bDeleteHeroe");
    
            nuevoLiHeroes.appendChild(bId);
            nuevoLiHeroes.appendChild(bHeroe);
            nuevoLiHeroes.appendChild(bDelete);            
            listaHeroes.appendChild(nuevoLiHeroes);    
            
            const nuevoLiMessages = document.createElement("li");    
            nuevoLiMessages.textContent = "added hero id = " + heroeId;
            listaMessages.appendChild(nuevoLiMessages);            
        }
    })

    // La X elimina el elemento del HTML
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("bDeleteHeroe")) {
            const eToRemove = event.target.parentElement;
            removeElement(eToRemove);
        }
    })

    // La X elimina objeto del storage y envia el message
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("bDeleteHeroe")){
            const heroeName = event.target.previousSibling.textContent;
            const heroe = findByName(heroeName);
            const idHeroe = heroe.id;

            const listaMessages = document.querySelector("#listaMessages");
            const nuevoLiMessages = document.createElement("li");

            nuevoLiMessages.textContent = "deleted hero id = " + idHeroe;
            listaMessages.appendChild(nuevoLiMessages);  
        
            removeByName(heroeName);
        }    
    })

    // Para ir a Heroe details
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("details")) {

        }
    })

    // Clear Messages button in Heroes
    bClearMessagesHeroes.addEventListener("click", () => {
        const listaMessagesHeroes = document.querySelector("#listaMessages");
        removeElement(listaMessagesHeroes);
    })

// FUNCIONES
//console.log(removeAllStorage());
//console.log(localStorage);

