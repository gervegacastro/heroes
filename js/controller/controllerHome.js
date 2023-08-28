
// HOME PAGE

const inSearchHeroe = document.querySelector("#inSearchHeroe");
const suggestionList = document.querySelector("#liSuggestions");
const bClearMessages = document.querySelector("#bClearMessages");

let searches = null;
let timeOut;

    // Carga home
    document.addEventListener ("DOMContentLoaded", () => {
        domLoadHome();        
    })

    // Agregar a lista de sugerencias y envia mensaje de la interacción
    inSearchHeroe.addEventListener("input", () => {
        clearTimeout(timeOut);
        timeOut = setTimeout (() => {
            const searchWord = inSearchHeroe.value;            
            if (searchWord.length > 0) {
                saveSearch(searchWord);
            }      

            timeOut = setTimeout (() => {
                const heroe = findByName(inSearchHeroe.value);
                if (heroe) {
                    const liMessages = document.querySelector("#liMessages")
                    const nuevoLiMessages = document.createElement("li");
                    nuevoLiMessages.textContent = "Heroe service: found heroes matching " + heroe.name;
                    liMessages.appendChild(nuevoLiMessages);
                } 
                else {
                    const liMessages = document.querySelector("#liMessages")
                    const nuevoLiMessages = document.createElement("li");
                    nuevoLiMessages.textContent = "No heroes matching " + inSearchHeroe.value;
                    liMessages.appendChild(nuevoLiMessages);
                }

            }, 1000);        
        }, 1000);        
    })  
    
    // Mostrar lista de sugerencias
    inSearchHeroe.addEventListener("click", () => {
        searches = findAllSearches();
        for (let search of searches) {
            const nuevoLi = document.createElement("li");
            const bSuggestion = document.createElement("button");
            bSuggestion.textContent = search.name;                        
            nuevoLi.appendChild(bSuggestion);
            suggestionList.appendChild(nuevoLi);

            const heroe = findByName (bSuggestion.textContent);
            if (heroe) {
                bSuggestion.classList.add ("details");
            }
        }
    })        

    // Para borrar la lista de sugerencias 
    document.addEventListener("click", (event) => {
        if (event.target != inSearchHeroe && event.target != suggestionList) {
            suggestionList.innerHTML = "";            
        }
    })    

    // Para ir a details desde Top Heroes y desde Sugerencia 
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("details") || event.target.classList.contains ("top-hero")) {
            sessionStorage.setItem ("heroNameFromHome", event.target.textContent);
            window.location.href = "../../html/details.html";            
        }
    })
       
    // Clear Messages button
    bClearMessages.addEventListener("click", () => {
        const liMessages = document.querySelector("#liMessages");
        removeElement(liMessages);        
    })

//FUNCIONES

// Carga Top Heroes 
function domLoadHome() { 
    const divTopHeroes = document.querySelector("#divTopHeroes");
    
    let heroes = findAllHeroes();
    let contador = 0;
    for (let heroe of heroes) {
        if (contador < 4) {
            const btnHeroe = document.createElement("button");
            btnHeroe.textContent = heroe.name;
            btnHeroe.classList.add ("top-hero");        
            divTopHeroes.appendChild(btnHeroe);
        }
        contador = contador + 1;                    
    }           
}

//console.log(removeAllStorage());
//console.log(localStorage);
//console.log(sessionStorage);







