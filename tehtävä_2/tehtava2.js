var input = require("readline-sync"); //vaatii kirjaston readline-sync asentamista


function onPalindromi(sana){
    const len = sana.length;
    let nurin = ""

    for (let i = len -1; i >= 0; i--){
        nurin += sana[i]
    }

    return nurin == nimi 
}

var nimi = input.question("anna testattava sana ja testaan onko se palindromi: ");

console.log("Onko sana palindromi?", onPalindromi(nimi))
