let henkilö1 = {nimi:"salla", pituus:"175"}
let henkilö2 = {nimi:"joni", pituus:"183"}


const lista = [henkilö1, henkilö2]

console.log(lista[1])

console.log("pöö")

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]["nimi"])
    if (lista[i]["nimi"]=="joni"){
        console.log(lista[i]["pituus"])
    }
}