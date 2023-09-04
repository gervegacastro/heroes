// OTRAS FUNCIONES

function saveSearch (searchName) {
    const search = {
        name : searchName
    }
    localStorage.setItem("Search_" + searchName, JSON.stringify(search));
}

function findSearchByName (searchName) {
    for (let i = 0;  i < localStorage.length; i = i + 1) {
        let key = localStorage.key(i);
        let search = JSON.parse(localStorage.getItem(key));
        if (search == searchName) {
            return search;
        }
    }
    return null;
}

function findAllSearches () {
    let searches = [];
    for (let i = 0; i < localStorage.length; i = i + 1) {
        let key = localStorage.key(i);
        if (key.startsWith("Search_")){
            let search = JSON.parse(localStorage.getItem(key));
            searches.push(search);
        }
    }
    return searches;
}

function removeElement (elemento) {
    elemento.remove();
}

function removeAllStorage() {
    for (let key in localStorage) {
        localStorage.removeItem(key);
    }    
}

function removeAllSessionStorage() {
    for (let Key in sessionStorage) {
        sessionStorage.removeItem(Key);
    }
}