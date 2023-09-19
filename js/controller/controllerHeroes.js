
// HEROES PAGE

const inAddHero = document.querySelector("#in-add-hero");
const bAddHeroe = document.querySelector("#b-add-hero");
const clearMessagesHeroes = document.querySelector("#clear-messages-heroes");
const heroListHeroes = document.querySelector("#hero-list-heroes");
const messagesListHeroes = document.querySelector("#messages-list-heroes");

    // Carga heroes.html
    document.addEventListener("DOMContentLoaded", () => {
        domLoadHeroes();
    })

    // Add Heroe + actualiza lista de heroes y mensajes
    bAddHeroe.addEventListener ("click", (event) => {
        event.preventDefault();
        save(inAddHero.value);
        heroListHeroes.innerHTML = "";
        messagesListHeroes.innerHTML = "";
        domLoadHeroes();

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
            const heroe = findByName(event.target.previousSibling.textContent);    
            
            const newLiMessages = document.createElement("li");
            newLiMessages.textContent = "deleted hero id = " + heroe.id;
            messagesListHeroes.appendChild(newLiMessages);  
        
            removeByName(heroe.name);
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
    clearMessagesHeroes.addEventListener("click", () => {        
        removeElement(messagesListHeroes);
    })

// FUNCIONES

// Carga heroes.html 
function domLoadHeroes() {
 
    let heroes = findAllHeroes();

    for (let hero of heroes) {
        const newLiHeroes = document.createElement ("li");
        const bId = document.createElement("button");
        const bHero = document.createElement ("button");
        const bDelete = document.createElement("button");
        bId.textContent = hero.id;
        bHero.textContent = hero.name;
        bDelete.textContent = "X";

        newLiHeroes.classList.add ("new-li");
        bId.classList.add("hero-id");
        bHero.classList.add("hero-name");
        bDelete.classList.add("bDeleteHeroe");

        newLiHeroes.appendChild(bId);
        newLiHeroes.appendChild(bHero);
        newLiHeroes.appendChild(bDelete);            
        heroListHeroes.appendChild(newLiHeroes);
        
        const newLiMessages = document.createElement("li");    
        newLiMessages.textContent = "added hero id = " + hero.id;
        messagesListHeroes.appendChild(newLiMessages);
    }
}

//console.log(removeAllStorage());
//console.log(localStorage);
//console.log(removeAllSessionStorage());
//console.log(sessionStorage);



