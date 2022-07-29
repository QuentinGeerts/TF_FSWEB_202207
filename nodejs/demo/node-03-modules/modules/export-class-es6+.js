// Utilisation du sucre syntaxique arrivé en 2015
// Qui permet de créer une classe avec le mot-clef "class"
// Important => le fonctionnement est identique qu'en ES5

class Personne {

  constructor(nom = "Toto", prenom) {
    this.nom = nom
    this.prenom = prenom
  }

  get fullname () {
    return `${this.prenom} ${this.nom}`
  }

}

module.exports = Personne