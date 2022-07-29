const { connection, createConnect } = require('./db')

// Utilisation de async / await

const tweetModel = {

  get: async () => {
    const sql = `
    SELECT * 
    FROM tweet t
      JOIN user u
        ON t.user_id = u.user_id`

    try {
      return (await connection).query(sql)
    } catch (err) {
      console.log('err :>> ', err.sqlMessage)
      return []
    }
  },

  getById: async (tweetId) => {
    const sql = `
    SELECT * 
    FROM tweet t
      JOIN user u
        ON t.user_id = u.user_id
    WHERE t.tweet_id = ?`

    try {
      return (await connection).query(sql, [tweetId])
    } catch (err) {
      console.log('err :>> ', err.sqlMessage)
      return []
    }
  },

  getByUserId: async (userId) => {
    const sql = `
    SELECT * 
    FROM tweet t
      JOIN user u
        ON t.user_id = u.user_id
    WHERE t.user_id = ?`

    try {
      return (await connection).query(sql, [userId])
    } catch (err) {
      console.log('err :>> ', err.sqlMessage)
      return []
    }
  },

  insert: async (message, userId) => {

    const sql = `INSERT INTO tweet (message, user_id) VALUES (?, ?)`

    try {
      return await (await connection).query(sql, [message, userId])
    } catch (err) {
      console.log('err :>> ', err.sqlMessage)
    }

  },

  update: async (tweetId, message) => {
    const sql = `
    UPDATE tweet
    SET message = ?
    WHERE tweet_id = ?`

    try {
      return await (await connection).query(sql, [message, tweetId])
    } catch (err) {
      console.log('err :>> ', err.sqlMessage)
    }
  }

}

module.exports = tweetModel