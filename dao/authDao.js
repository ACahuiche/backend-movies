const userModel = require("../models/userModel");
const security = require('../tools/security');
const securityConfig = require('../config/securityConfig')
const jwt = require('jsonwebtoken');

class AuthDao {
  
  async loginAuth(userEmailData, passwordData) {
    
    try {
      const doc = await userModel.findOne({ userEmail: userEmailData});
  
      if (!doc) {
        throw new Error("The email entered does not exist");
      } 
      else {

        const match = await security.verifyPassword(passwordData, doc.userPassword);

        if(match){
          let user = {
            'username': doc.userName,
            'isAdmin': doc.isAdmin
          }

          const token = jwt.sign(user ,securityConfig.jwtconfig.secretKey, {expiresIn: securityConfig.jwtconfig.expires});
          return token;
        }
        else {
          throw new Error("The password is wrong");
        }
        
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthDao();
