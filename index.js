
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3000)

app.get('/', async (req, res) => {
  res.send('<html>   <head>  <meta name="viewport" content="width=device-width, initial-scale=1.0"></head> <body>  <form action="/" method="POST"> <label>Password</label>  <input type="password" id = "password" name="password" required>  <br><br> <button type ="submit">Submit</button>  </body></html>  ')
});


app.post('/', async (req, res) => {
  try {
    let submittedPass = req.body.password;
    if (submittedPass == 'Patti!23') {
      res.send('<html>   <head>  <meta name="viewport" content="width=device-width, initial-scale=1.0"></head> <body>  <a href="http://152.67.160.139:3000/watch" referrerpolicy="origin" style="font-weight: bolder;" >karumuga Bank Nifty  </a><br><br><a href="http://152.67.160.139:4000/watch" style="font-weight: bolder;">karumuga FinNifty </a><br> <br><a href="http://152.67.160.139:9000/watch" style="font-weight: bolder;">karumuga Nifty </a><br> <br><a href="http://152.67.162.92:3000/watch" style="font-weight: bolder;" > <a href="http://129.154.39.199:3000/watch" referrerpolicy="origin" style="font-weight: bolder;" >Dayanitha Bank Nifty  </a><br><br><a href="http://129.154.39.199:9000/watch" style="font-weight: bolder;">Dayanitha Nifty </a> <br><br><a href="http://129.154.39.199:7000/watch" style="font-weight: bolder;">Dayanitha MIDCP Nifty </a><br> <br><a href="http://129.154.39.199:4000/watch" style="font-weight: bolder;">Dayanitha FIN/SENSEX </a>  <br><br><a href="http://152.67.162.92:3000/watch" style="font-weight: bolder;" > Paper Bank Nifty </a><br><br><a href="http://152.67.162.92:9000/watch" style="font-weight: bolder;" >Paper Nifty </a><br><br><a href="http://152.67.162.92:4000/watch" style="font-weight: bolder;" >Paper FinNifty </a>  <br> <br> <a href="http://152.67.162.92:7000/watch" style="font-weight: bolder;" >Paper MDICPNifty </a> </body></html>  ')
    } else {
      res.send('<html>   <head>  <meta name="viewport" content="width=device-width, initial-scale=1.0"></head> <body>  <form action="/" method="POST"> <label>Password</label>  <input type="password" id = "password" name="password" required>  <br><br> <button type ="submit">Submit</button>  </body></html>  ')
    }
  } catch {
    res.send("Internal server error");
  }
});
app.get('/11', async (req, res) => {
  res.send('<html>   <head>  <meta name="viewport" content="width=device-width, initial-scale=1.0"></head> <body>  <a href="http://152.67.160.139:3000/watch" referrerpolicy="origin" style="font-weight: bolder;" >karumuga Bank Nifty  </a><br><br><a href="http://152.67.160.139:9000/watch" style="font-weight: bolder;">karumuga Nifty </a><br> <br><a href="http://152.67.162.92:3000/watch" style="font-weight: bolder;" > <a href="http://152.67.160.139:3000/watch" referrerpolicy="origin" style="font-weight: bolder;" >Dayanitha Bank Nifty  </a><br><br><a href="http://129.154.39.199:9000/watch" style="font-weight: bolder;">Dayanitha Nifty </a><br> <br><a href="http://129.154.39.199:3000/watch" style="font-weight: bolder;" > Paper Bank Nifty </a><br><br><a href="http://152.67.162.92:9000/watch" style="font-weight: bolder;" >Paper Nifty </a><br><br><a href="http://152.67.162.92:4000/watch" style="font-weight: bolder;" >Paper FinNifty </a>  </body></html>  ')
});

