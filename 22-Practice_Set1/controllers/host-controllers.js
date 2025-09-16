const Home = require("../models/modelsHome");

exports.getStusentAdd = (req, res, next)=>{
  res.render('host/student-add', {
    PageTitle: 'Add Student',
    currentPage:'Add Student',
    editing: false
  })
}


exports.postStudentAdded = (req, res, next)=>{

  const {StudentName, StudentEnroll, StudentDOB, StudentGender, StudentEmail, StudentNumber, StudentAddress, StudentCity, StudentState, StudentPinCode, StudentStartSession, StudentEndSession,  StudentPhotoFile, StudentPhotoUrl, StudentGuardiansName, StudentGuardiansNumber} = req.body;
  console.log(req.body)
  
  const student = new Home(StudentName, StudentEnroll, StudentDOB, StudentGender, StudentEmail, StudentNumber, StudentAddress, StudentCity, StudentState, StudentPinCode, StudentStartSession, StudentEndSession, StudentPhotoFile, StudentPhotoUrl, StudentGuardiansName, StudentGuardiansNumber)
  student.save()

  res.render('host/student-added', {
    PageTitle:'Added Student',
    currentPage:'Add Student'
  })
  // console.log(req.body)
}

exports.getHostStudentList = (req, res, next)=>{
  Home.fetchAll((registeredStudents)=>{
    res.render('host/host-student-list', {
      registeredStudents: registeredStudents,
      PageTitle: 'Host Student List',
      currentPage:'Host Student List'
    })
  })
}

exports.getHostStudentDetails = (req, res, next)=>{
  const studentId = req.params.studentId;
  Home.findById(studentId, student =>{
    if(!student){
      req.redirect('/host-student-lists')
    }
    else{
      res.render('host/host-student-details', {
        student: student,
        PageTitle: 'Host Student List',
        currentPage:'Host Student List'
      })
    }
  })
}

exports.getEditStudent = (req, res, next)=>{
  const studentId = req.params.studentId;
  const editing = req.query.editing === 'true'
  Home.findById(studentId, student =>{
    if(!student){
      return res.redirect('/host-student-lists')
    }
    res.render('host/student-add', {
      student: student,
      editing: editing,
      PageTitle: 'Edit Our Student',
      currentPage: 'Host Student List'
    })
  })
}

exports.postEditStudents = (req, res, next)=>{
  const {id, StudentName, StudentEnroll, StudentDOB, StudentGender, StudentEmail, StudentNumber, StudentAddress, StudentCity, StudentState, StudentPinCode, StudentStartSession, StudentEndSession,  StudentPhotoFile, StudentPhotoUrl, StudentGuardiansName, StudentGuardiansNumber} = req.body
  
  const student = new Home(StudentName, StudentEnroll, StudentDOB, StudentGender, StudentEmail, StudentNumber, StudentAddress, StudentCity, StudentState, StudentPinCode, StudentStartSession, StudentEndSession,  StudentPhotoFile, StudentPhotoUrl, StudentGuardiansName, StudentGuardiansNumber)
  
  student.id = id;
  student.save()
  console.log(req.body)
  res.redirect('/host-student-lists')
}

// For Deleteing Student Details
exports.postDeleteStudentDetails = (req, res, next)=>{
  const studentId = req.params.studentId
  Home.DeleteById(studentId, error =>{
    if(error){
      console.log('while err in deleting student details')
    }
    res.redirect('/host-student-lists')
  })
}
