
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback 
//Gestion des erreurs
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

/*$(function(){
	


var request = new XMLHttpRequest();
request.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=2afd0ace610b80775cea77c5917acc5ad7644526', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);//tab de donnés stocker (recup)
    //fction parcours le tab data : avec for 
    data.map( function(station){//fction pour recup des markers et les infos des stations 
      //console.log(station);
      
      let marker =  L.marker(station.position).addTo(mymap);
      marker.bindPopup("station :" + " " + station.name + "; "+ "address :" + " " + station.address + "; " + "velo dispo:"+ " " + station.available_bikes);
    } )
   // console.log(data);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();


})*/

