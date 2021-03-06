const { User } = require("../server/models/User");

//middleware

let auth = (req, res, next) => {
  //인증 처리를 하는 곳
  let token = req.cookies.x_auth;
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;//request했을때 token을 가질 수 있음
    req.user = user; 
    next(); 
  });
};

module.exports = { auth };