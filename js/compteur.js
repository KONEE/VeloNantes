
class Compt {
	
	
		constructor(){
			 this.timerElt = document.getElementById("validation");
			 this.duration = 1200;
			 this.display();
			
		}

		
	      
// Enregistrement des données si actualisation de la page du navigateur
	display() {
		
		if ( sessionStorage.length > 0){
			this.timerElt.textContent = "vous avez une reseversatin en cours " + sessionStorage.getItem("name");
		}else{
			this.timerElt.textContent = "Pas de réservation en cours...";
		}
		
	}

	// Décompte de 20 minutes lorsqu'il y a une réservation validée
	/*decompte (station, duration)*/
	decompte (station) {
		clearInterval(this.interval);
		this.save(station.name, this.duration);
		
		
		this.interval = setInterval(function () {
			let tps = this.convert(this.duration);
			//console.log(this);
			this.timerElt.textContent = "Merci de votre confiance !!! "/*+ user*/  + "Votre reservation est à la station: " + station.name + " pour une durée de " + tps[0] + " min " + tps[1] + " s." ;
			this.duration--;

			

			// Temps restant après une actualisation de la page du navigateur
			if (sessionStorage.length > 0) {
				
			
				duration = durationActu;
				tps = convert(durationActu);
				this.timerElt.textContent = "Vous avez déjà une réservation à la station: " + station + " pour une durée de " + tps[0] + " min " + tps[1] + " s.";
				durationActu--;
				//this.save(station, durationActu);
			}

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
	convert (duration) {
		// Création d'un tableau afin de stocker les données
		let tps = [];

		// Conversion
		let min = Math.floor(this.duration / 60) % 60;
		let sec = this.duration % 60;

		// Stockage des données récoltées dans le tableau
		tps.push(min, sec);
		return tps;
	}

	// Enregistrement des données si actualisation de la page du navigateur
	save(name, duration) {
		window.addEventListener("unload", function () {
			sessionStorage.setItem("name", name)
			sessionStorage.setItem("durationActu", this.duration);
			//console.log(sessionStorage);
		});
	}
}

//jslint et apres configurattion !