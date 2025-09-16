const Home = require("../models/modelsHome")

exports.getStudentHome = (req, res, next)=>{
  res.render('store/student-home', {
    PageTitle:'Student Home Page',
    currentPage:'Student Home Page'
  })
}
exports.getStudentLists = (req, res, next)=>{
  Home.fetchAll((registeredStudents)=>{
    res.render('store/student-list', {
      registeredStudents: registeredStudents,
      PageTitle:'Student Lists',
      currentPage:'Student Lists'
    })
  })
}
exports.getStudentDetails = (req, res, next)=>{
  const studentId = req.params.studentId;
  Home.findById(studentId, student =>{
    if(!student){
      // console.log('hello')
      res.redirect('/student-lists')
    }
    else{
      res.render('store/student-details', {
        student: student,
        PageTitle: 'Student Details',
        currentPage: 'Student Lists'
      })
    }
  })
  console.log('Student id',studentId)
}