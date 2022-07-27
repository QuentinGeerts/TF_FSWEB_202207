const fs = require('fs')


const readJsonFile = (jsonFile) => {
  return new Promise((resolve, reject) => {

    fs.readFile(jsonFile, (err, data) => {

      if (err) reject(err)
      else resolve(JSON.parse(data))

    })

  })
}

readJsonFile('./data/people.json')
  .then((json) => {

    console.log('json :>> ', json);

    for (const person of json.people) {
      // const { firstname, lastname } = person
      const { firstname: toto, lastname: tata } = person
      console.log(` - ${person.firstname} ${person.lastname}`)
      console.log(` - ${toto} ${tata}`)
    }
  })
  .catch(err => console.log(`Une erreur est survenue : ${err}`))