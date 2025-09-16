exports.getLogInPage = (req, res, next)=>{
res.render('auth/login',{
  PageTitle: 'Login Page',
  currentPage: 'Login Page',
  isLoggedIn: false
})
}

exports.postLoginPage = (req, res, next) => {
  console.log(req.body)
  req.session.isLoggedIn = true
  res.redirect('/')
}

exports.postLogOut = (req, res, next) => {
  req.session.destroy(()=>{
    res.redirect('/login-page')
  })
}