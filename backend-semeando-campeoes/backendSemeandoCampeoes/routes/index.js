var express = require('express');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: '*' // Replace with your React app's URL
  }));
var router = express.Router();
const PORT = 3020;
const db = require("../db/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
app.get("/api/appUsers", async (req, res) => {
  const sort = { stamp: -1 };
  const returnRouter = req.query.returnRouter;
  const appUsers = await db.find("appUsers");
  res.header('Access-Control-Allow-Origin', '*');
  res.json(appUsers); 
  

});
app.post("/api/appUsers", async (req, res) => {
  const appUsersBody    = req.body;
  const appUsersHeader  = req.headers;
  const returnRouter          = appUsersBody.returnRouter;
  
  // const sort = { stamp: -1 };
  // const configs = await db.find("configs", sort, {stream_id: "BRLBTC" },1);
  const objPrices = {
                    userName:      appUsersBody.userName,
                    loginName:     appUsersBody.loginName,
                    userGraduacao: appUsersBody.userGraduacao,
                    userBirthday:  appUsersBody.userBirthday,
                    userGenero:    appUsersBody.userGenero,
                    typeUser:      appUsersBody.typeUser 
                    
                  }
  let ok  = ""
  
  const result = await db.insert( "appUsers", objPrices );
  res.status(201)
  res.redirect(returnRouter)
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
