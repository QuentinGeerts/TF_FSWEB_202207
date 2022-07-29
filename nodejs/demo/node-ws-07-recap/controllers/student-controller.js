const getPostData = require('../modules/get-post-data')
const loadView = require('../modules/load-view')
const studentService = require('./../database/student-service')

const studentController = {

  student_list: (request, response) => {
    studentService.getAll((students) => {
      loadView(response, "student", "list", { students })
    })
  },

  student_create_get: (request, response) => {
    loadView(response, "student", "create")
  },

  student_create_post: (request, response) => {
    getPostData(request)
      .then((student) => {
        console.log(student)

        studentService.add(student)
        loadView(response, "student", "confirm", {student})
      })
  }

}

module.exports = studentController