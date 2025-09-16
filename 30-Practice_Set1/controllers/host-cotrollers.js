exports.getAddItems = (req, res, next) => {
  console.log('Session1', req.isLoggedIn)
  res.render('host/add-items',{
    PageTitle: 'Add Items',
    currentPage: 'Add Items',
    isLoggedIn: req.isLoggedIn
  })
}