const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
app.use(express.static(__dirname));

let sanakirja = [];

//Sanakirjan lukeminen ja uusien sanojen lisäämisen muotoilu (splitlines yms kohdassa)
function readSanakirja(){
  const data = fs.readFileSync("./sanakirja.txt", {
    encoding: "utf-8",
    flag: "r",
  });
  
  const splitLines = data.split(/\r?\n/); //jaetaan merkkijono rivin vaihtojen perusteella
  
  splitLines.forEach((line) => {
    const sanat = line.split(" "); //jaetaan yhden rivin merkkijono kahteen osaan
  
    const sana = {
      fin: sanat[0],
      eng: sanat[1],
    };
  
    sanakirja.push(sana);
  });
}

readSanakirja()

app.use(express.json()); //käytetään json -muotoista dataa
app.use(express.urlencoded({ extended: true })); //käytetään tiedonsiirrossa laajennettua muotoa.

//CORS-määrittely
app.use(function (req, res, next) {
  //nettisivu jolle haluat sallia yhdistyksen
  res.setHeader("Access-Control-Allow-Origin", "*");
  //Request metodit jotka haluat sallia
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  //Request headers jotka haluat sallia
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );
  //Set to true if you need the website to include cookies in the requests sent to the API (in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json");

  next();
});

//HTML sivun yhdistys appiin
app.get("/index", (req, res) => {
  res.type('html')
  res.sendFile(__dirname+"/index.html");
});

app.get("/haku", (req, res) => {
  res.type('html')
  res.sendFile(__dirname+"/haku.html");
});

app.get("/sanakirja", (req, res) => {
  res.json(sanakirja)
})

//Haku -ominaisuutta varten sanan haku sanakirjasta, palauttaa englannin kielisen vastineen haetulle suomenkieliselle sanalle
app.get("/sanakirja/:sana", (req, res) => {
  sana = req.params.sana
  palautettava = ""
  sanakirja.forEach(word =>{
    if(word["fin"]==sana){
      palautettava = word["eng"]
    }
  })
  res.json(palautettava)
})

//Sanan lisäys ominaisuus sanakirjaan. Tämän avulla sana siis lisätään.
app.post("/sanakirja", (req, res) => {
  // console.log(req.query) // Url:stä
  console.log(req.body) // Nettisivulta
  fs.appendFileSync("./sanakirja.txt", req.body.fin)
  fs.appendFileSync("./sanakirja.txt", " ")
  fs.appendFileSync("./sanakirja.txt", req.body.eng)
  fs.appendFileSync("./sanakirja.txt", "\n")
  readSanakirja()
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Kuunnellaan portissa ${port}`);
});
