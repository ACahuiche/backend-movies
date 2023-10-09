const jwt = require('jsonwebtoken');
const secretKey = require('../config/securityConfig').jwtconfig.secretKey;

class SecurityToken {
  validate(req, res, next) {
    //Authorization: Bearer <token>
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
      const token = bearerHeader.split(" ")[1];

      jwt.verify(token, secretKey, (error, authData) =>{
        if(error){
          res.status(403).json({
            success:false,
            message: `The token session is incorrect`
          }); 
        }
        else {
          next();
        }
      });
    }
    else {
      res.status(403).json({
        success:false,
        message: `No session token detected`
      });
    }
  }
}

module.exports = new SecurityToken();
