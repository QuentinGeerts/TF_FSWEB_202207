/*
  Créer un programme qui appelle 10 fois une personne (délay de deux secondes entre chaque appel) et qui après les 10 tentatives sans retour de l'utilisateur, stop l'appelle avec un petit message. :)
*/

let compteur = 0

const call = (name) => {
  console.log(name)
  compteur++
}

const intervalId = setInterval(() => {
  call('Alexandre')

  if (compteur === 10) {
    console.log("Pas la peine de répéter, je ne suis pas aveugle !")
    clearInterval(intervalId)
  }

}, 2 * 1000)
