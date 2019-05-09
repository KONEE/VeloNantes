
/*class mapp{

	constructor(){
		var mymap = L.map('map').setView([47.218371,-1.553621,12], 13);

		tileStress = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
			{ attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> ',
			 maxZoom: 18, id: 'mapbox.streets', accessToken: 'pk.eyJ1Ijoia29uZWUiLCJhIjoiY2p1aDF5Y2lyMDBjazN6bmJhbGVnNzk4NSJ9.fwMlfZFYoKpkV-ZJLUQ8Jg' });
		tileStress.addTo(mymap);
	}

	ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=2afd0ace610b80775cea77c5917acc5ad7644526', function (stations) {
      stations = JSON.parse(stations);
      stations.map( function(station){//fction pour recup des markers et les infos des stations 
      //console.log(station);
      
      let marker =  L.marker(station.position).addTo(mymap);
      marker.bindPopup("station :" + " " + station.name + "; "+ "address :" + " " + station.address + "; " + "velo dispo:"+ " " + station.available_bikes);
    } )

  });
}*/


	/*var mymap = L.map('map').setView([47.218371,-1.553621,12], 13);

	tileStress = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
		{ attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> ',
		 maxZoom: 18, id: 'mapbox.streets', accessToken: 'pk.eyJ1Ijoia29uZWUiLCJhIjoiY2p1aDF5Y2lyMDBjazN6bmJhbGVnNzk4NSJ9.fwMlfZFYoKpkV-ZJLUQ8Jg' });
	tileStress.addTo(mymap);



let  marker = L.marker([47.218371,-1.553621,12]).addTo(mymap);// une fonction pour recuperer les marker // position
 marker.bindPopup("<b>Hello nantes!</b><br>I am a popup."); // les infos comme nbre des velo dispo

 function onMapClick(e) { 
 	alert("You clicked the map at " + e.latlng); 
 } 
 mymap.on('click', onMapClick);
 
 */
 /*var mymap = L.map('googleMap').setView([47.218371,-1.553621,12], 13);

	tileStress = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
		{ attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> ',
		 maxZoom: 18, id: 'mapbox.streets', accessToken: 'pk.eyJ1Ijoia29uZWUiLCJhIjoiY2p1aDF5Y2lyMDBjazN6bmJhbGVnNzk4NSJ9.fwMlfZFYoKpkV-ZJLUQ8Jg' });
	tileStress.addTo(mymap);

	ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=2afd0ace610b80775cea77c5917acc5ad7644526', function (stations) {
      stations = JSON.parse(stations);
      stations.map( function(station){//fction pour recup des markers et les infos des stations 
      //console.log(station);
      
      let marker =  L.marker(station.position).addTo(mymap);
      
     // marker.bindPopup("station :" + " " + station.name + "; "+ "address :" + " " + station.address + "; " + "velo dispo:"+ " " + station.available_bikes);
      //marker.aside("station :" + " " + station.name + "; "+ "address :" + " " + station.address + "; " + "velo dispo:"+ " " + station.available_bikes);
   		
   		})
    } )*/

/*let  marker = L.marker([47.218371,-1.553621,12]).addTo(mymap);// une fonction pour recuperer les marker // position
 marker.bindPopup("<b>Hello nantes!</b><br>I am a popup."); // les infos comme nbre des velo dispo
*/
/* function onMapClick(e) { 
 	alert("You clicked the map at " + e.latlng); 
 } 
 mymap.on('click', onMapClick); */

////////////////////new::::::::::::::::::::::::::::::::::::::::::::::::::::::
var googleMap;

var leaflet = {
 // Creating map options//Initialisation de la carte
        initMap: function(){
         this.mapOptions = {
            center: [47.218371,-1.553621],
            zoom: 10
         };
         // Creating a map object
         var mymap = new L.map('googleMap', this.mapOptions);
         
         // Creating a Layer object
         var layer = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
      				{ attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> ',
      		 		maxZoom: 18, id: 'mapbox.streets', accessToken: 'pk.eyJ1Ijoia29uZWUiLCJhIjoiY2p1aDF5Y2lyMDBjazN6bmJhbGVnNzk4NSJ9.fwMlfZFYoKpkV-ZJLUQ8Jg' });
         
         // Adding layer to the map
         mymap.addLayer(layer);
         // Récupération des stations JC Decaux
         ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=2afd0ace610b80775cea77c5917acc5ad7644526', function (stations) {
              stations = JSON.parse(stations);
              // Récupération des données
              stations.map( function(station){//fction pour recup des markers et les infos des stations 
              //console.log(station);
              
                  let marker = new L.marker(station.position)
                  marker.addTo(mymap);
                  
                 marker.bindPopup("station :" + " " + station.name + "; "+ "address :" + " " + station.address + "; " + "velo dispo:"+ " " + station.available_bikes);
              //marker.aside("station :" + " " + station.name + "; "+ "address :" + " " + station.address + "; " + "velo dispo:"+ " " + station.available_bikes);
           		
              marker.on("click", function () {

          // Suppression des au tres éléments non selectionné
          var clear = document.getElementById("stationDetails");
          while (clear.firstChild) {
            clear.removeChild(clear.firstChild);
          }

          // Affichage des informations sur la station désirée
          aside.init(station);
        });
           		})


         } )
         // Creating a marker
        // var marker = L.marker([17.385044, 78.486671]);
         
         // Adding marker to the map
        // marker.addTo(map);


  }
};