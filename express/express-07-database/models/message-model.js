const { createConnection } = require('../utils/db-utils')
const { messageMapper } = require('../models/mappers/message-mapper')

const messageModel = {

  getAll: async () => {

    // Connexion à la base de données
    const db = await createConnection()

    // Création de la requête
    const query = `SELECT * FROM message ORDER BY created_at DESC`
    
    // Récupération des données
    const result = await db.query(query)

    // Fermeture de la connexion
    db.end()

    // console.log('result :>> ', result);

    return result.map(row => messageMapper(row))

  },

  getById: async (id) => {

    let db

    try {
      db = await createConnection()

      // Requête SQL paramétrée
      const query = `SELECT * FROM message WHERE message_id = ?`
      const result = await db.query(query, [id])

      return messageMapper(result[0])

    } catch (error) {
      
    } finally {
      db?.end()
    }

  },

  insert: async ({ pseudo, content }) => {

    let db
    try {
      db = await createConnection()

      const query = `INSERT INTO message (pseudo, content) VALUES (?, ?)`
      const result = await db.query(query, [pseudo, content])
      return result.insertId
    } catch (error) {
      
    } finally {
      db.end()
    }

  }

}

module.exports = messageModel