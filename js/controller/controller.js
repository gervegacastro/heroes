
// HOME PAGE

const inSearchHeroe = document.querySelector("#inSearchHeroe");
const suggestionList = document.querySelector("#liSuggestions");
const bClearMessages = document.querySelector("#bClearMessages");

let heroe = null;
let searches = null;
let timeOut;

    // Agregar a lista de sugerencias y envia mensaje de la interacción
    inSearchHeroe.addEventListener("input", () => {
        clearTimeOut(timeOut);
        timeOut = setTimeout (() => {
            heroe = findByName(inSearchHeroe.value);
        if (heroe) {
            saveSearch(inSearchHeroe.value);
            const liMessages = document.querySelector("#liMessages")
            const nuevoLiMessages = document.createElement("li");
            nuevoLiMessages.textContent = "Heroe service: found heroes matching " + heroe.name;
            liMessages.appendChild(nuevoLiMessages);
        } // FALTA VER LO DE DARLE UN TIEMPOOO PARA QUE NO TOME TODO
        else {
            const liMessages = document.querySelector("#liMessages")
            const nuevoLiMessages = document.createElement("li");
            nuevoLiMessages.textContent = "No heroes matching " + inSearchHeroe.value;
            liMessages.appendChild(nuevoLiMessages);
        }
        }, 1000);        
    })  
    
    // Mostrar lista de sugerencias
    inSearchHeroe.addEventListener("click", () => {
        searches = findAllSearches();
        for (let search of searches) {
            const nuevoLi = document.createElement("li");
            const bSuggestion = document.createElement("button");
            bSuggestion.classList.add ("bSuggestion");
            bSuggestion.textContent = search.name;            
            nuevoLi.appendChild(bSuggestion);
            suggestionList.appendChild(nuevoLi);
        }
    })
        

    // Para borrar la lista de sugerencias 
    document.addEventListener("click", (event) => {
        if (event.target != inSearchHeroe && event.target != suggestionList) {
            suggestionList.innerHTML = "";            
        }
    }) 
       
    // Clear Messages button
    bClearMessages.addEventListener("click", () => {
        const liMessages = document.querySelector("#liMessages");
        removeElement(liMessages);        
    })

    // Top Heroes


// -----------------------------------///---///------------------------------------------------//

// HEROES PAGE

const btnAddHeroe = document.querySelector("#bAddHeroe");
const bClearMessagesHeroes = document.querySelector("#bClearMessages");


    // Add Heroe
    btnAddHeroe.addEventListener ("click", (event) => {
        event.preventDefault();
        const input = document.querySelector("#inAddHeroe");
        const listaHeroes = document.querySelector("#liHeroes");

        const nuevoLiHeroes = document.createElement ("li");
        const bId = document.createElement("button");
        const bHeroe = document.createElement ("button");
        const bDelete = document.createElement("button");

        saveWhithOutId(input.value);
        const heroe = findByName(input.value);
        const heroeId = heroe.id;
            
        bId.textContent = heroeId.valueOf();
        bHeroe.textContent = input.value;
        bDelete.textContent = "X";
        bDelete.classList.add("bDeleteHeroe"); 

        nuevoLiHeroes.appendChild(bId);
        nuevoLiHeroes.appendChild(bHeroe);
        nuevoLiHeroes.appendChild(bDelete);            
        listaHeroes.appendChild(nuevoLiHeroes);
            
        const listaMessages = document.querySelector("#liMessages");
        const nuevoLiMessages = document.createElement("li");

        nuevoLiMessages.textContent = "added hero id = " + heroeId;
        listaMessages.appendChild(nuevoLiMessages);
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

            const listaMessages = document.querySelector("#liMessages");
            const nuevoLiMessages = document.createElement("li");

            nuevoLiMessages.textContent = "deleted hero id = " + idHeroe;
            listaMessages.appendChild(nuevoLiMessages);  
        
            removeByName(heroeName);
        }    
    })

    // Clear Messages button in Heroes
    bClearMessagesHeroes.addEventListener("click", () => {
        const listaMessagesHeroes = document.querySelector("#liMessages");
        removeElement(listaMessagesHeroes);
    })



// FUNCIONES
//console.log(removeAllStorage());
//console.log(localStorage);



