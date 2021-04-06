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
            "clicked" : false
        },

        methods: {

            changeMonster: function() {

                if(this.clicked) {
                    this.name = "Rathalos";
                    this.monster = "img/MHRise-Rathalos_Icon.png";
                    this.clicked = false;
                } else {
                    this.name = "Rajang";
                    this.monster = "img/rajang.png"; 
                    this.clicked = true;
                }
                 
                
            }
        }
    
    });
}

document.addEventListener("DOMContentLoaded", init);    