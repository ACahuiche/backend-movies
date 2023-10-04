const userDAO = require ('../dao/userDAO.js');

class UserService {
  dataValidateToSave(newUserData){
    if(!newUserData){
      throw new Error("The info of new user is Empty");
    }
    
    if(!newUserData.userName ||newUserData.userName.trim() == '' || newUserData.userName == 'undefined'){
      throw new Error("The user name is Empty");
    }

    if(!newUserData.userEmail ||newUserData.userEmail.trim() == '' || newUserData.userEmail == 'undefined'){
      throw new Error("The user email is Empty");
    }

    if(!newUserData.userPassword ||newUserData.userPassword.trim() == '' || newUserData.userPassword == 'undefined'){
      throw new Error("The user password is Empty");
    }

    if(!newUserData.isAdmin ||newUserData.isAdmin.trim() == '' || newUserData.isAdmin == 'undefined'){
      newUserData.isAdmin = false;
    }

    return userDAO.save(newUserData);
  }
}

module.exports = new UserService();
