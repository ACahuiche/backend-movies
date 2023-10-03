const authDAO = require ('../dao/authDao');

class LoginService {
  auth(loginData){
    if(loginData.user.trim() == "" ||loginData.user.trim() == "undefined" ||
       loginData.password.trim() == "" ||loginData.password.trim() == "undefined"){
        throw new Error ("Some data is empty, validate the username os password");
    }
    else {
      //send valid data to DAO
      return authDAO.loginAuth(loginData);
    }
  }
}

module.exports = new LoginService();
