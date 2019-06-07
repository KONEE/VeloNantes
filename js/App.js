// Chargement sliders
let slid = new Slider("mySlides");
slid.showSlides(3);
// Chargement Guide slider
let guid = new Guide("texte");
guid.guideAppli();
// Chargement de la carte
leaflet.initMap();
// Chargement de compteur
let compte = new Compt();
//compte.decompte(station);
//console.log(sessionStorage);
// Chargement Burger
menuBurger.initBurger();