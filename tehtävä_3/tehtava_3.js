var input = require("readline-sync"); //vaatii kirjaston readline-sync asentamista

let henkilot = [{nimi:"joni", numero:"183967744"}, {nimi:"salla", numero:"584732598"}]

var fromInputNimi = input.question("Anna lisättävän henkilön nimi: ")
var fromInputNumero = input.question("Anna lisättävän henkilön puhelinnumero: ")

let uusihenkilo={nimi:fromInputNimi, numero:fromInputNumero}
henkilot.push(uusihenkilo)


function puhnrohaku(taulukko, nimi){
    for(let i = 0; i < taulukko.length; i++){
        if (taulukko[i]["nimi"]==nimi){
            return taulukko[i]["numero"]
        }
    }
}

var haku = input.question ("Hae puhelinnumeroa nimen perusteella: ");
console.log("Puhelinnumero on: ", puhnrohaku(henkilot, haku))