const userModel = require("../models/userModel");

class UserDAO {
  save(newUserData){
    try{
      userModel.create({
        userName: newUserData.userName,
        userEmail: newUserData.userEmail,
        userPassword: newUserData.userPassword,
        isAdmin: newUserData.isAdmin
      })
      .then((result) =>{
        if(result.length == 0){
          throw new Error(`It is not posible to save the user: ${result}`);
          console.log("Bloque 1 errorrs");
        }
        else{
          return result;
          console.log("Bloque 2 exito");
        }
      })
      .catch((err) =>{
        throw new Error(`It is not posible to save the user: ${err}`);
        console.log("Bloque 3 error");
      })
      
    }
    catch(error){
      throw new Error(`The new user is not save, verify the log: ${error}`);
    }
  }
}

module.exports = new UserDAO();
