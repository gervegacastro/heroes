
// HOME PAGE

const inSearchHeroe = document.querySelector("#inSearchHeroe");
const suggestionList = document.querySelector("#liSuggestions");
let heroe = null;
let searches = null;

    
    inSearchHeroe.addEventListener("input", () => {
        
        heroe = findByName(inSearchHeroe.value);
        if (heroe) {
            saveSearch(inSearchHeroe.value);
        }

    })

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
            removeElement(suggestionList);
        }
    }) // EL PROBLEMA ES QUE UNA VEZ QUE LO REMUEVE NO LO VUELVE A CARGAR           
        
        



// Clear Messages button
const bClearMessages = document.querySelector("#bClearMessages");

    bClearMessages.addEventListener("click", () => {
        const liMessages = document.querySelector("#liMessages");
        removeElement(liMessages);
    })