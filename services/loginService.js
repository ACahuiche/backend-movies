const authDAO = require ('../dao/authDao');

class LoginService {
  async auth(userEmailData, passwordData){
    
    if(userEmailData.trim() == "" || userEmailData == "undefined" ||
       passwordData.trim() == "" || passwordData == "undefined"){
        throw new Error ("Some data is empty, validate the username os password");
    }
    else {
      //send valid data to DAO
      return await authDAO.loginAuth(userEmailData, passwordData);
    }
  }
}

module.exports = new LoginService();
