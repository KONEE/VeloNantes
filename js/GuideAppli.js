   class Guide {

    constructor(id) {

        this.id = id;

    }
    guideAppli() {

        if (document.getElementById(this.id).style.visibility == "hidden") {
            document.getElementById(this.id).style.visibility = "visible";
            document.getElementById('bouton_' + this.id).innerHTML = 'Retour sur réservation';

        } else {
            document.getElementById(this.id).style.visibility = "hidden";
            document.getElementById('bouton_' + this.id).innerHTML = 'Comment réserver?';
        }


    }

}
