const {sumRequiredHandle} = require('./sum')
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader('Content-Type', 'text/html')
    res.write(`
  <html lang="en">
  <head>
  <title>Calculator Page</title>
</head>
<body>
  <h1>Welcome to Calculator </h1>
  <a href="/calculator">Go to Calculator</a>
</body>
  </html>
  `);
    return res.end();
  }

  if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type', 'text/html')
    res.write(`
    <html lang="en">
    <head>
    <title>Calculator Page</title>
  </head>
  <body>
    <h1>Here is the Calculator </h1>
   <form action="/calculate-result" method="POST">
   <label for="name">First Num:</label>
   <input type="text" id="name" name="first" placeholder="Enter Your First Number"><br>

   <label for="name">Second Num:</label>
   <input type="text" id="name" name="second" placeholder="Please Enter Your Second Number"><br>
   <button type="submit" value="sum">Sum</button>
   </form>
  </body>
    </html>
    `);
  return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
  return sumRequiredHandle(req, res)
  }
  

    res.setHeader('Content-Type', 'text/html')
    res.write(`
    <html lang="en">
    <head>
    <title>Calculator Page</title>
  </head>
  <body>
    <h1>404 will be undefine</h1>
    <a href="/">Go to Home</a>
  </body>
    </html>
    `);
    return res.end();
};
exports.requestHandler = requestHandler;
