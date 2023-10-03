//henkilö luokka

class Henkilo {
    constructor(en, sn, kn, svuosi)
    {
        this.firstName = en;
        this.lastName = sn;
        this.kutsumaNimi = kn;
        this.syntymaVuosi = svuosi;
    }
    getFirstName(){
        return this.firstName
    }
    setFirstName(nimi){
        this.firstName = nimi
    }
    getLastName(){
        return this.lastName
    }
    setLastName(sukunimi){
        this.lastName = sukunimi
    }
    getKutsumaNimi(){
        return this.kutsumaNimi
    }
    setKutsumaNimi(knimi){
        this.kutsumaNimi = knimi
    }
    getSyntymaVuosi(){
        return this.syntymaVuosi
    }
    setSyntymaVuosi(vuosi){
        this.syntymaVuosi = vuosi
    }


    fullName()
    {
        return this.firstName + " " + this.lastName;
    }

}

class Urheilija extends Henkilo{
    constructor(en, sn, kn, svuosi, linkki, pa, la, sa){
        super(en, sn, kn, svuosi)
        this.linkkiKuva = linkki;
        this.omapaino = pa;
        this.laji = la;
        this.saavutukset = sa;
    }
    getLinkkiKuva(){
        return this.linkkiKuva
    }
    setLinkkiKuva(klinkki){
        this.linkkiKuva  = klinkki
    }
    getOmaPaino(){
        return this.omapaino
    }
    setOmaPaino(paino){
        this.omapaino = paino
    }
    getLaji(){
        return this.laji
    }
    setLaji(laji){
        this.laji = laji
    }
    getSaavutukset(){
        return this.saavutukset
    }
    setSaavutukset(saavutus){
        this.saavutukset = saavutus
    }
}

module.exports = Urheilija
