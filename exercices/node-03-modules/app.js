const readline = require('readline')
const { fromBirthdate, fromChristmas, fromHolidays } = require('./modules/event-days')

// process.stdout.write(`Obtenir le nombre de jours avant :
// 1. Noël
// 2. Anniversaire
// 3. Vacances
// Quel est votre choix :`)

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.write('Obtenir le nombre de jours avant :')
rl.write('\n\t1. Noël')
rl.write('\n\t2. Anniversaire')
rl.write('\n\t3. Vacances')
rl.write('\n\t4. Quitter')
rl.write('\n')

rl.question("Quel est votre choix : ", (choice) => {

  let nbDays

  switch (choice) {
    case '1':
      // Noël
      nbDays = fromChristmas()

      if (nbDays > 0) rl.write(`Noël est dans ${nbDays} jours ! 🎄`)
      else rl.write('Joyeux Noël ! 🎄')

      rl.close()

      break

    case '2':
      // Anniversaire
      rl.question("Quel est votre date d'anniversaire (YYYY-mm-dd) : ", (inputDate) => {
        const birthdate = new Date(inputDate)

        nbDays = fromBirthdate(birthdate)

        if (nbDays > 0) rl.write(`Ton anniversaire est dans ${nbDays} jours ! 🎂`)
        else rl.write('Joyeux anniversaire ! 🎂')

        rl.close()
      })

      break

    case '3':
      // Vacances

      nbDays = fromHolidays()

      if (nbDays > 0) rl.write(`Les prochaines vacances sont dans ${nbDays} jours ! 🎉`)
      else rl.write('Les enfants sont en vacances, mais pas vous ! :D')
      rl.close()

      break

    default:
      rl.write("\nBonne journée.")
      rl.close()

      break
  }

})
