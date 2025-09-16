const Student = require("../models/student-models");

exports.getAddStudent = (req, res, next) =>{
  res.render('host/add-student',{
    PageTitle:'Add Student',
    currentPage:'Add Student',
    editing: false
  })
}
exports.PostAddedStudent = (req, res, next)=>{

  const {studentName} = req.body;
  const student = new Student(studentName)
  student.save()
  res.redirect('/')
  // res.render('host/added-student',{
  //   PageTitle:'Student Added',
  //   currentPage:'Add Student'
  // })
}

exports.getHostStudentList = (req, res, next) =>{
  Student.fetchAll((registeredStudent) =>{
    res.render('host/host-student-list',{
      PageTitle:'Host Student List',
      currentPage:'Host Student List',
      registeredStudent: registeredStudent
    })
   
  })
}

exports.getHostEditStudentDetails = (req, res, next) =>{
 const studentId = req.params.studentId;

 const editing = req.query.editing === 'true'
 Student.findById(studentId, student =>{
  if(!student){
   return req.redirect('host/host-student-list')
  }
  res.render('host/add-student',{
    PageTitle:'Edit Student Details',
    currentPage:'Host Student List',
    editing: editing,
    student: student
  })
 })
}

exports.postEditedStudentDetails = (req, res, next)=>{
  const {id, studentName} = req.body;
  const student = new Student(studentName)
  student.id = id
  student.save();
  console.log(student)
  res.redirect('/host-student-list')
}

exports.postDeleteStudentDetails = (req, res, next)=>{
  const studentId = req.params.studentId
  Student.findDeleteId(studentId, error =>{
    if(error){
      console.log('Error while deleting', error)
    }
    res.redirect('/host-student-list')
  })
}
