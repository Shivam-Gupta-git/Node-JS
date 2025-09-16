// Core Module
const fs = require('fs')
const path = require('path')

// Local Module
const rootPath = require('../utils/utilPath')
const { error } = require('console')
const studentDataPath = path.join(rootPath, 'data', 'student.json')

module.exports = class Student {
  constructor(studentName){
    this.studentName = studentName;
  }
  save(){
    Student.fetchAll((registeredStudent)=>{
      if(this.id){
        registeredStudent = registeredStudent.map(student => student.id === this.id ? this : student)
      } else{
        this.id = Math.random().toString()
        registeredStudent.push(this)
      }
      fs.writeFile(studentDataPath, JSON.stringify(registeredStudent), (error) => {
        console.log('File writting Concluded', error)
      })
    })
  }

  static fetchAll(callback){
    fs.readFile(studentDataPath, (err, data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }

//  Finding items Id
  static findById(studentId, callback){
    this.fetchAll(students =>{
      const studentIdFound = students.find(student => student.id === studentId);
      callback(studentIdFound)
    })
  }

  // Delete Items
  static findDeleteId(studentId, callback){
    this.fetchAll(student =>{
      student = student.filter(student => student.id !== studentId)
      fs.writeFile(studentDataPath, JSON.stringify(student), callback)
    })
  }
}