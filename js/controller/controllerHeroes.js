
// HEROES PAGE

const bAddHeroe = document.querySelector("#b-add-Hero");
const bClearMessagesHeroes = document.querySelector("#clear-Messages");
const heroList = document.querySelector("#hero-list");

    // Carga heroes.html
    document.addEventListener("DOMContentLoaded", () => {
        domLoadHeroes();
    })

    // Add Heroe
    bAddHeroe.addEventListener ("click", (event) => {
        event.preventDefault();
        const input = document.querySelector("#in-add-Hero");
        save(input.value);
    })

    // Carga lista de heroes cada vez que se graba
    bAddHeroe.addEventListener("click", () => {
        const listaHeroes = document.querySelector("#hero-list");
        listaHeroes.innerHTML = "";
        const listaMessages = document.querySelector("#listaMessages");
        listaMessages.innerHTML = "";

        let heroes = findAllHeroes();

        for (let heroe of heroes) {            
            const nuevoLiHeroes = document.createElement ("li");
            const bId = document.createElement("button");
            const bHeroe = document.createElement ("button");
            const bDelete = document.createElement("button");
            //const heroeId = heroe.id;
            bId.textContent = heroe.id;
            bHeroe.textContent = heroe.name;
            bDelete.textContent = "X";

            bId.classList.add("hero-id");
            bHeroe.classList.add("hero-name");
            bDelete.classList.add("bDeleteHeroe");
    
            nuevoLiHeroes.appendChild(bId);
            nuevoLiHeroes.appendChild(bHeroe);
            nuevoLiHeroes.appendChild(bDelete);            
            listaHeroes.appendChild(nuevoLiHeroes);    
            
            const nuevoLiMessages = document.createElement("li");    
            nuevoLiMessages.textContent = "added hero id = " + heroe.id;
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
            
            const listaMessages = document.querySelector("#listaMessages");
            const nuevoLiMessages = document.createElement("li");

            nuevoLiMessages.textContent = "deleted hero id = " + heroe.id;
            listaMessages.appendChild(nuevoLiMessages);  
        
            removeByName(heroeName);
        }    
    })

    // Click en heroList (id) para ir a details 
    document.addEventListener ("click", (event) => {        
        if (event.target.classList.contains("hero-id")) {
            const hero = findById(event.target.textContent);
            sessionStorage.setItem("heroNameFromHero", hero.name);
            window.location.href = "../../html/details.html";
        }
    })

    // Click en heroList (name) para ir a details
    document.addEventListener ("click", (event) => {
        if (event.target.classList.contains("hero-name")) {
            sessionStorage.setItem ("heroNameFromHero", event.target.textContent);
            window.location.href = "../../html/details.html";
        }
    })
        
    // Clear Messages button in Heroes
    bClearMessagesHeroes.addEventListener("click", () => {
        const listaMessagesHeroes = document.querySelector("#listaMessages");
        removeElement(listaMessagesHeroes);
    })

// FUNCIONES

// Carga heroes.html 
function domLoadHeroes() {
    const heroList = document.querySelector("#hero-list");

    let heroes = findAllHeroes();

    for (let heroe of heroes) {
        const nuevoLiHeroes = document.createElement ("li");
        const bId = document.createElement("button");
        const bHeroe = document.createElement ("button");
        const bDelete = document.createElement("button");
        bId.textContent = heroe.id;
        bHeroe.textContent = heroe.name;
        bDelete.textContent = "X";

        bId.classList.add("hero-id");
        bHeroe.classList.add("hero-name");
        bDelete.classList.add("bDeleteHeroe");

        nuevoLiHeroes.appendChild(bId);
        nuevoLiHeroes.appendChild(bHeroe);
        nuevoLiHeroes.appendChild(bDelete);            
        heroList.appendChild(nuevoLiHeroes);

        const listaMessages = document.querySelector("#listaMessages");
        const nuevoLiMessages = document.createElement("li");    
        nuevoLiMessages.textContent = "added hero id = " + heroe.id;
        listaMessages.appendChild(nuevoLiMessages);
    }
}

//console.log(removeAllStorage());
//console.log(localStorage);
//console.log(sessionStorage);



