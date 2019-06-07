class Compt {


    constructor() {
        this.timerElt = document.getElementById("validation");
        this.duration = 1200;
        this.display();

    }

    // Enregistrement des données si actualisation de la page du navigateur
    display() {

        if (sessionStorage.length > 0) {

            this.timerElt.textContent = "vous avez une reseversatin en cours " + sessionStorage.getItem("name") /*+ sessionStorage.getItem("tps1") */ ;

        } else {
            this.timerElt.textContent = "Pas de réservation en cours...";
        }

    }

    // Décompte de 20 minutes lorsqu'il y a une réservation validée

    decompte(station, user) {
        clearInterval(this.interval);
        this.save(station.name, this.duration);

        this.interval = setInterval(function() {
            let tps = this.convert(this.duration);
            //console.log(this);
            this.timerElt.textContent = "Merci de votre confiance Mr  " + " " + user + "!! " + "Votre reservation est à la station: " + station.name + " pour une durée de " + tps[0] + " min " + tps[1] + " s.";
            this.duration--;


            // Décompte terminé,arret
            if (this.duration < 0) {

                // Effacement des données éventuelles dans sessionStorage
                sessionStorage.clear();
                // Réinitialisation de l'affichage de la page
                this.display();
            }
        }.bind(this), 1000)
    }

    // Conversion des secondes en minutes et secondes
    convert(duration) {
        // Création d'un tableau afin de stocker les données
        let tps = [];

        // Conversion
        let min = Math.floor(this.duration / 60) % 60;
        let sec = this.duration % 60;

        // Stockage des données récoltées dans le tableau
        tps.push(min, sec);
        /*sessionStorage.setItem("tps0",tps[0]);
            sessionStorage.setItem("tps1",tps[1]); */
        return tps;
    }
    //methode client a creer
    // Enregistrement des données si actualisation de la page du navigateur
    save(name, duration) {
        window.addEventListener("unload", function() {
            sessionStorage.setItem("name", name)
            //sessionStorage.setItem("durationActu", duration);
            //console.log(sessionStorage);
        });
    }
}

//jslint et apres configurattion !