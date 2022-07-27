const fs = require('fs')
const path = require('path')

const filePersonnage = path.resolve('data', 'personnage.json')
const fileSavePersonnage = path.resolve('data', 'result.json')

// Lecture du fichier
fs.readFile(filePersonnage, { encoding: 'utf-8' }, (err, data) => {

  if (err) {
    console.log(err)
    return
  }

  const json = JSON.parse(data)
  // console.log('json :>> ', json);

  // Récupération des données
  const personnages = getPersonnages(json)
  // console.log('personnages :>> ', personnages);

  // Sauvegarde des données
  savePersonnage(personnages)

})

// Extraction des personnages du JSON
const getPersonnages = (data) => {

  if (data.membre !== undefined) {
    const personnages = []

    data.membre.forEach(element => {
      const personnagesInternes = getPersonnages(element)
      personnages.push(...personnagesInternes)
    })

    return personnages
  }
  else {
    return [data]
  }

}

// Sauvegarde des personnages dans le fichier result.json
const savePersonnage = (personnages) => {
  const data = {
    nbPersonnage: personnages.length,
    personnages
  }

  // console.log('data :>> ', data);

  const json = JSON.stringify(data, null, 4)
  // console.log('json :>> ', json);

  fs.writeFile(fileSavePersonnage, json, { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.log("Erreur :", err.message);
    }

    console.log("Saved !")
  })
}