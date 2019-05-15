
class compt {
	
	
		constructor(){
			 this.timerElt = document.getElementById("validation");
			 //this.interval = 20;
			if (sessionStorage.length > 0) {
					// Vérification si données enregistrées dans sessionStorage
					this.getItem(this.name, this.duration);

					// Si oui,lancement du temps restant au moment de l'actualisation de la page
					this.decompte(this.name, this.duration);
				} else {
					this.display();
				}
		}

		// Renvoie d'éventuelles données enregistrées
	getItem(name, duration) {
		this.name = sessionStorage.getItem("name");
		this.duration = sessionStorage.getItem("duration");
	}

	display() {
		this.timerElt.textContent = "Pas de réservation en cours...";
	}

	// Décompte de 20 minutes lorsqu'il y a une réservation validée
	decompte (station, duration) {
		clearInterval(this.interval);
		var duration = 1200;
		var durationRefresh = sessionStorage.durationRefresh;

		this.interval = setInterval(function () {
			let tps = new compt().convert(duration);
			this.timerElt.textContent =  "Un vélo réservé à la station: " + station.name + " pour une durée de " + tps[0] + " min " + tps[1] + " s." ;
			duration--;

			// Enregistrement des données si actualisation de la page du navigateur
			new compt().save(station.name, duration);

			// Temps restant après une actualisation de la page du navigateur
			if (sessionStorage.length > 0) {
				duration = durationRefresh;
				tps = new compt().convert(durationRefresh);
				this.timerElt.textContent = "Vous avez déjà une réservation à la station: " + station + " pour une durée de " + tps[0] + " min " + tps[1] + " s.";
				durationRefresh--;
				new compt().save(station, durationRefresh);
			}

			// Décompte terminé
			if (duration < 0) {
				// Arrêt du décompte
				clearInterval(interval);
				// Effacement des données éventuelles dans sessionStorage
				sessionStorage.clear();
				// Réinitialisation de l'affichage de la page
				new compt().display();
			}
		}, 1000)
	}

	// Conversion des secondes en minutes et secondes
	convert (duration) {
		// Création d'un tableau afin de stocker les données
		let tps = [];

		// Conversion
		let min = Math.floor(duration / 60) % 60;
		let sec = duration % 60;

		// Stockage des données récoltées dans le tableau
		tps.push(min, sec);
		return tps;
	}

	// Enregistrement des données si actualisation de la page du navigateur
	save(name, duration) {
		window.addEventListener("unload", function () {
			sessionStorage.setItem("name", name)
			sessionStorage.setItem("durationRefresh", duration);
		});
	}
}