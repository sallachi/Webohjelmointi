const Urheilija = require("./cl/henkilo.js");

const urh = new Urheilija("Kaisa", "Mäkäräinen", "Kaisa", 1983, "https://shorturl.at/ehnLV", 65, "ampumahiihto", "27 voittoa, palkintokorokkeella ylipäänsä 85 kertaa");
const urh2 = new Urheilija("Lauri", "Markkanen", "Lauri", 1997, "https://shorturl.at/oYZ13", 105, "koripallo", "Suomen maajoukkueessa: 23 ottelua, 368 pistettä")
const urh3 = new Urheilija("Enni", "Rukajärvi", "Enni", 1990, "https://shorturl.at/jtwU0", 54, "lumilautailu", "4 voittoa, palkintokorokkeella ylipäänsä 7 kertaa")

console.log(urh);
console.log(urh2);
console.log(urh3);