// Core module
const fs = require('fs')
const path = require('path')

// Local module
const rootPath = require('../utils/utils-path');
const { error } = require('console');
const StudentDataPath = path.join(rootPath, 'data', 'student.json');

module.exports = class Home {

  constructor(StudentName, StudentEnroll, StudentDOB, StudentGender, StudentEmail, StudentNumber, StudentAddress, StudentCity, StudentState, StudentPinCode, StudentStartSession, StudentEndSession, StudentPhotoFile, StudentPhotoUrl, StudentGuardiansName, StudentGuardiansNumber){

    this.StudentName = StudentName;
    this.StudentEnroll = StudentEnroll;
    this.StudentDOB = StudentDOB;
    this.StudentGender = StudentGender;
    this.StudentEmail = StudentEmail;
    this.StudentNumber = StudentNumber;
    this.StudentAddress = StudentAddress;
    this.StudentCity = StudentCity;
    this.StudentState = StudentState;
    this.StudentPinCode = StudentPinCode;
    this.StudentStartSession = StudentStartSession;
    this.StudentEndSession = StudentEndSession;
    this.StudentPhotoFile = StudentPhotoFile;
    this.StudentPhotoUrl = StudentPhotoUrl;
    this.StudentGuardiansName = StudentGuardiansName;
    this.StudentGuardiansNumber = StudentGuardiansNumber;
  }
  save(){
    Home.fetchAll((registeredStudents) => {
      if(this.id){
        registeredStudents = registeredStudents.map(student => student.id === this.id ? this : student)
      }else{
        //For add student case
          this.id = Math.random().toString();
          registeredStudents.push(this)
        }
        fs.writeFile(StudentDataPath, JSON.stringify(registeredStudents), error => {
          console.log('File writting Concluded', error)
        })
        console.log(registeredStudents)
    })
  }
  static fetchAll(callback){
    fs.readFile(StudentDataPath, (err, data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }

  // For Student Details
  static findById(studentId, callback){
    this.fetchAll(students =>{
      const StudentFound = students.find(student => student.id === studentId);
      // console.log('Student Details',StudentFound)
      callback(StudentFound);
    })
  }

  // For Deleting Student Details
  static DeleteById(studentId, callback){
    this.fetchAll(student =>{
      student = student.filter(student => student.id !== studentId)
      fs.writeFile(StudentDataPath, JSON.stringify(student), callback)
    })
  }
}
