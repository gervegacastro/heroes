
// DETAILS PAGE

const labelHeroDetails = document.querySelector("#label-hero-details");
const labelIdDetails = document.querySelector("#label-id-details");
const heroNameDetails = document.querySelector("#hero-name-details");
const bSave = document.querySelector("#update");
const goBack = document.querySelector("#go-back")
const clearMessagesDetails = document.querySelector("#clear-messages-details");
const messagesListDetails = document.querySelector("#messages-list-details");

const heroListHeroes = document.querySelector("#hero-list-heroes");
const messagesListHeroes = document.querySelector("#messages-list-heroes");
let timeOut;

    // Desde el home y desde heroes carga details.
    document.addEventListener ("DOMContentLoaded", () => {
        const heroNameFromHome = sessionStorage.getItem ("heroNameFromHome");
        const heroNameFromHero = sessionStorage.getItem ("heroNameFromHero");
        let heroName;

        if (heroNameFromHome) {
            heroName = heroNameFromHome;
        } else if (heroNameFromHero) {
            heroName = heroNameFromHero;
        }

        if (heroName) {
            heroNameDetails.value = heroName;
            labelHeroDetails.textContent = heroNameDetails.value;            
            let hero = findByName(heroName);            
            labelIdDetails.textContent = hero.id;
        }

        const newLiMessages = document.createElement("li");    
        newLiMessages.textContent = "fetched hero id = " + labelIdDetails.textContent;
        messagesListDetails.appendChild(newLiMessages);

        //save/update button
        bSave.addEventListener ("click", (event) => {
            event.preventDefault();
            let hero = findByName(heroName);
            updateHeroe(hero.id, heroNameDetails.value);

            const newLi = document.createElement("li");
            newLi.textContent = "Update hero id: " + hero.id;
            messagesListDetails.appendChild(newLi);
            
            if (sessionStorage.getItem ("heroNameFromHome")){
                window.location.href = "../../html/home.html";                                
            } else if (sessionStorage.getItem ("heroNameFromHero")) {
                window.location.href = "../../html/heroes.html";                            
            }
            removeAllSessionStorage();
        })
        
        // goBack button
        goBack.addEventListener ("click", () => {
            if (sessionStorage.getItem ("heroNameFromHome")){
                window.location.href = "../../html/home.html";
            } else if (sessionStorage.getItem ("heroNameFromHero")) {
                window.location.href = "../../html/heroes.html";
            }
            removeAllSessionStorage();          
        })
    })

    // Contenido del titulo Details
    heroNameDetails.addEventListener ("input", () => {
        labelHeroDetails.textContent = heroNameDetails.value;
    })

    // Clear Messages
    clearMessagesDetails.addEventListener("click", () => {        
        removeElement(messagesListDetails);
    })

// FUNCIONES
//console.log(removeAllStorage());
//console.log(localStorage);
//console.log(removeAllSessionStorage());
//console.log(findAllHeroes());



