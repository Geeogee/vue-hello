function init() {

    // TODO TODAY
    // REPO: vue-hello
    // GOAL: stampare a schermo il contenuto di una variabile dentro un h1
    // BONUS: utilizzare un data come nome del file immagine in un tag img

    new Vue ({

        el: "#app",
        data: {

            "message" : "Rathalos",
            "rathalos" : "img/MHRise-Rathalos_Icon.png"
        }
    
    })
}

document.addEventListener("DOMContentLoaded", init);    