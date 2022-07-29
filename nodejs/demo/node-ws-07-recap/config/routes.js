const homeController = require("../controllers/home-controller")
const studentController = require("../controllers/student-controller")


const routes = {

  // Accueil
  "/": (request, response) => {
    homeController.index(request, response)
  },

  // Student
  "/student": (request, response) => {
    studentController.student_list(request, response)
  },

  "/student/add": (request, response) => {
    if (request.method === "GET") {
      studentController.student_create_get(request, response)
    }
    else if (request.method === "POST") {
      studentController.student_create_post(request, response)
    }
  }



}

module.exports = routes