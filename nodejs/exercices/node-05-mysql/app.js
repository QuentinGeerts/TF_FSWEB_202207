const readline = require('readline')
const { stdin: input, stdout: output, stdin, stdout } = require('process')
const { connection } = require('./database/db')

const user = require('./modules/user')
const tweet = require('./modules/tweet')

const reader = readline.createInterface({ input, output })

// Menu
reader.write('Gestion de la base de données :')
reader.write('\n\t1. Récupérer tous les utilisateurs')
reader.write('\n\t2. Insérer un utilisateur')
reader.write('\n\t3. Récupérer tous les tweets')
reader.write('\n\t4. Insérer un tweet')
reader.write('\n\t5. Récupérer les tweets d\'un utilisateur')
reader.write('\n\t6. Modifier le pseudo d\'un utilisateur')
reader.write('\n\t7. Modifier un tweet')
reader.write('\n')

const displayTitle = (title) => {
  reader.write(`\n\n • ${title} •\n\n`)
}

const closeApp = () => {
  reader.write('\n\nBonne journée ! :)')
  reader.close()
  if (connection) closeConnection()
}

const closeConnection = async () => {
  (await connection).end()
}

reader.question('Que voulez-vous faire : ', (response) => {

  // console.log('response :>> ', response);

  switch (response) {

    case '1':

      // > Récupérer tous les utilisateurs

      displayTitle("Récupérer tous les utilisateurs")

      user.getAllUsers()
        .then((users) => {

          if (users.length > 0) {
            reader.write('Liste des utilisateurs :')

            for (const user of users) {
              reader.write(`\n - ${user.user_id} ${user.pseudo}`)
            }

          }
          else {
            reader.write('Aucun utilisateur')
          }

        })
        .finally(() => { closeApp() })

      break

    case '2':

      // > Insérer un utilisateur

      displayTitle('Insérer un utilisateur')

      reader.question('Entrez le pseudo de l\'utilisateur : ', (answer) => {

        user.createUser(answer)
          .then((data) => {

            if (data && data.insertId) console.log("Utilisateur ajouté")
            else console.log("Erreur : Le pseudo est déjà pris.")

          })
          .finally(() => closeApp())

      })

      break

    case '3':

      // > Récupérer tous les tweets

      displayTitle("Récupérer tous les tweets")

      tweet.getAllTweets()
        .then((tweets) => {

          // console.log('tweets :>> ', tweets);

          if (tweets.length > 0) {

            for (const tweet of tweets) {
              reader.write(`\nTweet - ${tweet.tweet_id} de ${tweet.pseudo}`)
              reader.write(`\n"${tweet.message}"\n`)
            }

          }
          else {
            reader.write('Aucun tweet trouvé.')
          }

        })
        .finally(() => closeApp())

      break

    case '4':

      // > Insérer un tweet

      displayTitle("Insérer un tweet")

      reader.question("Entrez votre id : ", (userId) => {

        user.getUserById(userId)
          .then((users) => {
            if (users.length == 1) {

              reader.question("Entrez votre message : ", (message) => {
                tweet.createTweet(message, userId)
                  .then((data) => {
                    if (data && data.affectedRows == 1) {
                      reader.write(`${users[0].pseudo} a publié : "${message}".`)
                    }
                    else {
                      reader.write("Tweet n'a pas été inséré.")
                    }
                  })
                  .finally(() => closeApp())
              })

            }
            else {
              reader.write("Aucun utilisateur trouvé")
              closeApp()
            }
          })

      })

      break

    case '5':

      // > Récupérer les tweets d'un utilisateur

      displayTitle("Récupérer les tweets d'un utilisateur")

      reader.question("Entrez l'id de l'utilisateur : ", (userId) => {
        tweet.getTweetsByUserId(userId)
          .then((tweets) => {

            // console.log('tweets :>> ', tweets);

            if (tweets.length > 0) {

              for (const tweet of tweets) {
                reader.write(`\nTweet - ${tweet.tweet_id} de ${tweet.pseudo}`)
                reader.write(`\n"${tweet.message}"\n`)
              }

            }
            else {
              reader.write('Aucun tweet trouvé.')
            }

          })
          .finally(() => closeApp())
      })

      break

    case '6':

      // > Modifier le pseudo d'un utilisateur

      displayTitle("Modifier le pseudo d'un utilisateur")

      reader.question("Entrez l'id de l'utilsiateur à modifier : ", (userId) => {

        // Vérifier si le user existe
        user.getUserById(userId)
          .then((users) => {

            const { user_id, pseudo } = users[0]

            // console.log('user_id :>> ', user_id);
            // console.log('pseudo :>> ', pseudo);

            if (users.length > 0) {
              // Le user existe

              reader.question(`Entrez le nouveau pseudo (${pseudo}) : `, (newPseudo) => {
                user.updateUser(userId, newPseudo)
                  .then((data) => {
                    // console.log('data :>> ', data)

                    if (data && data.changedRows != 0) console.log("Le pseudo a bien été modifié.")
                    else console.log("Aucun changement effectué.")
                  })
                  .finally(() => closeApp())
              })

            }
            else {
              // Le user n'existe pas
              reader.write("L'id est introuvable.")
              closeApp()
            }

          })

      })

      break
      µ

    case '7':
      // Modifier un tweet

      displayTitle("Modifier un tweet")

      reader.question("Entrez l'id du tweet à modifier : ", (tweetId) => {
        tweet.getTweetById(tweetId)
          .then((tweets) => {
            if (tweets.length == 1) {
              // Tweet a été trouvé

              reader.question(`Entrez le nouveau message du tweet\n("${tweets[0].message}")\n`, (message) => {
                tweet.updateTweet(tweetId, message)
                  .then((data) => {
                    if (data && data.changedRows != 0) console.log("Le message du tweet a bien été modifié.")
                    else console.log("Aucun changement effectué.")
                  })
                  .finally(() => closeApp())
              })

            }
            else {
              // Tweet n'a pas été trouvé
              reader.write("L'id est introuvable.")
              closeApp()
            }
          })
      })

      break

    default:
      reader.write('Erreur de saisie !')
      closeApp()
  }

})