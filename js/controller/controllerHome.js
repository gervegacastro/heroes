
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

    // Top Heroes FALTAA


// FUNCIONES
//console.log(removeAllStorage());
//console.log(localStorage);







