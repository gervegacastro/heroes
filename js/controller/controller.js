
// HOME PAGE


// HEROES PAGE

// Add Heroe
const btnAddHeroe = document.querySelector("#btnAddHeroe");

        btnAddHeroe.addEventListener ("click", (event) => {
            event.preventDefault();
            const input = document.querySelector("#input");
            const listaHeroes = document.querySelector("#listaHeroes");

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
            bDelete.classList.add("btnDeleteHeroe"); 

            nuevoLiHeroes.appendChild(bId);
            nuevoLiHeroes.appendChild(bHeroe);
            nuevoLiHeroes.appendChild(bDelete);            
            listaHeroes.appendChild(nuevoLiHeroes);
            
            const listaMessages = document.querySelector("#listaMessages");
            const nuevoLiMessages = document.createElement("li");

            nuevoLiMessages.textContent = "added hero id = " + heroeId;
            listaMessages.appendChild(nuevoLiMessages);
        })

// La X elimina el elemento del HTML
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btnDeleteHeroe")) {
        const eToRemove = event.target.parentElement;
        removeElement(eToRemove);
    }
})

// La X elimina objeto del storage y envia el message
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btnDeleteHeroe")){
        const heroeName = event.target.previousSibling.textContent;
        const heroe = findByName(heroeName);
        const idHeroe = heroe.id;

        const listaMessages = document.querySelector("#listaMessages");
        const nuevoLiMessages = document.createElement("li");

        nuevoLiMessages.textContent = "deleted hero id = " + idHeroe;
        listaMessages.appendChild(nuevoLiMessages);  
        
        removeByName(heroe);
    }    
})

// Clear Messages button
const bClearMessages = document.querySelector("#btnClearMessages");

        bClearMessages.addEventListener("click", () => {
           const listaMessages = document.querySelector("#listaMessages");
           removeElement(listaMessages);
        })

// FUNCIONES OK
//removeAllStorage();
//console.log(localStorage);
//console.log(findById(1));
//console.log(findByName("Eliana"));
//console.log(findAllHeroes());
//console.log(removeById(1));
//console.log(updateHeroe(1, "German"));
//console.log(removeById(2));
//console.log(removeByName("Peluca"));





