
// HOME PAGE

const inSearchHeroe = document.querySelector("#inSearchHeroe");

    inSearchHeroe.addEventListener("input", () => {

        const inputSearch = inSearchHeroe.value;        
        const heroe = findByName(inputSearch);
        if (heroe) {
            // que aparezca el deplegable abajo
            // a ese desplegable (que es dinámico) le asigno un identificador (que puede ser un id o
            // una clase) 
        }
        //Luego en otra función por fuera le asigno otro evento al click y que me lleve a el heroe 
        //en details. 
    })



// Clear Messages button
const bClearMessages = document.querySelector("#bClearMessages");

    bClearMessages.addEventListener("click", () => {
        const liMessages = document.querySelector("#liMessages");
        removeElement(liMessages);
    })