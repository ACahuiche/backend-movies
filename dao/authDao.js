const userModel = require("../models/userModel");
const security = require('../tools/security');
const securityConfig = require('../config/securityConfig')
const { createSecretKey } = require('crypto');
const jwt = require('jose')

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
            'isAdmin': doc.isAdmin,
            'backkey': securityConfig.jwtconfig.backkey
          }

          const secretKey = createSecretKey(securityConfig.jwtconfig.secretKey,'utf-8');

          const token = await new jwt.SignJWT(user)
          .setProtectedHeader({ alg: securityConfig.jwtconfig.alg })
          .sign(secretKey)

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
