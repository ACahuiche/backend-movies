const userModel = require("../models/userModel");

class UserDAO {
  save(newUserData){
    try{
      userModel.create({
        userName: newUserData.userName,
        userEmail: newUserData.userEmail,
        userPassword: newUserData.passEncrypt,
        isAdmin: newUserData.isAdmin
      })
      .then((result) =>{
        if(result.length == 0){
          throw new Error(`It is not posible to save the user: ${result}`);
        }
        else{
          return result;
        }
      })
      .catch((err) =>{
        throw new Error(`It is not posible to save the user: ${err}`);
      })
      
    }
    catch(error){
      throw new Error(`The new user is not save, verify the log: ${error}`);
    }
  }
}

module.exports = new UserDAO();
