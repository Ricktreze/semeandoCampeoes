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
  const objPrices = {
                    userName:      appUsersBody.userName,
                    loginPassword: appUsersBody.loginPassword,
                    loginName:     appUsersBody.loginName,
                    userCpf:       appUsersBody.userCpf,
                    userGraduacao: appUsersBody.userGraduacao,
                    userBirthday:  appUsersBody.userBirthday,
                    userGenero:    appUsersBody.userGenero,
                    typeUser:      appUsersBody.typeUser,
                    stampLogin:    appUsersBody.stampLogin                    
                  }  
  const result = await db.insert( "appUsers", objPrices );
  res.status(201)
  res.redirect(returnRouter)
});

app.put("/api/appUsers", async (req, res) => {
  const appUsersBody    = req.body;
  const appUsersHeader  = req.headers;
  const id              = appUsersBody._id;
  const objAppUsers     = {
    stampLogin: appUsersBody.stampLogin,                    
  } 
  const result = await db.update(id, objAppUsers,"appUsers" );
  res.status(201)
  // res.redirect(returnRouter)
});

app.post("/api/validaLogin", async (req, res) => {
  const filter        = req.body
  // const loginPassword = req.body.loginPassword
  const sort          = { stamp: -1 };
  // const filter        = {loginName: loginName, loginPassword: loginPassword}
  const appUsers      = await db.find01("appUsers", sort, filter, 1);
  res.header('Access-Control-Allow-Origin', '*');
  res.json(appUsers);
});


app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
