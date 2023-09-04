
// HOME PAGE

const heroSearch = document.querySelector("#hero-search-home");
const topHeroes = document.querySelector("#top-heroes-home");
const suggestionList = document.querySelector("#suggestion-list-home");
const clearMessagesHome = document.querySelector("#clear-messages-home");
const messagesListHome = document.querySelector("#messages-list-home");

let timeOut;

    // Carga home
    document.addEventListener ("DOMContentLoaded", () => {
        domLoadHome();        
    })

    heroSearch.addEventListener ("input", () => {
        const heroes = findAllHeroes();
        clearTimeout(timeOut);
        timeOut = setTimeout (() => {
            const searchWord = heroSearch.value;
            if (searchWord.length > 0) {
                for (let hero of heroes) {                                
                    if (hero.name.includes(searchWord)){
                        const nuevoLi = document.createElement("li");
                        const suggestion = document.createElement("button");
                        suggestion.textContent = hero.name;  
                        suggestion.classList.add("toDetails");                      
                        nuevoLi.appendChild(suggestion);
                        suggestionList.appendChild(nuevoLi);
    
                        const newLiMessages = document.createElement("li");
                        newLiMessages.textContent = "HeroeService: found heroes matching " + searchWord;
                        messagesListHome.appendChild(newLiMessages);
                    } else {
                        const newLiMessages = document.createElement("li");
                        newLiMessages.textContent = "HeroeService: no heroes matching " + searchWord;
                        messagesListHome.appendChild(newLiMessages);
                    }                
                }
            }              
        },1000);
    })

    // Para borrar la lista de sugerencias 
    document.addEventListener("click", (event) => {
        if (event.target != heroSearch && event.target != suggestionList) {
            suggestionList.innerHTML = "";            
        }
    })    

    // Para ir a details desde Top Heroes y desde Sugerencia 
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("toDetails") || event.target.classList.contains ("top-hero")) {
            sessionStorage.setItem ("heroNameFromHome", event.target.textContent);
            window.location.href = "../../html/details.html";            
        }
    })
       
    // Clear Messages button
    clearMessagesHome.addEventListener("click", () => {        
        removeElement(messagesListHome);        
    })

//FUNCIONES

// Carga Top Heroes 
function domLoadHome() {     
    let heroes = findAllHeroes();
    let number = 0;
    for (let hero of heroes) {
        if (number < 4) {
            const heroe = document.createElement("button");
            heroe.textContent = hero.name;
            heroe.classList.add ("top-hero");        
            topHeroes.appendChild(heroe);
        }
        number = number + 1;                    
    }           
}

//console.log(removeAllStorage());
//console.log(localStorage);
//console.log(removeAllSessionStorage());
//console.log(sessionStorage);








