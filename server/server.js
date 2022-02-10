const { json } = require("express");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const db = require("./database");
const cors = require("cors");

const logger = require("./midleware/logger");

const app = express();
app.use(cors("*"));
app.use("/api/member", require("./routes/api/members"));
app.use(json());
//app.use(logger)
app.use(express.urlencoded({ extended: "false" }));

app.get("/", async (req, res) => {
  const result = await db.promise().query("SELECT * FROM USERS");
  console.log(result[0]);
  res.status(200).send(result[0]);
});


const PORT = process.env.PORT || 8000;

app.post("/", async(req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)
    if (username && password) {
      const user = await db.promise().query(`select * from users where username = '${username}' limit 1`) 
      console.log(user[0])
      console.log(user[0][0].password)
      if(!user[0]){
          return res.status(404).json({msg: "Username not correct"})
      }
      if(user[0][0].password !== password){
          return res.status(404).json({msg: "Incorrect Password"})
      }
      res.status(200).send({ msg: "We have login sucessful" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message})
  }
});

app.listen(PORT, () => console.log(`The server is run on port ${PORT}`));
