function init() {

    // TODO TODAY
    // REPO: vue-hello
    // GOAL: stampare a schermo il contenuto di una variabile dentro un h1
    // BONUS: utilizzare un data come nome del file immagine in un tag img

    new Vue ({

        el: "#app",
        data: {

            "name" : "Rathalos",
            "monster" : "img/MHRise-Rathalos_Icon.png",
        },

        methods: {

            changeMonster: function() {

                this.name = "Rajang";
                this.monster = "img/rajang.png";   
            }
        }
    
    })
}

document.addEventListener("DOMContentLoaded", init);    