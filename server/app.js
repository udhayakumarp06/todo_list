const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const todos = require('./routes/todoRouter')


app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:"true"
}));
app.use('/api', todos)

app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
  
  app.use("/auth", authRoute);

const port = 8000;
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})