const logicalErrorHandel = ()=>{
  let num = 5;
  if(num = 10){ // Assigment insted of comparision
    console.log(num)
  }else{
    console.log('number is 10')
  }
}
module.exports = logicalErrorHandel;