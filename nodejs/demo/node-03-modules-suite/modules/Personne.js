export default class Personne {
  constructor(nom, prenom) {
    this.nom = nom
    this.prenom = prenom
  }

  get fullname () { return this.prenom + ' ' + this.nom }

  direBonjour = () => { console.log(`${this.prenom} vous dit bonjour !`) }
}
