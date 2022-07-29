const loadView = require("../modules/load-view")


const homeController = {

  index: (request, response) => {
    loadView(response, "home", "index")
  }

}

module.exports = homeController