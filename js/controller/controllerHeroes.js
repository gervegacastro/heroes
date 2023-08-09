
// HEROES PAGE

// Add Heroe
const btnAddHeroe = document.querySelector("#bAddHeroe");

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
const bClearMessagesHeroes = document.querySelector("#bClearMessages");

        bClearMessagesHeroes.addEventListener("click", () => {
           const listaMessagesHeroes = document.querySelector("#liMessages");
           removeElement(listaMessagesHeroes);
        })


// FUNCIONES
//console.log(removeAllStorage());
console.log(localStorage);




