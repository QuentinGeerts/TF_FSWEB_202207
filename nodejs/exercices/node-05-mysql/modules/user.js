const userModel = require("../database/user-model")

const user = {

  getAllUsers: async () => await userModel.get(),

  getUserById: async (userId) => await userModel.getByUserId(userId),

  createUser: async (pseudo) => await userModel.insert(pseudo),

  updateUser: async (userId, pseudo) => await userModel.update(userId, pseudo)

}

module.exports  = user