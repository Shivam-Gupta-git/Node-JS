const Student = require("../models/student-models")

exports.getStudentList = (req, res, next)=>{
  Student.fetchAll((registeredStudent) => {
    res.render('user/student-list', {
      PageTitle:'Student List',
      currentPage:'Student List',
      registeredStudent: registeredStudent
    })
  })
}