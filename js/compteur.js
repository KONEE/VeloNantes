
class Compt {
	
	
		constructor(){
			 this.timerElt = document.getElementById("validation");
			 this.duration = 1200;
			 //this.duration = sessionStorage.getItem("1200");
			 this.display();
			// this.decompte(this.name);
			 //this.name = sessionStorage.getItem("name");

			 //this.interval = 20;
		/*	if (sessionStorage.length > 0) {
					// Vérification si données enregistrées dans sessionStorage
					this.getItem(this.name, this.duration);
					//console.log(sessionStorage.getItem("name"));
					// Si oui,lancement du temps restant au moment de l'actualisation de la page
					this.decompte(this.name, this.duration);
				} else {
					this.display();
				}*/
		}

		// Renvoie d'éventuelles données enregistrées
	/*getItem(name, duration) {
		this.name = sessionStorage.getItem("name");
		this.duration = sessionStorage.getItem("duration");
	}*/
	      

	display() {
		this.timerElt.textContent = "Pas de réservation en cours...";
		//console.log("hello");
	}

	// Décompte de 20 minutes lorsqu'il y a une réservation validée
	/*decompte (station, duration)*/
	decompte (station) {
		clearInterval(this.interval);
		this.save(station.name, this.duration);
		console.log(station);
		//var duration = 1200;
		//var durationRefresh = sessionStorage.durationRefresh;
		//console.log(this);
		//let durationActu = sessionStorage.getItem("duration");

		this.interval = setInterval(function () {
			let tps = this.convert(this.duration);
			//console.log(this);
			this.timerElt.textContent = "Merci de votre confiance Mr"+ /* canvas.clients().y.value + */"Votre reservation est à la station: " + station.name + " pour une durée de " + tps[0] + " min " + tps[1] + " s." ;
			this.duration--;

			// Enregistrement des données si actualisation de la page du navigateur
			//this.save(station.name, this.duration);

			// Temps restant après une actualisation de la page du navigateur
			if (sessionStorage.length > 0) {
				//this.duration = durationRefresh;
				//duration = durationRefresh;
				console.log("this");
				duration = durationActu;
				tps = convert(durationActu);
				this.timerElt.textContent = "Vous avez déjà une réservation à la station: " + station + " pour une durée de " + tps[0] + " min " + tps[1] + " s.";
				durationActu--;
				//this.save(station, durationActu);
			}

			// Décompte terminé
			if (this.duration < 0) {
				// Arrêt du décompte
				//clearInterval(interval);
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
		});
	}
}