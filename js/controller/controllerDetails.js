
// DETAILS PAGE

const labelHeroe = document.querySelector("#label-hero");
const labelId = document.querySelector("#label-id");
const inHeroe = document.querySelector("#hero-name-details");
const bSave = document.querySelector("#update");
const goBack = document.querySelector("#go-back")
const bClearMessages = document.querySelector("#clear-Messages");
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
            inHeroe.value = heroName;
            labelHeroe.textContent = inHeroe.value;            
            let heroe = findByName(heroName);            
            labelId.textContent = heroe.id;
        }
        
        // goBack button
        goBack.addEventListener ("click", () => {
            if (sessionStorage.getItem ("heroNameFromHome")){
                window.location.href = "../../html/home.html";
            } else if (sessionStorage.getItem ("heroNameFromHero")) {
                window.location.href = "../../html/heroes.html";
            }
                        
            /*
            const homeButtons = document.querySelectorAll(".details");
            console.log(homeButtons);
            const heroButtons = document.querySelectorAll(".hero-id, .hero-name");
            console.log(heroButtons);
            if (homeButtons.length > 0) {
                window.location.href = "../../html/home.html";
            }
            else if (heroButtons.length > 0) {
                window.location.href = "../../html/heroes.html";
            }*/           
        })
    })

    // Contenido del titulo Details
    inHeroe.addEventListener ("input", () => {
        labelHeroe.textContent = inHeroe.value;
    })

    // Contenido del id
    inHeroe.addEventListener ("input", () => {
        clearTimeout(timeOut);        
        timeOut = setTimeout(() => {
            let heroe = findByName (inHeroe.value);
            //console.log(heroe);
            labelId.textContent = heroe.id;
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
        const listaHeroes = document.querySelector("#hero-list");
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



