// Attention, le JS n'est pas un langage "Orienté Objet"
// Mais il est "orienté prototype"

// JS OO => Définiri le prototype pour créer un objet Personne

const Personne = function (nom, prenom) {

  this.nom = nom
  this.prenom = prenom
  
}

Personne.prototype.fullname = function () {
  return `${this.prenom} ${this.nom}`
}

module.exports = Personne
// exports = Personne