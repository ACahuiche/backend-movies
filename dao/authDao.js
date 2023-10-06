const userModel = require("../models/userModel");

class AuthDao {
  
  async loginAuth(userEmailData, passwordData) {
    try {
      const doc = await userModel.findOne({ userEmail: userEmailData, userPassword: passwordData });
  
      if (!doc) {
        throw new Error("User not found");
      } 
      else {
        const token = "this is my token";
        
        return token;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthDao();
