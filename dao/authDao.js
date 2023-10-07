const userModel = require("../models/userModel");
const security = require('../tools/security');

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
          const token = "this is my token";
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
