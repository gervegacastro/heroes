
// DETAILS PAGE

const labelHeroe = document.querySelector("#labelHeroe");
const labelId = document.querySelector("#labelId");
const inHeroe = document.querySelector("#inHeroe");
const bSave = document.querySelector("#bSave");
const bClearMessages = document.querySelector("#bClearMessages");

let timeOut;

    // Contenido del titulo Details
    inHeroe.addEventListener ("input", () => {
        labelHeroe.textContent = inHeroe.value;
    })

    // Contenido del id
    inHeroe.addEventListener ("input", () => {
        clearTimeout(timeOut);        
        timeOut = setTimeout(() => {
            let heroe = findByName (inHeroe.value);
            let heroeId = heroe.id;
            labelId.textContent = heroeId;
        }, 1000); 
    })

    // Button Save Heroe (update en realidad) 
    bSave.addEventListener ("click", (event) => {
        event.preventDefault();
        let heroe = findByName (inHeroe.value);
        let heroeId = heroe.id;
        updateHeroe(heroeId, inHeroe.value);

        const listaMessages = document.querySelector("#listaMessagesDetails");
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = "Update hero id: " + heroeId;
        listaMessages.appendChild(nuevoLi);
    })

    // Lista heroes en heroes.html
    bSave.addEventListener ("click", () => {
        const listaHeroes = document.querySelector("#listaHeroes");
        listaHeroes.innerHTML = "";

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
        }        
    })

    // Clear Messages
    bClearMessages.addEventListener("click", () => {
        const listaMessages = document.querySelector("#listaMessagesDetails");
        removeElement(listaMessages);
    })

// FUNCIONES
//console.log(removeAllStorage());
//console.log(localStorage);
//console.log(findAllHeroes());
