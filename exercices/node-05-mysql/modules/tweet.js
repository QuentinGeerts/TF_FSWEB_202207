const tweetModel = require("../database/tweet-model")


const tweet = {

  getAllTweets: async () => await tweetModel.get(),
  getTweetsByUserId: async (userId) => await tweetModel.getByUserId(userId),
  getTweetById: async (tweetId) => await tweetModel.getById(tweetId),
  createTweet: async (message, userId) => await tweetModel.insert(message, userId),
  updateTweet: async (tweetId, message) => await tweetModel.update(tweetId, message)
}

module.exports = tweet